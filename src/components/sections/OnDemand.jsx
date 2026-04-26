import Reveal from '../common/Reveal'
import { onDemandPacks, onDemandFeatures } from '../../data/onDemand'

export default function OnDemand() {
  const defaultClassName = 'on-demand'

  return (
    <section className={`section ${defaultClassName}`}>
      <div className="container">
        <div className={`${defaultClassName}__inner`}>
          <Reveal>
            <p className="section__label">Servicio Destacado</p>
            <h2 className="section__title" style={{ color: 'white' }}>
              Pulse &amp; People <em>On Demand</em>
            </h2>
            <p className="section__desc">
              Consultoría en RRHH por horas. Una mirada externa, profesional y cercana para
              diagnosticar, ordenar y acompañar la gestión de personas.
            </p>
            <div className={`${defaultClassName}__packs`}>
              {onDemandPacks.map((pack) => (
                <a key={pack.title} href="#contacto" className={`${defaultClassName}__pack`}>
                  <h4>{pack.title}</h4>
                  <span>{pack.hours} &rarr;</span>
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className={`${defaultClassName}__features`}>
              {onDemandFeatures.map((feature) => (
                <div key={feature.title} className={`${defaultClassName}__feature`}>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
