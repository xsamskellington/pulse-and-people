import contactDetails from '../../data/contactDetails'

export default function ContactInfo() {
  const defaultClassName = 'contact'

  return (
    <div className={`${defaultClassName}__info`}>
      <p className="section__label">Contacto</p>
      <h2 className="section__title">
        Hablemos sobre cómo <em>podemos ayudarte</em>
      </h2>
      <p className="section__desc">
        Estamos listos para ser tu socio estratégico. Contanos sobre tu organización y te
        ofreceremos la solución que mejor se adapte.
      </p>

      {contactDetails.map((detail) => (
        <div key={detail.label} className={`${defaultClassName}__detail`}>
          <div className={`${defaultClassName}__detail-icon`}>
            {detail.icon}
          </div>
          <div>
            <h4>{detail.label}</h4>
            <p>{detail.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
