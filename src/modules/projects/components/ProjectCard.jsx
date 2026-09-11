// Estilos propios de la tarjeta (una tarjeta = un proyecto)
import styles from './ProjectCard.module.css'

// Convierte una URL de Git en formato SSH (git@github.com:usuario/repo.git)
// a una URL https navegable (https://github.com/usuario/repo).
// Esto NO es un hook, es solo una función normal de JavaScript que transforma texto.
const toWebUrl = (repoUrl) => {
  return repoUrl
    .replace('git@github.com:', 'https://github.com/') // cambia el prefijo SSH por https
    .replace(/\.git$/, '')                              // quita el ".git" final si lo tiene
}

// ProjectCard = una tarjeta individual. Recibe UN proyecto completo como prop "project"
// (viene del array projects.js, uno por uno, gracias a un .map() en Projects.jsx)
export const ProjectCard = ({ project }) => {
  return (
    <article className={styles.card}>
      {/* Título del proyecto */}
      <h3 className={styles.title}>{project.title}</h3>

      {/* Descripción corta */}
      <p className={styles.description}>{project.description}</p>

      {/* .stack es un array de strings (ej: ['JAVA']). Lo recorremos con .map()
          para pintar una "pill" (etiqueta) por cada tecnología */}
      <ul className={styles.stackList}>
        {project.stack.map((tech) => (
          // "key" es obligatorio en React cuando generas una lista con .map():
          // le ayuda a identificar cada elemento de forma única
          <li key={tech} className={styles.stackItem}>{tech}</li>
        ))}
      </ul>

      {/* Link al repositorio, ya convertido a formato https navegable */}
      
        <a className={styles.link}
        href={toWebUrl(project.repoUrl)}
        target="_blank"        // abre en pestaña nueva
        rel="noreferrer"       // buena práctica de seguridad al usar target="_blank"
      >
        Ver repositorio →
      </a>
    </article>
  )
}