// Trae el componente reutilizable que dibuja UNA tarjeta
import { ProjectCard } from './components/ProjectCard.jsx'
import styles from './Projects.module.css'

// Projects = la sección completa. Recibe la LISTA completa de proyectos
// (viene de data/projects.js, pasada desde App.jsx)
export const Projects = ({ projects }) => {
  return (
    // id="projects" es el destino del botón "Ver proyectos" del Hero (href="#projects")
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}>Proyectos</h2>

      <div className={styles.grid}>
        {/* .map() recorre el array de proyectos y crea una <ProjectCard /> por cada uno.
            "key={project.id}" es obligatorio: usamos el id único de cada proyecto */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}