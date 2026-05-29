import { useEffect } from 'react'
import Reveal from '../components/common/Reveal'
import AboutSection from '../components/sections/AboutSection'
import MissionVision from '../components/sections/MissionVision'
import ContactInfo from '../components/sections/ContactInfo'
import ContactFormGeneral from '../components/sections/ContactFormGeneral'

export default function Nosotros() {
  const pageHeroClassName = 'page-hero'
  const heroClassName = 'hero'
  const sectionClassName = 'section'
  const defaultClassName = 'contact'

  useEffect(() => {
    document.title = 'Nosotros | Pulse & People'
  }, [])

  return (
    <>
      <section className={pageHeroClassName}>
        <div className="container">
          <Reveal>
            <p className={`${sectionClassName}__label`}>Sobre Nosotros</p>
            <h1 className={`${heroClassName}__headline`}>
              Personas que<br />
              <em>entienden</em><br />
              <strong>a las personas.</strong>
            </h1>
            <p className={`${heroClassName}__desc`}>
              Somos una consultora fundada con la convicción de que el talento humano es el
              recurso más valioso de cualquier organización.
            </p>
          </Reveal>
        </div>
      </section>

      <AboutSection />

      <MissionVision />

      <section className={`${sectionClassName} ${defaultClassName}`} id="contacto">
        <div className="container">
          <div className={`${defaultClassName}__grid`}>
            <Reveal>
              <ContactInfo />
            </Reveal>
            <Reveal>
              <ContactFormGeneral />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
