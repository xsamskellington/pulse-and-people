import Reveal from '../common/Reveal'

const services = [
  {
    title: 'Reclutamiento y Selección',
    desc: 'Procesos alineados a la complejidad de cada perfil y a la cultura de la organización, asegurando una incorporación efectiva.',
  },
  {
    title: 'Capacitación y Desarrollo',
    desc: 'Programas de formación personalizados. Modalidades presencial, virtual y mixta adaptadas a tu empresa.',
  },
  {
    title: 'Clima Organizacional',
    desc: 'Encuestas de clima y satisfacción que brindan información clara para la toma de decisiones.',
  },
  {
    title: 'Transformación Cultural',
    desc: 'Alineamos valores, comportamientos y formas de trabajo con la estrategia de tu negocio.',
  },
  {
    title: 'Comunicación Interna',
    desc: 'Planes y piezas de comunicación adaptadas a la cultura y necesidades de cada organización.',
  },
  {
    title: 'Eventos Corporativos',
    desc: 'Family Day, Fin de Año, Convenciones y más. Planificación integral para tu equipo.',
  },
]

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
