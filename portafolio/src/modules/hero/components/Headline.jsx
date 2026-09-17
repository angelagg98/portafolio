import styles from './Headline.module.css'

export const Headline = ({ name, role, tagline}) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.eyebrow}>{'//Hola, soy'}</p>
            <h1 className={styles.name}>{name}</h1>
            <h2 className={styles.role}>{role}</h2>
            <p className={styles.tagline}>{tagline}</p>
        </div>
    )
}