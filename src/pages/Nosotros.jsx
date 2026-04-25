import { useEffect } from 'react'
import Reveal from '../components/common/Reveal'
import AboutSection from '../components/sections/AboutSection'
import MissionVision from '../components/sections/MissionVision'
import ContactInfo from '../components/sections/ContactInfo'
import ContactFormEmpresas from '../components/sections/ContactFormEmpresas'

export default function Nosotros() {
  useEffect(() => {
    document.title = 'Nosotros | Pulse & People'
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">Sobre Nosotros</p>
            <h1 className="hero-headline">
              Personas que<br />
              <em>entienden</em><br />
              <strong>a las personas.</strong>
            </h1>
            <p className="hero-desc">
              Somos una consultora fundada con la convicción de que el talento humano es el
              recurso más valioso de cualquier organización.
            </p>
          </Reveal>
        </div>
      </section>

      <AboutSection />

      <MissionVision />

      <section className="section contact" id="contacto">
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <ContactInfo />
            </Reveal>
            <Reveal>
              <ContactFormEmpresas />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
