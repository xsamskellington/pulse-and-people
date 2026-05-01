import Reveal from '../common/Reveal'
import missionVision from '../../data/missionVision'

export default function AboutSection() {
  const defaultClassName = 'about'

  return (
    <section className={`section ${defaultClassName}`}>
      <div className="container">
        <div className={`${defaultClassName}__grid`}>
          <Reveal>
            <div className={`${defaultClassName}__photo`}>
              <div className={`${defaultClassName}__photo-overlay`}>
                <blockquote>
                  "El Consultor cumple un rol estratégico, es un verdadero socio que contribuye
                  al logro de los objetivos de nuestros clientes."
                </blockquote>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className={`${defaultClassName}__content`}>
              <p className="section__label">Sobre Nosotros</p>
              <h2 className="section__title">
                Un equipo con <em>amplia experiencia</em> en consultoría y organizaciones
              </h2>
              <p className="section__desc">
                Somos profesionales formados en Psicología, Recursos Humanos y Negocios. Nuestra
                amplia perspectiva nos permite ayudar a las empresas a alcanzar su máximo
                potencial mediante soluciones personalizadas y efectivas.
              </p>
              <div className={`${defaultClassName}__values`}>
                {missionVision.map((item) => (
                  <div key={item.title} className={`${defaultClassName}__value`}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
