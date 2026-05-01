import Reveal from '../common/Reveal'
import values from '../../data/values'

export default function MissionVision() {
  const defaultClassName = 'mv'

  return (
    <section className={defaultClassName}>
      <div className="container">
        <Reveal>
          <p className="section__label" style={{ textAlign: 'center', marginBottom: '24px', fontFamily: 'var(--font-heading)', fontStyle: 'italic', textTransform: 'none', letterSpacing: 0, fontSize: '22px' }}>Nuestros Valores</p>
          <div className={`${defaultClassName}__grid`}>
            {values.map((item) => (
              <div key={item.title} className={`${defaultClassName}__card`}>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
