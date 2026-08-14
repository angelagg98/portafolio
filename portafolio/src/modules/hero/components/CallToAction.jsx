import styles from './CallToAction.module.css'

export const CallToAction = ({ label, href }) => {
  return (
    <a className={styles.button} href={href}>
      {label}
    </a>
  )
}