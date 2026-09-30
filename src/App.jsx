import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRouter from './components/Router'
import './App.css'
// Composant principal de l'application
export default function App() {
  return (
    // permet de gérer la navigation entre les différentes pages
    <BrowserRouter>
   {/* reste affiché sur toutes les pages */}
      <Header />
   {/* Affichage de la page correspondant à l'URL actuelle */}
      <main>
        <AppRouter />
      </main>
  {/* reste affiché sur toutes les pages */}
      <Footer />
    </BrowserRouter>
  )
}