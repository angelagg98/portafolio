import { experience } from '../../data/experience.js'
import styles from './Experience.module.css'

export const Experience = () => {
  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.title}>Experiencia</h2>
      <div className={styles.list}>
        {experience.map(item => (
          <div key={item.id} className={styles.item}>
            <span className={styles.period}>{item.period}</span>
            <h3 className={styles.role}>{item.title}</h3>
            <span className={styles.org}>{item.organization}</span>
            <p className={styles.desc}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}