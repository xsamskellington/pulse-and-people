import Reveal from '../common/Reveal'
import missionVision from '../../data/missionVision'

export default function MissionVision() {
  const defaultClassName = 'mv'

  return (
    <section className={defaultClassName}>
      <div className="container">
        <Reveal>
          <div className={`${defaultClassName}__grid`}>
            {missionVision.map((item) => (
              <div key={item.title} className={`${defaultClassName}__card`}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
