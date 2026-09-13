import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'; 


function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="header-logo" />
      <nav className="header-nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;