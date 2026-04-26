import Reveal from '../common/Reveal'

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
              <a href="#contacto" className={`${defaultClassName}__pack`}>
                <h4>Diagnóstico Inicial</h4>
                <span>5 horas &rarr;</span>
              </a>
              <a href="#contacto" className={`${defaultClassName}__pack`}>
                <h4>Acompañamiento Mensual</h4>
                <span>10 horas &rarr;</span>
              </a>
              <a href="#contacto" className={`${defaultClassName}__pack`}>
                <h4>Partner Estratégico</h4>
                <span>20 hs/mes &rarr;</span>
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className={`${defaultClassName}__features`}>
              <div className={`${defaultClassName}__feature`}>
                <h4>Diagnóstico</h4>
                <p>Análisis organizacional, cultural, de estructura, roles y responsabilidades.</p>
              </div>
              <div className={`${defaultClassName}__feature`}>
                <h4>Procesos</h4>
                <p>Definición y mejora de procesos de RRHH y gestión del desempeño.</p>
              </div>
              <div className={`${defaultClassName}__feature`}>
                <h4>Liderazgo</h4>
                <p>Acompañamiento a líderes y consulta estratégica para Dirección.</p>
              </div>
              <div className={`${defaultClassName}__feature`}>
                <h4>Flexibilidad</h4>
                <p>Presencial y/o virtual. Packs mensuales o por períodos definidos.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
