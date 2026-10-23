import { useState } from 'react'

// Affiche les photos d'un logement dans un carrousel
export default function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Ne rien afficher si aucune photo n'est disponible
  if (!pictures || pictures.length === 0) return null

  // Revenir à la dernière photo si on est sur la première
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? pictures.length - 1 : prev - 1
    )
  }

  // Revenir à la première photo si on est sur la dernière
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === pictures.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Diapositive ${currentIndex + 1}`}
        className="slideshow-image"
      />

      {/* Afficher la navigation uniquement s'il y a plusieurs photos */}
      {pictures.length > 1 && (
        <>
          <button
            type="button"
            className="arrow arrow-left"
            onClick={prevSlide}
            aria-label="Image précédente"
          >
            <svg viewBox="0 0 48 80" aria-hidden="true">
              <path d="M42 6 L8 40 L42 74" />
            </svg>
          </button>

          <button
            type="button"
            className="arrow arrow-right"
            onClick={nextSlide}
            aria-label="Image suivante"
          >
            <svg viewBox="0 0 48 80" aria-hidden="true">
              <path d="M6 6 L40 40 L6 74" />
            </svg>
          </button>

          <span className="slideshow-counter">
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  )
}