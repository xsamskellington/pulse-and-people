import Reveal from '../common/Reveal'

const openJobs = []

export default function JobsList() {
  return (
    <section className="section jobs">
      <div className="container">
        <Reveal>
          <div className="jobs-header">
            <p className="section-label">Búsquedas Abiertas</p>
            <h2 className="section-title">Oportunidades <em>laborales</em></h2>
            <p className="section-desc">
              Explorá las posiciones que estamos buscando. Si tu perfil se ajusta, postulate.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="jobs-list">
            {openJobs.length > 0 ? (
              openJobs.map((job) => (
                <div key={job.id} className="job-item">
                  <div className="job-info">
                    <h4>{job.title}</h4>
                    <p>{job.company} &mdash; {job.location}</p>
                  </div>
                  <span className="job-tag">{job.type}</span>
                </div>
              ))
            ) : (
              <div className="jobs-empty">
                <p>No hay búsquedas abiertas en este momento.</p>
                <p className="hint">
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
