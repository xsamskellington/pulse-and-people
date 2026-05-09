import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/common/Marquee';
import AboutSection from '../components/sections/AboutSection';
import MissionVision from '../components/sections/MissionVision';
import PhotoBanner from '../components/sections/PhotoBanner';

export default function Home() {
  const defaultClassName = 'hero';

  useEffect(() => {
    document.title = 'Pulse & People | Consultora de Recursos Humanos';
  }, []);

  return (
    <>
      <section className={defaultClassName}>
        <div className={`${defaultClassName}__text`}>
          <h1 className={`${defaultClassName}__headline`}>
            <em>Transformamos</em>
            <br />
            tu gestión de
            <br />
            <strong>recursos humanos.</strong>
          </h1>
          <p className={`${defaultClassName}__desc`}>
            Somos tu socio estratégico en la detección, desarrollo y gestión del
            talento para impactar positivamente en los resultados de tu negocio.
          </p>
          <div className={`${defaultClassName}__actions`}>
            <Link to="/empresas" className="btn btn--dark">
              Empresa
            </Link>
            <Link to="/candidatos" className="btn btn--outline">
              Candidatos
            </Link>
          </div>
        </div>
        <div className={`${defaultClassName}__image`}>
          <img
            src="/assets/logo-completo-gradiente.png"
            alt=""
            className={`${defaultClassName}__image-logo`}
          />
        </div>
      </section>

      <Marquee />

      <AboutSection />

      <MissionVision />

      <PhotoBanner
        text="Creamos soluciones"
        subtext="adaptadas a tus necesidades."
      />
    </>
  );
}
