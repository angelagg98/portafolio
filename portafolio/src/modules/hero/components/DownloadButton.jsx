// Traemos los estilos propios de este botón
import styles from './DownloadButton.module.css'

// DownloadButton = un botón que, al hacer clic, abre el diálogo de imprimir
// del navegador. Ahí el usuario elige "Guardar como PDF" y listo.
//
// Fíjate que esto NO es un Hook (no usamos useState ni useEffect):
// es solo una función normal de JavaScript conectada a un evento de clic.
// Esto respeta la Regla 2 de tu guía (sin Hooks, sin estado).
const handleDownload = () => {
  // window.print() es una función que TRAE el navegador por defecto,
  // no la escribimos nosotros ni la instalamos con npm.
  // Abre la misma ventana que aparece si presionas Ctrl+P.
  window.print()
}

export const DownloadButton = () => {
  return (
    // Usamos <button>, NO <a>, porque este elemento no navega a ningún lado
    // (no tiene href) — solo EJECUTA una acción cuando se hace clic.
    // onClick conecta el clic del usuario con nuestra función handleDownload.
    <button className={styles.button} onClick={handleDownload}>
      Descargar CV
    </button>
  )
}