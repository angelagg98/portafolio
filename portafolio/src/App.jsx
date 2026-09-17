import { Hero } from './modules/hero/Hero.jsx'
import { profile } from './data/profile.js'

export const App = () => {
  return (
    <div>
      <Hero profile={profile} />
    </div>
  )
}