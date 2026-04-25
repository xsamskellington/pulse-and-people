import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/common/Reveal'
import ServicesGrid from '../components/sections/ServicesGrid'
import OnDemand from '../components/sections/OnDemand'
import ContactFormEmpresas from '../components/sections/ContactFormEmpresas'
import ContactInfo from '../components/sections/ContactInfo'

export default function Empresas() {
  useEffect(() => {
    document.title = 'Empresas | Pulse & People'
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">Para Empresas</p>
            <h1 className="hero-headline">
              Tu equipo es tu<br />
              <em>mayor ventaja</em><br />
              <strong>competitiva.</strong>
            </h1>
            <p className="hero-desc">
              Potenciamos la gestión de personas en tu organización. Desde la búsqueda del
              talento hasta el desarrollo cultural, somos el socio estratégico que necesitás.
            </p>
            <div className="hero-buttons">
              <a href="#contacto" className="btn-pill btn-pill-accent">Solicitar consulta</a>
              <Link to="/nosotros" className="btn-pill btn-pill-outline">Conocer más →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ServicesGrid />

      <OnDemand />

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
