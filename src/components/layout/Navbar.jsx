import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const defaultClassName = 'navbar'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`${defaultClassName}${scrolled ? ` ${defaultClassName}--scrolled` : ''}`}>
      <div className={`${defaultClassName}__inner`}>
        <Link to="/" className={`${defaultClassName}__logo`} onClick={() => { close(); window.scrollTo(0, 0) }}>
          <img src="/assets/logo-color.png" alt="Pulse & People" />
        </Link>
        <div className={`${defaultClassName}__links${menuOpen ? ` ${defaultClassName}__links--open` : ''}`}>
          <NavLink to="/empresas" className={({ isActive }) => `${defaultClassName}__link${isActive ? ` ${defaultClassName}__link--active` : ''}`} onClick={close}>
            Empresas
          </NavLink>
          <NavLink to="/candidatos" className={({ isActive }) => `${defaultClassName}__link${isActive ? ` ${defaultClassName}__link--active` : ''}`} onClick={close}>
            Candidatos
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => `${defaultClassName}__link${isActive ? ` ${defaultClassName}__link--active` : ''}`} onClick={close}>
            Contacto
          </NavLink>
        </div>
        <div
          className={`${defaultClassName}__hamburger${menuOpen ? ` ${defaultClassName}__hamburger--active` : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menú"
        >
          <span className={`${defaultClassName}__hamburger-bar`} />
          <span className={`${defaultClassName}__hamburger-bar`} />
          <span className={`${defaultClassName}__hamburger-bar`} />
        </div>
      </div>
    </nav>
  )
}
