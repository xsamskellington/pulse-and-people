import marqueeItems from '../../data/marqueeItems'

export default function Marquee() {
  const defaultClassName = 'marquee'

  return (
    <div className={defaultClassName}>
      <div className={`${defaultClassName}__track`}>
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className={`${defaultClassName}__item`}>
            {item} <span className={`${defaultClassName}__dot`} />
          </span>
        ))}
      </div>
    </div>
  )
}
