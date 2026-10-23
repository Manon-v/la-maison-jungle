import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/LOGO.svg'

// En-tête et navigation principale du site
export default function Header() {
  return (
    <header className="header">
      <Link to="/" aria-label="Kasa — Accueil">
        <img src={logo} alt="Kasa" className="header-logo" />
      </Link>

      <nav className="header-nav" aria-label="Navigation principale">
        <NavLink to="/" end className="nav-link">
          Accueil
        </NavLink>

        <NavLink to="/about" className="nav-link">
          À propos
        </NavLink>
      </nav>
    </header>
  )
}