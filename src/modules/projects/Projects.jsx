import { projects } from '../../data/projects.js'
import styles from './Projects.module.css'

export const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.grid}>
        {projects.map(project => (
          <div key={project.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDesc}>{project.description}</p>
            <div className={styles.stack}>
              {project.stack.map(tech => (
                <span key={tech} className={styles.tag}>{tech}</span>
              ))}
            </div>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Ver repositorio →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}