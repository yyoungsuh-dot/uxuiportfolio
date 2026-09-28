import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Cursor.module.css'

// A white circle that replaces the OS cursor. On the home page it's just a
// plain white dot (no blending — the home hero already art-directs its own
// contrast). On case-study detail pages it switches to mix-blend-mode:
// difference, so it inverts to black wherever it lands on white UI instead
// of tinting the imagery underneath. Pointer-fine devices only — on touch
// there's no cursor to replace, so it renders nothing and leaves the native
// cursor alone.
function Cursor() {
  const dotRef = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const { pathname } = useLocation()
  const isDetailPage = pathname.startsWith('/works/')

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(pointer: fine)')
    const apply = () => setEnabled(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add(styles.hideNativeCursor)

    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2

    const render = () => {
      raf = 0
      const el = dotRef.current
      if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
    }
    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      if (!raf) raf = requestAnimationFrame(render)
    }
    const onLeave = () => {
      const el = dotRef.current
      if (el) el.style.opacity = '0'
    }
    const onEnter = () => {
      const el = dotRef.current
      if (el) el.style.opacity = '1'
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    render()

    return () => {
      document.documentElement.classList.remove(styles.hideNativeCursor)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <div
      ref={dotRef}
      className={`${styles.dot} ${isDetailPage ? styles.dotDifference : ''}`}
      aria-hidden="true"
    />
  )
}

export default Cursor
