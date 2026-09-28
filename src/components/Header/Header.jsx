import { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import styles from './Header.module.css'

const NAV_ITEMS = ['Works', 'Info', 'Contact']

function Header() {
  const worksRef = useRef(null)
  const { language, toggleLanguage } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()

  // "Works" scrolls to the bottom of the home hero (the fully scrolled-in
  // project carousel) — from any page, not just "/".
  const handleWorksClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'auto' })
    } else {
      navigate('/', { state: { scrollToWorks: true } })
    }
  }

  // Case-study body copy aligns to the GNB's "Works" link, so its live
  // position (which shifts with the nav's own flex layout) is published as
  // a CSS var for the detail page to read.
  useEffect(() => {
    let frame = null

    const measure = () => {
      frame = null
      const el = worksRef.current
      if (!el) return
      const left = el.getBoundingClientRect().left
      document.documentElement.style.setProperty('--gnb-works-left', `${left}px`)
    }

    const onResize = () => {
      if (frame === null) frame = requestAnimationFrame(measure)
    }

    measure()
    // the nav text sits in a web font — re-measure once it's actually loaded
    // in case the fallback font rendered a different width
    document.fonts?.ready?.then(measure)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header className={styles.gnb}>
      <div className={styles.logoWrap}>
        <Link to="/" className={styles.logo}>
          Yoo Youngsuh
        </Link>
      </div>
      <div className={styles.right}>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => {
            if (item === 'Works') {
              return (
                <a
                  key={item}
                  ref={worksRef}
                  href="#works"
                  className={styles.navItem}
                  onClick={handleWorksClick}
                >
                  {item}
                </a>
              )
            }
            if (item === 'Contact') {
              return (
                <a key={item} href="mailto:yyoungsuh@gmail.com" className={styles.navItem}>
                  {item}
                </a>
              )
            }
            return (
              <a key={item} href={`#${item.toLowerCase()}`} className={styles.navItem}>
                {item}
              </a>
            )
          })}
        </nav>
        <button type="button" className={styles.langButton} onClick={toggleLanguage}>
          {language === 'ko' ? 'EN' : 'KO'}
        </button>
      </div>
    </header>
  )
}

export default Header
