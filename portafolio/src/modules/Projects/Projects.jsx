import { ProjectGrid } from './components/ProjectGrid.jsx'
import styles from './Projects.module.css'

export const Projects = ({ projects }) => {
  return (
    <section id="projects" className={styles.projects}>
      <p className={styles.eyebrow}>{'// projects'}</p>
      <h2 className={styles.title}>Proyectos</h2>
      <ProjectGrid projects={projects} />
    </section>
  )
}