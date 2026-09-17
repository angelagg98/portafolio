import { profile } from '../../data/profile.js'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.title}>Contacto</h2>
      <p className={styles.subtitle}>¿Tienes un proyecto en mente? Hablemos.</p>
      <div className={styles.links}>
        {profile.social.map(item => (
          <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {item.label} →
          </a>
        ))}
      </div>
    </section>
  )
}