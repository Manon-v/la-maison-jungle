import { useState } from 'react'
// Composant qui affiche le diaporama des photos d'un logement
export default function Slideshow({ pictures }) {
  // Index de l'image affichée
  const [currentIndex, setCurrentIndex] = useState(0)

  // Si aucune image n'est disponible, le composant n'affiche rien
  if (!pictures || pictures.length === 0) return null

  // Naviguer vers l'image précédente (boucle)
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1))
  }

  // Naviguer vers l'image suivante (boucle)
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="slideshow">
      {/* Affichage de l'image correspondant à l'index actuel */}
      <img
        src={pictures[currentIndex]}
        alt={`Diapositive ${currentIndex + 1}`}
        className="slideshow-image"
      />

      {/* Les flèches et le compteur s'affichent seulement s'il y a plusieurs images */}
      {pictures.length > 1 && (
        <>
         {/* Navigation vers l'image précédente */}
          <button className="arrow arrow-left" onClick={prevSlide}>
            ❮
          </button>
          {/* Navigation vers l'image suivante */}
          <button className="arrow arrow-right" onClick={nextSlide}>
            ❯
          </button>
          {/* Affichage du numéro de l'image actuelle et du nombre total d'images */}
          <span className="slideshow-counter">
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  )
}