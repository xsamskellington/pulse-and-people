import { useEffect } from 'react'
import Reveal from '../components/common/Reveal'
import ServicesGrid from '../components/sections/ServicesGrid'
import ContactFormEmpresas from '../components/sections/ContactFormEmpresas'
import ContactInfo from '../components/sections/ContactInfo'

export default function Empresas() {
  const pageHeroClassName = 'page-hero'
  const heroClassName = 'hero'
  const sectionClassName = 'section'
  const defaultClassName = 'contact'

  useEffect(() => {
    document.title = 'Empresas | Pulse & People'
  }, [])

  return (
    <>
      <section className={pageHeroClassName}>
        <div className="container">
          <Reveal>
            <p className={`${sectionClassName}__label`}>Para Empresas</p>
            <h1 className={`${heroClassName}__headline`}>
              Tu equipo es tu<br />
              <em>mayor ventaja</em><br />
              <strong>competitiva.</strong>
            </h1>
            <p className={`${heroClassName}__desc`}>
              Te acompañamos en cada etapa de la gestión de personas con una mirada cercana,
              estratégica y orientada a resultados.
            </p>
            <div className={`${heroClassName}__actions`}>
              <a href="#contacto" className="btn btn--accent">Contactanos</a>
            </div>
          </Reveal>
        </div>
      </section>

      <ServicesGrid />

      <section className={`${sectionClassName} ${defaultClassName}`} id="contacto">
        <div className="container">
          <div className={`${defaultClassName}__grid`}>
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
