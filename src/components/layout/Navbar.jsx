import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={close}>
          <img src="/assets/logo-color.png" alt="Pulse & People" />
        </Link>
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <NavLink to="/empresas" className={({ isActive }) => isActive ? 'nav-active' : ''} onClick={close}>
            Empresas
          </NavLink>
          <NavLink to="/busco-trabajo" className={({ isActive }) => isActive ? 'nav-active' : ''} onClick={close}>
            Busco Trabajo
          </NavLink>
          <NavLink to="/nosotros" className={({ isActive }) => isActive ? 'nav-active' : ''} onClick={close}>
            Nosotros
          </NavLink>
          <NavLink to="/nosotros" className={({ isActive }) => `nav-cta${isActive ? ' nav-active' : ''}`} onClick={close}>
            Hablemos
          </NavLink>
        </div>
        <div
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </div>
      </div>
    </nav>
  )
}
