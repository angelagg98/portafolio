import { Hero } from './modules/hero/Hero.jsx'
import { Projects } from './modules/projects/Projects.jsx'
import { Experience } from './modules/experience/Experience.jsx'
import { Contact } from './modules/contact/Contact.jsx'
import { CallToAction } from './modules/hero/components/CallToAction.jsx'
import { DownloadButton } from './modules/hero/components/DownloadButton.jsx'
import { profile } from './data/profile.js'

export const App = () => {
  return (
    <div>
      <Hero profile={profile} />
      <Projects />
      <Experience />
      <Contact />
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <CallToAction label="Ver proyectos" href="#projects" />
        <DownloadButton />
      </div>
    </div>
  )
}