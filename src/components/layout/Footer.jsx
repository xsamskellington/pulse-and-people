import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Link to="/">
            <img src="/assets/logo-color.png" alt="Pulse & People" className="footer-logo" />
          </Link>
          <p className="footer-tagline">Consultora de Recursos Humanos &mdash; Buenos Aires, Argentina</p>
        </div>
        <div className="footer-grid">
          <div>
            <h4>Navegación</h4>
            <div className="footer-links">
              <Link to="/">Inicio</Link>
              <Link to="/empresas">Empresas</Link>
              <Link to="/busco-trabajo">Busco Trabajo</Link>
              <Link to="/nosotros">Nosotros</Link>
              <Link to="/nosotros">Contacto</Link>
            </div>
          </div>
          <div>
            <h4>Servicios</h4>
            <div className="footer-links">
              <Link to="/empresas">Reclutamiento y Selección</Link>
              <Link to="/empresas">Capacitación y Desarrollo</Link>
              <Link to="/empresas">Clima Organizacional</Link>
              <Link to="/empresas">Transformación Cultural</Link>
              <Link to="/empresas">On Demand</Link>
            </div>
          </div>
          <div>
            <h4>Contacto</h4>
            <div className="footer-links">
              <a href="mailto:comercial@pulseandpeople.com">comercial@pulseandpeople.com</a>
              <a href="https://wa.me/5491165541669" target="_blank" rel="noopener">+54 9 11 6554 1669</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Pulse &amp; People. Todos los derechos reservados.</p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://wa.me/5491165541669" aria-label="WhatsApp" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
