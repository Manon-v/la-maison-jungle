import React from 'react'
// Composant qui affiche une bannière avec une image et un texte
export default function Banner({ image, text }) {
  return (
    <div className="banner">
       {/* Affichage de l'image de la bannière */}
      <img src={image} alt="Bannière" className="banner-img" />
      {/* Calque utilisé pour assombrir l'image */}
      <div className="banner-overlay"></div>
      {/* Le titre s'affiche seulement si un texte est fourni */}
      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  )
}