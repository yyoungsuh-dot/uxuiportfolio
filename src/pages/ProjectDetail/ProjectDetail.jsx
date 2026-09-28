import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { PROJECTS } from '../../data/projects'
import LayCaseStudy from './LayCaseStudy'
import ReactCaseStudy from './ReactCaseStudy'
import PitchCaseStudy from './PitchCaseStudy'
import CentralsquareCaseStudy from './CentralsquareCaseStudy'
import BrandintimacyCaseStudy from './BrandintimacyCaseStudy'
import SynceCaseStudy from './SynceCaseStudy'
import styles from './ProjectDetail.module.css'

function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)

  // Land on the top of every case-study page instead of wherever the
  // previous page's scroll position happened to be.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className={styles.page}>
        <Header />
        <div className={styles.notFound}>
          <p>Project not found.</p>
          <Link to="/" className={styles.backLink}>
            ← Back home
          </Link>
        </div>
      </div>
    )
  }

  // Full case-study copy only exists for "lay" (Figma node 368:44218) and
  // "react" (Figma node 394:7709) so far.
  if (project.slug === 'lay') {
    return (
      <div className={styles.page}>
        <Header />
        <LayCaseStudy />
      </div>
    )
  }

  if (project.slug === 'react') {
    return (
      <div className={styles.page}>
        <Header />
        <ReactCaseStudy />
      </div>
    )
  }

  if (project.slug === 'pitch') {
    return (
      <div className={styles.page}>
        <Header />
        <PitchCaseStudy />
      </div>
    )
  }

  if (project.slug === 'centralsquare') {
    return (
      <div className={styles.page}>
        <Header />
        <CentralsquareCaseStudy />
      </div>
    )
  }

  if (project.slug === 'brandintimacy') {
    return (
      <div className={styles.page}>
        <Header />
        <BrandintimacyCaseStudy />
      </div>
    )
  }

  if (project.slug === 'synce') {
    return (
      <div className={styles.page}>
        <Header />
        <SynceCaseStudy />
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <img src={project.img} alt="" className={styles.heroImg} />
      </section>
      <section className={styles.placeholder}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.placeholderText}>
          This case study page hasn't been designed in Figma yet — check back soon.
        </p>
        <Link to="/" className={styles.backLink}>
          ← Back home
        </Link>
      </section>
    </div>
  )
}

export default ProjectDetail
