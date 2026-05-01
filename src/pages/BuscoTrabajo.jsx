import { useEffect } from 'react'
import Reveal from '../components/common/Reveal'
import JobsList from '../components/sections/JobsList'
import ContactFormTalento from '../components/sections/ContactFormTalento'

export default function BuscoTrabajo() {
  const pageHeroClassName = 'page-hero'
  const heroClassName = 'hero'
  const sectionClassName = 'section'
  const defaultClassName = 'contact'

  useEffect(() => {
    document.title = 'Candidatos | Pulse & People'
  }, [])

  return (
    <>
      <section className={pageHeroClassName}>
        <div className="container">
          <Reveal>
            <p className={`${sectionClassName}__label`}>Para Candidatos</p>
            <h1 className={`${heroClassName}__headline`}>
              Tu próximo trabajo<br />
              <em>empieza</em><br />
              <strong>acá.</strong>
            </h1>
            <p className={`${heroClassName}__desc`}>
              Explorá nuestras búsquedas abiertas o registrá tu perfil. Trabajamos con
              empresas líderes y te acompañamos en cada paso de tu proceso.
            </p>
            <div className={`${heroClassName}__actions`}>
              <a href="#busquedas" className="btn btn--accent">Ver búsquedas</a>
              <a href="#perfil" className="btn btn--outline">Registrar perfil</a>
            </div>
          </Reveal>
        </div>
      </section>

      <div id="busquedas">
        <JobsList />
      </div>

      <section className={`${sectionClassName} ${defaultClassName}`} id="perfil">
        <div className="container">
          <Reveal>
            <ContactFormTalento />
          </Reveal>
        </div>
      </section>
    </>
  )
}
