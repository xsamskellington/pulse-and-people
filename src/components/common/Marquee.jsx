const items = [
  'Reclutamiento & Selección',
  'Capacitación',
  'Clima Organizacional',
  'Transformación Cultural',
  'Comunicación Interna',
  'Eventos Corporativos',
  'On Demand',
]

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
