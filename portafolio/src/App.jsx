import { Hero } from './modules/Hero/Hero.jsx'
import { Projects } from './modules/Projects/Projects.jsx'
import { profile } from './data/profile.js'
import { projects } from './data/projects.js'

export const App = () => {
  return (
    <div>
      <Hero profile={profile} />
      <Projects projects={projects} />
    </div>
  )
}