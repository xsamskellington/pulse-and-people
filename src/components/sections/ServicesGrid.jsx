import { useState } from 'react'
import Reveal from '../common/Reveal'
import ServiceModal from '../common/ServiceModal'
import services from '../../data/services'

export default function ServicesGrid() {
  const defaultClassName = 'services'
  const cardClassName = 'service-card'
  const [selected, setSelected] = useState(null)

  return (
    <section className={`section ${defaultClassName}`}>
      <div className="container">
        <Reveal>
          <div className={`${defaultClassName}__header`}>
            <p className="section__label">Nuestros Servicios</p>
            <h2 className="section__title">Soluciones <em>integrales</em> para tu organización</h2>
            <p className="section__desc">
              Contribuimos con las empresas en sus desafíos de organización, equipos y cultura,
              con soluciones prácticas y adaptadas a cada realidad.
            </p>
          </div>
        </Reveal>
        <div className={`${defaultClassName}__grid`}>
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className={cardClassName}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {s.detail && (
                  <span
                    className={`${cardClassName}__link`}
                    onClick={() => setSelected(s)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelected(s)}
                  >
                    Ver más →
                  </span>
                )}
                <div className={`${cardClassName}__accent`} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
