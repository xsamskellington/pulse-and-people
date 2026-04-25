import Reveal from '../common/Reveal'

export default function MissionVision() {
  return (
    <section className="mv-strip">
      <div className="container">
        <Reveal>
          <div className="mv-grid">
            <div className="mv-card">
              <h3>Misión</h3>
              <p>Transformar el capital humano en un motor clave para el éxito empresarial.</p>
            </div>
            <div className="mv-card">
              <h3>Visión</h3>
              <p>Ser un referente en soluciones de Recursos Humanos en constante crecimiento.</p>
            </div>
            <div className="mv-card">
              <h3>Valores</h3>
              <p>Innovación, compromiso, flexibilidad y orientación al cliente.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
