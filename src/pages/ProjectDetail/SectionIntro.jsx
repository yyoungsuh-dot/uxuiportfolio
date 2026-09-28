import { useReveal } from '../../hooks/useReveal'
import reveal from '../../styles/reveal.module.css'
import styles from './SectionIntro.module.css'

function SectionIntro({ label, headingLines, children, dim = false }) {
  const [ref, inView] = useReveal()

  return (
    <div ref={ref} className={`${styles.row} ${reveal.reveal} ${inView ? reveal.revealIn : ''}`}>
      <p className={styles.label}>{label}</p>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          {headingLines.map((line) => (
            <span key={line} className={styles.headingLine}>
              {line}
            </span>
          ))}
        </h2>
        <div className={`${styles.body} ${dim ? styles.bodyDim : ''}`}>{children}</div>
      </div>
    </div>
  )
}

export default SectionIntro
