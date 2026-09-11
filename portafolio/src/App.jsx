// App.jsx es el componente RAÍZ: todo lo que ves en la página cuelga de aquí.
// Antes decía './modules/Hero/Hero.jsx' (con H mayúscula), pero la carpeta real
// se llama 'hero' en minúscula. En Windows esto "funciona por accidente" porque
// su sistema de archivos no distingue mayúsculas/minúsculas, pero en Linux
// (donde corren Vercel, Netlify, GitHub Actions, etc.) SÍ distingue, y el build
// se rompe con un error de "módulo no encontrado". Por eso se corrigió.
import { Hero } from './modules/hero/Hero.jsx'
import { profile } from './data/profile.js'

// App = el "molde" principal. Por ahora solo pone el Hero, pero aquí es donde
// más adelante se agregarán otras secciones: <Projects />, <Experience />, <Footer />, etc.
export const App = () => {
  return (
    <div>
      <Hero profile={profile} />
    </div>
  )
}
