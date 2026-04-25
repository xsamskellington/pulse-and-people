import { useEffect } from 'react'
import Reveal from '../components/common/Reveal'
import JobsList from '../components/sections/JobsList'
import ContactFormTalento from '../components/sections/ContactFormTalento'
import ContactInfo from '../components/sections/ContactInfo'

export default function BuscoTrabajo() {
  useEffect(() => {
    document.title = 'Busco Trabajo | Pulse & People'
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">Para Candidatos</p>
            <h1 className="hero-headline">
              Tu próximo trabajo<br />
              <em>empieza</em><br />
              <strong>acá.</strong>
            </h1>
            <p className="hero-desc">
              Explorá nuestras búsquedas abiertas o registrá tu perfil. Trabajamos con
              empresas líderes y te acompañamos en cada paso de tu proceso.
            </p>
            <div className="hero-buttons">
              <a href="#busquedas" className="btn-pill btn-pill-accent">Ver búsquedas</a>
              <a href="#perfil" className="btn-pill btn-pill-outline">Registrar perfil</a>
            </div>
          </Reveal>
        </div>
      </section>

      <div id="busquedas">
        <JobsList />
      </div>

      <section className="section contact" id="perfil">
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <ContactInfo />
            </Reveal>
            <Reveal>
              <ContactFormTalento />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
