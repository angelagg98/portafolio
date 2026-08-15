import styles from './ProfileImage.module.css' // importa los estilos del componente ProfileImage

export const ProfileImage = ({src, alt}) =>{  // crea y exporta el componente ProfileImage y recibe src y alt 
    return(
        <div className={styles.frame}>  
            <img className={styles.image} src={src} alt={alt} />
        </div>                           // src dirrecion imagen alt texto alternativo img
    )
}