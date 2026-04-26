import Reveal from '../common/Reveal'
import services from '../../data/services'

export default function ServicesGrid() {
  const defaultClassName = 'services'
  const cardClassName = 'service-card'

  return (
    <section className={`section ${defaultClassName}`}>
      <div className="container">
        <Reveal>
          <div className={`${defaultClassName}__header`}>
            <p className="section__label">Nuestros Servicios</p>
            <h2 className="section__title">Soluciones <em>integrales</em> para tu organización</h2>
            <p className="section__desc">
              Brindamos asesoramiento integral como aliados y socios estratégicos en la detección,
              desarrollo y gestión del talento.
            </p>
          </div>
        </Reveal>
        <div className={`${defaultClassName}__grid`}>
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className={cardClassName}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className={`${cardClassName}__link`}>Ver más →</span>
                <div className={`${cardClassName}__accent`} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
