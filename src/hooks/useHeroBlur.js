import { useEffect, useState } from 'react'

// Tracks how blurred the pinned hero video should look as the section below
// scrolls up to cover it — 0px at the very top, ramping up to `maxBlur` by
// the time the page has scrolled past the hero's own height (matching the
// clamp(320px, 54vw, 780px) formula in LayCaseStudy.module.css's .hero),
// i.e. roughly the point the covering section has fully taken over the
// screen. Used with an inline `filter: blur(...)` on the .hero section.
export function useHeroBlur({ maxBlur = 16 } = {}) {
  const [blur, setBlur] = useState(0)

  useEffect(() => {
    let ticking = false

    const update = () => {
      ticking = false
      const distance = Math.min(Math.max(window.innerWidth * 0.54, 320), 780)
      const t = Math.min(Math.max(window.scrollY / distance, 0), 1)
      setBlur(t * maxBlur)
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
  }, [maxBlur])

  return blur
}
