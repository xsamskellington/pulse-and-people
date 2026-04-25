import Reveal from '../common/Reveal'

export default function AboutSection() {
  return (
    <section className="section about">
      <div className="container">
        <div className="about-grid">
          <Reveal>
            <div className="about-photo">
              <div className="about-photo-overlay">
                <blockquote>
                  "El Consultor cumple un rol estratégico, es un verdadero socio que contribuye
                  al logro de los objetivos de nuestros clientes."
                </blockquote>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="about-content">
              <p className="section-label">Sobre Nosotros</p>
              <h2 className="section-title">
                Un equipo con <em>amplia experiencia</em> en consultoría y organizaciones
              </h2>
              <p className="section-desc">
                Somos profesionales formados en Psicología, Recursos Humanos y Negocios. Nuestra
                amplia perspectiva nos permite ayudar a las empresas a alcanzar su máximo
                potencial mediante soluciones personalizadas y efectivas.
              </p>
              <div className="values-row">
                <div className="value-item">
                  <h4>Innovación</h4>
                  <p>Nuevas formas de agregar valor.</p>
                </div>
                <div className="value-item">
                  <h4>Compromiso</h4>
                  <p>Verdaderos socios estratégicos.</p>
                </div>
                <div className="value-item">
                  <h4>Flexibilidad</h4>
                  <p>Adaptados a tu cultura.</p>
                </div>
                <div className="value-item">
                  <h4>Orientación</h4>
                  <p>Tu éxito es nuestro objetivo.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
