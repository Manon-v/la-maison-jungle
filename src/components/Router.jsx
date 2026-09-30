import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Housing from '../pages/Housing'
import Error from '../pages/Error'
// Gestion des différentes routes de l'application
export default function AppRouter() {
  return (
    <Routes>
      {/* Route vers la page d'accueil */}
      <Route path="/" element={<Home />} />
      {/* Route vers la page À Propos */}
      <Route path="/about" element={<About />} />
      {/* Route dynamique vers la page d'un logement selon son id */}
      <Route path="/housing/:id" element={<Housing />} />
      
      {/* Route vers la page d'erreur 404 */}
      <Route path="/404" element={<Error />} />
      
     {/* Toutes les routes inconnues affichent la page d'erreur */}
      <Route path="*" element={<Error />} />
    </Routes>
  )
}