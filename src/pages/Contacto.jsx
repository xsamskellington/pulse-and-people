import { useEffect } from 'react'
import Reveal from '../components/common/Reveal'
import ContactFormGeneral from '../components/sections/ContactFormGeneral'

export default function Contacto() {
  const pageHeroClassName = 'page-hero'
  const heroClassName = 'hero'
  const sectionClassName = 'section'
  const defaultClassName = 'contact'

  useEffect(() => {
    document.title = 'Contacto | Pulse & People'
  }, [])

  return (
    <>
      <section className={pageHeroClassName}>
        <div className="container">
          <Reveal>
            <p className={`${sectionClassName}__label`}>Contacto</p>
            <h1 className={`${heroClassName}__headline`}>
              ¿En qué podemos<br />
              <em>ayudarte?</em>
            </h1>
            <p className={`${heroClassName}__desc`}>
              Contanos sobre tu organización o tu búsqueda laboral y te respondemos a la brevedad.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={`${sectionClassName} ${defaultClassName}`}>
        <div className="container">
          <Reveal>
            <ContactFormGeneral />
          </Reveal>
        </div>
      </section>
    </>
  )
}
