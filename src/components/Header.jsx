import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'; 

// Composant qui affiche l'en-tête du site
function Header() {
  return (
    <header className="header">
      {/* Affichage du logo Kasa */}
      <img src={logo} alt="Kasa" className="header-logo" />
      {/* Menu de navigation principal */}
      <nav className="header-nav">
        {/* Lien vers la page d'accueil */}
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Accueil
        </NavLink>
        {/* Lien vers la page À Propos */}
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