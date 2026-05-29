import contactDetails from '../../data/contactDetails'

export default function ContactInfo() {
  const defaultClassName = 'contact'

  return (
    <div className={`${defaultClassName}__info`}>
      <p className="section__label">Contacto</p>
      <h2 className="section__title">
        Estamos para <em>acompañarte</em>
      </h2>

      {contactDetails.map((detail) => (
        <div key={detail.label} className={`${defaultClassName}__detail`}>
          <div className={`${defaultClassName}__detail-icon`}>
            {detail.icon}
          </div>
          <div>
            <h4>{detail.label}</h4>
            {detail.href
              ? <a href={detail.href} target="_blank" rel="noopener noreferrer"><p>{detail.value}</p></a>
              : <p>{detail.value}</p>
            }
          </div>
        </div>
      ))}
    </div>
  )
}
