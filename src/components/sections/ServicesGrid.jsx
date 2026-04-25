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
  return (
    <section className="section services">
      <div className="container">
        <Reveal>
          <div className="services-header">
            <p className="section-label">Nuestros Servicios</p>
            <h2 className="section-title">Soluciones <em>integrales</em> para tu organización</h2>
            <p className="section-desc">
              Brindamos asesoramiento integral como aliados y socios estratégicos en la detección,
              desarrollo y gestión del talento.
            </p>
          </div>
        </Reveal>
        <div className="services-grid">
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className="service-card">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="arrow-link">Ver más →</span>
                <div className="service-card-accent" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
