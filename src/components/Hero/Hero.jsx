import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import arrowDown from '../../assets/arrow-down.svg'
import ellipseGlow from '../../assets/Ellipse 73105.png'
import lockIcon from '../../assets/thumbnails/lock.svg'
import { PROJECTS } from '../../data/projects'
import styles from './Hero.module.css'

// Mount-time intro: the three heading lines fade/blur in one at a time,
// then the Contact column, then the Works column — a plain CSS transition
// gated by a single "has it started" flip (see introStarted below), with
// each element's own stagger coming from its transitionDelay. Slower than
// the detail pages' own section-reveal transition (1.5s — see
// reveal.module.css) since this is the very first thing a visitor sees.
const INTRO_DURATION_MS = 1900
const INTRO_BLUR_PX = 14
const INTRO_STAGGER_MS = 280
const INTRO_START_MS = 100

const GLOW_Y_START = 105 // % — center sits below the viewport, only the top half of the glow shows
const GLOW_Y_END = 50 // % — center lands at screen-center, timed to finish exactly as the thumbnails finish blooming in
const GLOW_RISE_END = 0.45 // scroll progress at which the farthest thumbnail (distance 2, enterStart 0.3 + 0.15) finishes appearing

// NDA'd work — matches PROTECTED in ProjectDetail.jsx, which gates the
// actual detail page behind a password. The thumbnail here just previews
// that it's locked: the image is blurred and a lock + label sit over it.
const PROTECTED_SLUGS = new Set(['one-ui-new-spectrum'])

const PROJECT_COUNT = PROJECTS.length
const INITIAL_INDEX = 0
const SLOT_OFFSETS = [-2, -1, 0, 1, 2]
const TITLE_TEXT_START_BLUR = 1.8 // px — equivalent to the "30% blur" starting point, sharpening to 0 as it reveals
const TEXT_HIDE_MS = 300 // phase 0: title text + arrows fade out first, before the frame starts shrinking
const SHRINK_MS = 500 // phase 1: current pill shrinks to a plain circle (matches .projectItem transition duration)
const SWIPE_MS = 450 // phase 2: the row of circles swipes over by one slot (matches .sliding transition duration)
const GROW_MS = 500 // phase 3: the new center circle grows back into the expanded pill
const TEXT_SHOW_MS = 900 // phase 4: title text + arrows fade back in slowly, once fully grown

const clamp01 = (v) => Math.min(Math.max(v, 0), 1)
const phase = (p, start, end) => clamp01((p - start) / (end - start))
const clampNum = (v, min, max) => Math.min(Math.max(v, min), max)
const lerp = (a, b, t) => a + (b - a) * t
const mod = (n, m) => ((n % m) + m) % m
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)

// Click-to-detail hand-off: text/arrows blur+fade out first (reuses the
// same TEXT_HIDE_MS treatment as the carousel), the side thumbnails fade
// out alongside them, and then the selected project's capsule takes over as
// a fixed-position clone (portaled to <body>, since .projectsRow's own
// transform would otherwise trap it) that grows from its exact on-screen
// rect to the exact rect of the hero video on the detail page — same size,
// same top-left-of-viewport position, at any viewport size — while its
// rounding relaxes to 0 and the page behind fades to black, so the cut to
// the real page reads as one continuous surface rather than a jump.
const DETAIL_EXPAND_MS = 1000

function ChevronIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
    </svg>
  )
}

