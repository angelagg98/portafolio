import { ProfileImage } from './components/ProfileImage.jsx'
import { Headline } from './components/Headline.jsx'
import { CallToAction } from './components/CallToAction.jsx'
import { DownloadButton } from './components/DownloadButton.jsx'   // 👈 línea nueva
import styles from './Hero.module.css'

export const Hero = ({ profile }) => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <Headline name={profile.name} role={profile.role} tagline={profile.tagline} />
        <CallToAction label="Ver proyectos" href="#projects" />
        <DownloadButton />                                          {/* 👈 línea nueva */}
      </div>
      <ProfileImage src={profile.photoUrl} alt={`Foto de ${profile.name}`} />
    </section>
  )
}