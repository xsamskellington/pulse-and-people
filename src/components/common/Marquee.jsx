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
  const defaultClassName = 'marquee'

  return (
    <div className={defaultClassName}>
      <div className={`${defaultClassName}__track`}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className={`${defaultClassName}__item`}>
            {item} <span className={`${defaultClassName}__dot`} />
          </span>
        ))}
      </div>
    </div>
  )
}