function Hero() {
  const heroRef = useRef(null)
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(INITIAL_INDEX)
  const [localExpand, setLocalExpand] = useState(1) // click-driven expand state, used once scroll entrance is done
  const [showText, setShowText] = useState(true) // click-driven: only true once the pill has fully grown
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideOffset, setSlideOffset] = useState(0) // px — whole row swipes by one slot between shrink and swap
  const [sliding, setSliding] = useState(false)
  const interactive = progress >= 0.995

  // Click-to-detail hand-off state. detailTarget is set (and non-null) the
  // instant a project is clicked, through to navigation. detailExpanding
  // flips on once the text/arrows have finished fading, starting the
  // capsule's grow-to-fullscreen animation; detailElapsed is ms into that,
  // driven by a single rAF loop.
  // Mount-time intro reveal (title lines -> Contact -> Works). Starts false
  // so the first paint has the hidden (blurred/transparent) state, then
  // flips true a frame later so the CSS transition actually has something
  // to animate from — a plain double-rAF, not tied to scroll at all.
  const [introStarted, setIntroStarted] = useState(false)
  useEffect(() => {
    let rafId = requestAnimationFrame(() => {
      rafId = requestAnimationFrame(() => setIntroStarted(true))
    })
    return () => cancelAnimationFrame(rafId)
  }, [])

  // Below this, the carousel switches from a horizontal row to a vertical
  // stack (see the mobile sizing block below) — same interaction model,
  // just rotated 90°.
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(max-width: 640px)')
    const apply = () => setIsMobile(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const [detailTarget, setDetailTarget] = useState(null)
  const [detailExpanding, setDetailExpanding] = useState(false)
  const [detailElapsed, setDetailElapsed] = useState(0)
  // The clicked capsule's own on-screen rect at the instant of the click —
  // captured synchronously (not measured via effect) so the portal clone
  // can start from exactly where the real thumbnail was, with no jump.
  const [expandRect, setExpandRect] = useState(null)
  const centerItemRef = useRef(null)

  // Closure-local startedAt/rafId (not refs) so that React 18 StrictMode's
  // dev-only double-invoke of this effect (setup -> cleanup -> setup) can't
  // let a stale loop's cleanup cancel the wrong frame, or its "now" origin
  // bleed into the second run — each invocation owns its own timeline.
  useEffect(() => {
    if (!detailExpanding) return
    const startedAt = performance.now()
    let rafId
    let navigated = false
    const tick = (now) => {
      const elapsed = now - startedAt
      setDetailElapsed(elapsed)
      if (elapsed >= DETAIL_EXPAND_MS) {
        if (!navigated) {
          navigated = true
          navigate(`/works/${detailTarget}`)
        }
        return
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [detailExpanding, detailTarget, navigate])

  useEffect(() => {
    let ticking = false

    const update = () => {
      ticking = false
      const hero = heroRef.current
      if (!hero) return

      const scrollDistance = hero.offsetHeight - window.innerHeight
      const p = scrollDistance > 0 ? -hero.getBoundingClientRect().top / scrollDistance : 0
      setProgress(clamp01(p))
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // phase 1: background glow rises into view, reaching screen-center exactly
  // when all the thumbnail circles have finished blooming in
  const glowY = GLOW_Y_START + (GLOW_Y_END - GLOW_Y_START) * phase(progress, 0, GLOW_RISE_END)

  // Mount-time intro style for a staged element — index 0-4 are the five
  // heading lines (top three + bottom two), one at a time; index 5 is the
  // Contact column, arrow, and Works column together, once all five lines
  // are done. Purely additive to the scroll-driven styles below (which sit
  // at their neutral/fully-visible values at scroll position 0, where this
  // intro plays out), so the two never fight.
  const introStyle = (index) => ({
    opacity: introStarted ? 1 : 0,
    filter: `blur(${introStarted ? 0 : INTRO_BLUR_PX}px)`,
    // transform is included so the arrow button's own hover-scale transition
    // (defined in Hero.module.css) survives this inline style entirely
    // replacing the element's `transition` value.
    transition: `opacity ${INTRO_DURATION_MS}ms ease, filter ${INTRO_DURATION_MS}ms ease, transform 0.2s ease`,
    transitionDelay: `${INTRO_START_MS + index * INTRO_STAGGER_MS}ms`,
  })

  // phase 2: the contact/works row fades + blurs away first, same treatment as the title text below
  const infoLeave = phase(progress, 0.05, 0.22)
  const infoOpacity = 1 - infoLeave
  const infoStyle = {
    opacity: infoOpacity,
    filter: `blur(${8 * infoLeave}px)`,
    pointerEvents: infoOpacity < 0.02 ? 'none' : 'auto',
  }

  // phase 3: titles slide apart + blur out while the project circles bloom in from the center
  const textLeave = phase(progress, 0.2, 0.5)
  const titleTopStyle = {
    transform: `translateY(${-60 * textLeave}px)`,
    filter: `blur(${8 * textLeave}px)`,
    opacity: 1 - textLeave,
  }
  const titleBottomStyle = {
    transform: `translateY(${60 * textLeave}px)`,
    filter: `blur(${8 * textLeave}px)`,
    opacity: 1 - textLeave,
  }

  // phase 4 (scroll-driven): once the titles are gone, the center project expands.
  // Once the sequence has fully played (interactive), the same "expand" value is
  // instead driven by clicks on the arrows / side thumbnails (see goTo below).
  const scrollExpand = phase(progress, 0.5, 0.78)
  const scrollTextReveal = phase(progress, 0.8, 1)
  const expand = interactive ? localExpand : scrollExpand
  const textReveal = interactive ? (showText ? 1 : 0) : scrollTextReveal

  // as the center circle expands, the glow dims down to 20% so it doesn't fight the thumbnail
  const glowOpacity = 1 - 0.8 * expand

  const vw = typeof window !== 'undefined' ? window.innerWidth : 1440
  const vh = typeof window !== 'undefined' ? window.innerHeight : 900
  const baseSize = clampNum(vw * 0.22, 130, 300)
  const expandedWidth = clampNum(vw * 0.64, 320, 1000)
  const expandedHeight = clampNum(vw * 0.36, 240, 520)
  const gapBloom = clampNum(vw * 0.045, 20, 64)
  const bloomStep = baseSize + gapBloom
  const edgeOffset = vw / 2
  // Grows to match the hero video band on the detail page it's headed to
  // (full width, height clamp(320px, 54vw, 780px) — see LayCaseStudy.module.css
  // .hero, shared by every case-study page) rather than an arbitrary
  // overshoot, so the capsule reads as becoming that video rather than just
  // covering the screen.
  const detailTargetWidth = vw
  const detailTargetHeight = clampNum(vw * 0.54, 320, 780)

  // Mobile: same 5-slot carousel, laid out vertically instead of
  // horizontally. Unlike desktop (where only the center ever grows past a
  // small circle), every slot here is the same size at rest — the small
  // circle only appears as a transient mid-transition state, all slots
  // morphing to it and back together via the same `expand` value. Expanded
  // width fills the screen minus a margin on each side; expanded height is
  // a little shorter than that so it reads as a rectangle, not a square,
  // with plenty of room left for the centered title + description text to
  // not get clipped.
  const mobileMargin = 24
  const mobileWidth = clampNum(vw - mobileMargin * 2, 200, 640)
  const mobileHeight = mobileWidth * 0.85
  const mobileBaseSize = clampNum(mobileWidth * 0.5, 130, 240)
  const mobileGap = clampNum(vh * 0.032, 16, 26)
  const mobileStep = mobileBaseSize + mobileGap // spacing while shrunk to circles (mid-transition)
  const mobileExpandedStep = mobileHeight + mobileGap // spacing at rest, same-size thumbnails

  // Carousel navigation, seamless 5-step handoff:
  // 1. title text + arrows fade out first
  // 2. once they're gone, the current center shrinks to a plain circle (same
  //    size as the other thumbnails)
  // 3. once it's settled as a circle, the whole row swipes over by one slot
  // 4. the row then snaps back (no transition) while the active index advances
  //    by the same one slot — the content lines up exactly where the swipe left
  //    off, so step 3→4 reads as one continuous slide — and the new center
  //    circle grows back into the expanded pill
  // 5. once the pill has fully grown, title text + arrows fade/blur back in
  const goTo = (index) => {
    if (!interactive || isAnimating) return
    const dir = index > activeIndex ? 1 : -1
    const swipeStep = isMobile ? mobileStep : bloomStep
    setIsAnimating(true)
    setShowText(false)
    window.setTimeout(() => {
      setLocalExpand(0)
      window.setTimeout(() => {
        setSliding(true)
        setSlideOffset(-dir * swipeStep)
        window.setTimeout(() => {
          setSliding(false)
          setSlideOffset(0)
          setActiveIndex(mod(index, PROJECT_COUNT))
          requestAnimationFrame(() => {
            setLocalExpand(1)
            window.setTimeout(() => {
              setShowText(true)
              setIsAnimating(false)
            }, GROW_MS)
          })
        }, SWIPE_MS)
      }, SHRINK_MS)
    }, TEXT_HIDE_MS)
  }
  const goPrev = () => goTo(activeIndex - 1)
  const goNext = () => goTo(activeIndex + 1)

  // The circled down-arrow between Contact/Works jumps straight to the
  // bottom of the hero (the fully scrolled-in project carousel) — same
  // instant jump the GNB's "Works" link uses from this page.
  const scrollToWorks = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'auto' })
  }

  // Clicking the expanded center pill: text/arrows fade out first (same
  // treatment as the carousel's own transitions), then the capsule itself
  // takes over and grows to fullscreen — see detailExpanding above.
  const goToDetail = (project) => {
    if (!interactive || isAnimating) return
    const rect = centerItemRef.current?.getBoundingClientRect()
    setExpandRect(rect ? { left: rect.left, top: rect.top, width: rect.width, height: rect.height } : null)
    setIsAnimating(true)
    setShowText(false)
    setDetailTarget(project.slug)
    window.setTimeout(() => {
      setDetailExpanding(true)
    }, TEXT_HIDE_MS)
  }

  const detailNavActive = detailTarget !== null
  const detailProject = detailNavActive ? PROJECTS.find((p) => p.slug === detailTarget) : null
  // The NDA'd project doesn't land on the video-band hero layout — it lands
  // on PasswordGate, a full-screen blurred-background modal — so its
  // capsule grows to fill the whole viewport instead, staying blurred the
  // entire way so the cut into that gate reads as continuous.
  const detailIsProtected = detailProject && PROTECTED_SLUGS.has(detailProject.slug)
  const detailExpandTargetWidth = detailIsProtected ? vw : detailTargetWidth
  const detailExpandTargetHeight = detailIsProtected ? vh : detailTargetHeight
  // Raw (unequased) progress drives the background fade so it reads as a
  // steady dim rather than easing with the capsule; the capsule itself uses
  // the eased curve for the size/position morph.
  const detailRawT = clamp01(detailElapsed / DETAIL_EXPAND_MS)
  const detailEase = easeInOutCubic(detailRawT)
  // Bell curve: 0 at both ends, peaking at the midpoint — a brief outward
  // bulge that swells mid-flight and fully settles back by the time it lands.
  const detailPulse = Math.sin(Math.PI * detailRawT)

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.pinned}>
        <img
          src={ellipseGlow}
          alt=""
          className={styles.glow}
          style={{
            '--glow-y': `${glowY}%`,
            opacity: glowOpacity,
            transition: interactive ? 'opacity 0.5s ease' : undefined,
          }}
          aria-hidden="true"
        />

        <div className={styles.body}>
          <p className={styles.titleTop} style={titleTopStyle}>
            <span className={styles.line} style={introStyle(0)}>Designing</span>
            <span className={styles.line} style={introStyle(1)}>the next interaction</span>
            <span className={styles.line} style={introStyle(2)}>&amp; interface</span>
          </p>

          <div className={styles.middle}>
            <div className={styles.infoRow} style={infoStyle}>
              <div className={styles.infoCol} style={introStyle(6)}>
                <p className={styles.infoLabel}>Contact</p>
                <a href="mailto:yyoungsuh@gmail.com" className={styles.infoLink}>
                  yyoungsuh
                  <br className={styles.emailBreak} />
                  @gmail.com
                </a>
              </div>

              <button
                type="button"
                className={styles.arrowWrap}
                onClick={scrollToWorks}
                aria-label="Scroll to works"
                style={introStyle(6)}
              >
                <img src={arrowDown} alt="" className={styles.arrow} />
              </button>

              <div className={styles.infoCol} style={introStyle(6)}>
                <p className={styles.infoLabel}>Works</p>
                <div className={styles.infoText}>
                  <p>UX/UI</p>
                  <p>GUI</p>
                  <p>Motion/Interaction</p>
                </div>
              </div>
            </div>

            <div
              className={`${styles.projectsRow} ${interactive ? styles.animated : ''} ${sliding ? styles.sliding : ''}`}
              style={{
                transform: isMobile ? `translateY(${slideOffset}px)` : `translateX(${slideOffset}px)`,
                pointerEvents: interactive ? 'auto' : 'none',
              }}
            >
              {SLOT_OFFSETS.map((offset) => {
                const distance = Math.abs(offset)
                const isCenter = offset === 0
                const project = PROJECTS[mod(activeIndex + offset, PROJECT_COUNT)]
                const sign = Math.sign(offset)

                let x = 0
                let y = 0
                let itemOpacity = 1
                if (isMobile) {
                  if (distance === 1) {
                    y = sign * lerp(mobileStep, mobileExpandedStep, expand)
                  } else if (distance === 2) {
                    y = sign * lerp(mobileStep * 2, mobileExpandedStep * 2, expand)
                    itemOpacity = 1 - expand
                  }
                } else if (distance === 1) {
                  x = sign * lerp(bloomStep, edgeOffset, expand)
                } else if (distance === 2) {
                  x = sign * lerp(bloomStep * 2, edgeOffset + baseSize, expand)
                  itemOpacity = 1 - expand
                }

                // bloom-in stagger, from center outward — only relevant during the initial scroll entrance
                const enterStart = 0.2 + distance * 0.05
                const enter = interactive ? 1 : phase(progress, enterStart, enterStart + 0.15)

                // Mobile: every slot (center and side) morphs together
                // between the small circle and the full thumbnail size —
                // the circle only ever appears mid-transition; at rest
                // they're all the same size. Desktop keeps its own model,
                // where only the center ever grows past baseSize.
                const width = isMobile
                  ? lerp(mobileBaseSize, mobileWidth, expand)
                  : isCenter
                    ? lerp(baseSize, expandedWidth, expand)
                    : baseSize
                const height = isMobile
                  ? lerp(mobileBaseSize, mobileHeight, expand)
                  : isCenter
                    ? lerp(baseSize, expandedHeight, expand)
                    : baseSize

                const textOpacity = isCenter ? textReveal : 0
                const clickable = interactive && !isAnimating && distance <= 1

                let itemStyle = {
                  width,
                  height,
                  opacity: itemOpacity * enter,
                  transform: isMobile
                    ? `translate(-50%, -50%) translateY(${y}px) scale(${0.4 + 0.6 * enter})`
                    : `translate(-50%, -50%) translateX(${x}px) scale(${0.4 + 0.6 * enter})`,
                }

                // Click-to-detail override: side thumbnails simply fade out
                // alongside the text/arrows (the existing .animated opacity
                // transition handles that tween). Once detailExpanding kicks
                // in, the real center capsule hides too — a fixed-position
                // portal clone (rendered below, outside this transformed
                // row) takes over the growth so it can land pixel-exact on
                // the detail page's hero video regardless of this row's own
                // transform/overflow.
                if (detailNavActive) {
                  if (!isCenter || detailExpanding) {
                    itemStyle = { ...itemStyle, opacity: 0 }
                  }
                }

                return (
                  <div
                    key={`${offset}`}
                    ref={isCenter ? centerItemRef : undefined}
                    className={styles.projectItem}
                    role={clickable ? 'button' : undefined}
                    tabIndex={clickable ? 0 : -1}
                    onClick={
                      clickable ? () => (isCenter ? goToDetail(project) : goTo(activeIndex + offset)) : undefined
                    }
                    onKeyDown={
                      clickable
                        ? (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              isCenter ? goToDetail(project) : goTo(activeIndex + offset)
                            }
                          }
                        : undefined
                    }
                    style={{
                      ...itemStyle,
                      cursor: clickable ? 'pointer' : 'default',
                    }}
                  >
                    <img
                      src={project.img}
                      alt=""
                      className={styles.projectImg}
                      style={PROTECTED_SLUGS.has(project.slug) ? { filter: 'blur(14px)' } : undefined}
                    />
                    {/* Mobile + centered: this centered "Password required"
                        fades out exactly as the title fades in (opacity tied
                        to 1 - textOpacity) — handing off to the lock-above-
                        title version rendered inside .titleText below, which
                        fades in on the same textOpacity. Desktop, and the
                        non-centered peek on mobile, are unaffected: fully
                        visible at all times (label included on desktop only). */}
                    {PROTECTED_SLUGS.has(project.slug) && (
                      <div
                        className={styles.lockOverlay}
                        style={
                          isMobile && isCenter
                            ? {
                                opacity: 1 - textOpacity,
                                transitionDuration: interactive
                                  ? `${showText ? TEXT_SHOW_MS : TEXT_HIDE_MS}ms`
                                  : undefined,
                                transitionProperty: interactive ? 'opacity' : undefined,
                                transitionTimingFunction: interactive ? 'ease' : undefined,
                              }
                            : undefined
                        }
                      >
                        <img src={lockIcon} alt="" className={styles.lockIcon} />
                        {(!isMobile || isCenter) && <p className={styles.lockText}>Password required</p>}
                      </div>
                    )}
                    {isCenter && (
                      <>
                        <div
                          className={styles.textOverlay}
                          style={{
                            opacity: textOpacity,
                            transitionDuration: interactive
                              ? `${showText ? TEXT_SHOW_MS : TEXT_HIDE_MS}ms`
                              : undefined,
                            transitionProperty: interactive ? 'opacity' : undefined,
                            transitionTimingFunction: interactive ? 'ease' : undefined,
                          }}
                        />
                        <div
                          className={styles.titleText}
                          style={{
                            opacity: textOpacity,
                            filter: `blur(${(1 - textOpacity) * TITLE_TEXT_START_BLUR}px)`,
                            transitionDuration: interactive
                              ? `${showText ? TEXT_SHOW_MS : TEXT_HIDE_MS}ms`
                              : undefined,
                          }}
                        >
                          {isMobile && PROTECTED_SLUGS.has(project.slug) && (
                            <img src={lockIcon} alt="" className={styles.lockIconAboveTitle} />
                          )}
                          <p className={styles.titleTextHeading}>{project.title}</p>
                          <div className={styles.titleTextDesc}>
                            {project.desc.map((line) => (
                              <p key={line}>{line}</p>
                            ))}
                          </div>
                        </div>

                        <button
                          type="button"
                          className={`${styles.navArrow} ${styles.navArrowPrev}`}
                          style={{
                            opacity: textReveal,
                            pointerEvents: textReveal > 0.5 ? 'auto' : 'none',
                            transition: interactive
                              ? `opacity ${showText ? TEXT_SHOW_MS : TEXT_HIDE_MS}ms ease, transform 0.2s ease`
                              : undefined,
                          }}
                          onClick={(e) => {
                            e.stopPropagation()
                            goPrev()
                          }}
                          aria-label="Previous project"
                        >
                          <ChevronIcon direction="prev" />
                        </button>
                        <button
                          type="button"
                          className={`${styles.navArrow} ${styles.navArrowNext}`}
                          style={{
                            opacity: textReveal,
                            pointerEvents: textReveal > 0.5 ? 'auto' : 'none',
                            transition: interactive
                              ? `opacity ${showText ? TEXT_SHOW_MS : TEXT_HIDE_MS}ms ease, transform 0.2s ease`
                              : undefined,
                          }}
                          onClick={(e) => {
                            e.stopPropagation()
                            goNext()
                          }}
                          aria-label="Next project"
                        >
                          <ChevronIcon direction="next" />
                        </button>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <p className={styles.titleBottom} style={titleBottomStyle}>
            <span className={styles.line} style={introStyle(3)}>for globally</span>
            <span className={`${styles.line} ${styles.gradientText}`} style={introStyle(4)}>
              lovable
            </span>
            <span className={`${styles.line} ${styles.gradientText}`} style={introStyle(5)}>
              experiences
            </span>
          </p>
        </div>
      </div>

      {detailExpanding &&
        expandRect &&
        createPortal(
          <>
            {/* Page behind dims to black over the same duration the capsule
                grows, so by the time navigation cuts over, the surface it's
                cutting to is already the same solid black as the real page. */}
            <div
              aria-hidden="true"
              style={{
                position: 'fixed',
                inset: 0,
                background: '#000',
                opacity: detailRawT,
                zIndex: 9998,
                pointerEvents: 'none',
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: 'fixed',
                left: lerp(expandRect.left, 0, detailEase),
                top: lerp(expandRect.top, 0, detailEase),
                width: lerp(expandRect.width, detailExpandTargetWidth, detailEase),
                height: lerp(expandRect.height, detailExpandTargetHeight, detailEase),
                borderRadius: `${lerp(999, 0, detailEase)}px`,
                overflow: 'hidden',
                // Brief outward bulge — swells slightly past its interpolated
                // size around the midpoint, then settles back exactly onto
                // the target rect by the time it lands.
                transform: `scale(${1 + 0.06 * detailPulse})`,
                zIndex: 9999,
                pointerEvents: 'none',
              }}
            >
              {detailProject && (
                <img
                  src={detailProject.img}
                  alt=""
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    // The NDA'd project stays blurred throughout (it's
                    // landing on the blurred PasswordGate background, not a
                    // sharp video).
                    filter: detailIsProtected ? 'blur(14px)' : undefined,
                  }}
                />
              )}
              {detailIsProtected && (
                <div className={styles.lockOverlay}>
                  <img src={lockIcon} alt="" className={styles.lockIcon} />
                  <p className={styles.lockText}>Password required</p>
                </div>
              )}
            </div>
          </>,
          document.body,
        )}
    </section>
  )
}

export default Hero
