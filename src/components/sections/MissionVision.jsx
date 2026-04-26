import Reveal from '../common/Reveal'

export default function MissionVision() {
  const defaultClassName = 'mv'

  return (
    <section className={defaultClassName}>
      <div className="container">
        <Reveal>
          <div className={`${defaultClassName}__grid`}>
            <div className={`${defaultClassName}__card`}>
              <h3>Misión</h3>
              <p>Transformar el capital humano en un motor clave para el éxito empresarial.</p>
            </div>
            <div className={`${defaultClassName}__card`}>
              <h3>Visión</h3>
              <p>Ser un referente en soluciones de Recursos Humanos en constante crecimiento.</p>
            </div>
            <div className={`${defaultClassName}__card`}>
              <h3>Valores</h3>
              <p>Innovación, compromiso, flexibilidad y orientación al cliente.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
