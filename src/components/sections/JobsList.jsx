import { useState, useEffect } from 'react'
import Reveal from '../common/Reveal'
import { supabase } from '../../lib/supabase'

export default function JobsList() {
  const defaultClassName = 'jobs'
  const [vacantes, setVacantes] = useState([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    supabase
      .from('vacantes')
      .select('*')
      .eq('activa', true)
      .order('creada_en', { ascending: false })
      .then(({ data }) => {
        setVacantes(data || [])
        setLoading(false)
      })
  }, [])

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
            {loading ? (
              <div className={`${defaultClassName}__empty`}>
                <p>Cargando búsquedas...</p>
              </div>
            ) : vacantes.length > 0 ? (
              vacantes.map((job) => (
                <div key={job.id} className={`${defaultClassName}__item`}>
                  <div className={`${defaultClassName}__info`}>
                    <h4>{job.titulo}</h4>
                    <p>{job.empresa} &mdash; {job.ubicacion}</p>
                  </div>
                  <div className={`${defaultClassName}__item-right`}>
                    <span className={`${defaultClassName}__tag`}>{job.modalidad}</span>
                    {job.descripcion && (
                      <button
                        className={`${defaultClassName}__toggle`}
                        onClick={() => setExpanded(expanded === job.id ? null : job.id)}
                      >
                        {expanded === job.id ? 'Ver menos ↑' : 'Ver más ↓'}
                      </button>
                    )}
                  </div>
                  {expanded === job.id && job.descripcion && (
                    <div className={`${defaultClassName}__desc`}>
                      <p>{job.descripcion}</p>
                    </div>
                  )}
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
