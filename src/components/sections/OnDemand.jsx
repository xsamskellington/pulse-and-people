import Reveal from '../common/Reveal'

export default function OnDemand() {
  return (
    <section className="section on-demand">
      <div className="container">
        <div className="on-demand-inner">
          <Reveal>
            <p className="section-label">Servicio Destacado</p>
            <h2 className="section-title" style={{ color: 'white' }}>
              Pulse &amp; People <em>On Demand</em>
            </h2>
            <p className="section-desc">
              Consultoría en RRHH por horas. Una mirada externa, profesional y cercana para
              diagnosticar, ordenar y acompañar la gestión de personas.
            </p>
            <div className="pack-list">
              <div className="pack-item">
                <h4>Diagnóstico Inicial</h4>
                <span>5 horas</span>
              </div>
              <div className="pack-item">
                <h4>Acompañamiento Mensual</h4>
                <span>10 horas</span>
              </div>
              <div className="pack-item">
                <h4>Partner Estratégico</h4>
                <span>20 hs/mes</span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="od-features">
              <div className="od-feature">
                <h4>Diagnóstico</h4>
                <p>Análisis organizacional, cultural, de estructura, roles y responsabilidades.</p>
              </div>
              <div className="od-feature">
                <h4>Procesos</h4>
                <p>Definición y mejora de procesos de RRHH y gestión del desempeño.</p>
              </div>
              <div className="od-feature">
                <h4>Liderazgo</h4>
                <p>Acompañamiento a líderes y consulta estratégica para Dirección.</p>
              </div>
              <div className="od-feature">
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
