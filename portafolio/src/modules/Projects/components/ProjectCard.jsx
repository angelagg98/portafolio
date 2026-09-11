import styles from './ProjectCard.module.css'

export const ProjectCard = ({ project }) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.stack}>
        {project.stack.map((tech) => (
          <li key={tech} className={styles.techItem}>
            {tech}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={project.repoUrl} target="_blank" rel="noreferrer">
          Repositorio
        </a>
        {project.demoUrl && (
          <a className={styles.link} href={project.demoUrl} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
      </div>
    </article>
  )
}