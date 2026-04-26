export default function Footer() {
  const defaultClassName = 'footer'

  return (
    <footer className={defaultClassName}>
      <div className="container">
        <div className={`${defaultClassName}__bottom`}>
          <p>&copy; 2026 Pulse &amp; People. Todos los derechos reservados.</p>
          <div className={`${defaultClassName}__social`}>
            <a href="#" className={`${defaultClassName}__social-item`} aria-label="LinkedIn">
              <img src="/assets/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="#" className={`${defaultClassName}__social-item`} aria-label="Instagram">
              <img src="/assets/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://wa.me/5491165541669" className={`${defaultClassName}__social-item`} aria-label="WhatsApp" target="_blank" rel="noopener">
              <img src="/assets/whatsapp.svg" alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
