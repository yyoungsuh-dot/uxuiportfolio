import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import styles from './Home.module.css'

function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  // Landed here from the GNB's "Works" link on another page — scroll straight
  // to the bottom of the hero (the fully scrolled-in project carousel). The
  // hero's height is a fixed multiple of the viewport height, so it's already
  // laid out correctly by the first paint — no need to wait a frame.
  useEffect(() => {
    if (location.state?.scrollToWorks) {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'auto' })
      navigate('.', { replace: true, state: null })
    }
  }, [location.state, navigate])

  return (
    <div className={styles.main}>
      <Header />
      <Hero />
    </div>
  )
}

export default Home
