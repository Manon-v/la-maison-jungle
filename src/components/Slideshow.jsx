import { useState } from 'react'

export default function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Si pas d'images
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
      <img
        src={pictures[currentIndex]}
        alt={`Diapositive ${currentIndex + 1}`}
        className="slideshow-image"
      />

      
      {pictures.length > 1 && (
        <>
          <button className="arrow arrow-left" onClick={prevSlide}>
            ❮
          </button>
          <button className="arrow arrow-right" onClick={nextSlide}>
            ❯
          </button>
          <span className="slideshow-counter">
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  )
}