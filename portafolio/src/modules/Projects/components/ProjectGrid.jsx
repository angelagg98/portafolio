import { ProjectCard } from './ProjectCard.jsx'
import styles from './ProjectGrid.module.css'

export const ProjectGrid = ({ projects }) => {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}