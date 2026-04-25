import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Marquee from '../components/common/Marquee'
import MissionVision from '../components/sections/MissionVision'
import ServicesGrid from '../components/sections/ServicesGrid'
import PhotoBanner from '../components/sections/PhotoBanner'

export default function Home() {
  useEffect(() => {
    document.title = 'Pulse & People | Consultora de Recursos Humanos'
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-headline">
            <em>Transformamos</em><br />
            tu gestión de<br />
            <strong>recursos humanos.</strong>
          </h1>
          <p className="hero-desc">
            Somos tu socio estratégico en la detección, desarrollo y gestión del talento
            para impactar positivamente en los resultados de tu negocio.
          </p>
          <div className="hero-buttons">
            <Link to="/empresas" className="btn-pill btn-pill-dark">Soy Empresa</Link>
            <Link to="/busco-trabajo" className="btn-pill btn-pill-outline">Busco Trabajo</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/logo-negro.png" alt="" className="hero-image-logo" />
        </div>
      </section>

      <Marquee />

      <MissionVision />

      <ServicesGrid />

      <PhotoBanner
        text="Creamos soluciones"
        subtext="adaptadas a tus necesidades."
      />
    </>
  )
}
