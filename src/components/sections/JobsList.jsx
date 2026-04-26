import Reveal from '../common/Reveal'

const openJobs = []

export default function JobsList() {
  const defaultClassName = 'jobs'

  return (
    <section className={`section ${defaultClassName}`}>
      <div className="container">
        <Reveal>
          <div className={`${defaultClassName}__header`}>
            <p className="section__label">Búsquedas Abiertas</p>
            <h2 className="section__title">Oportunidades <em>laborales</em></h2>
            <p className="section__desc">
              Explorá las posiciones que estamos buscando. Si tu perfil se ajusta, postulate.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className={`${defaultClassName}__list`}>
            {openJobs.length > 0 ? (
              openJobs.map((job) => (
                <div key={job.id} className={`${defaultClassName}__item`}>
                  <div className={`${defaultClassName}__info`}>
                    <h4>{job.title}</h4>
                    <p>{job.company} &mdash; {job.location}</p>
                  </div>
                  <span className={`${defaultClassName}__tag`}>{job.type}</span>
                </div>
              ))
            ) : (
              <div className={`${defaultClassName}__empty`}>
                <p>No hay búsquedas abiertas en este momento.</p>
                <p className={`${defaultClassName}__hint`}>
                  Dejanos tus datos y te avisaremos cuando surjan nuevas oportunidades.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
