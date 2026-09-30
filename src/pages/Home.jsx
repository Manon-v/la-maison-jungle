import React from 'react'
import logements from '../logements.json' 
import Card from '../components/Card'
import Banner from '../components/Banner'
import bannerImg from '../assets/banner-home.png'
// Composant de la page d'accueil
export default function Home() {
  return (
    <main>
      {/* Affichage de la bannière avec son image et son texte */}
      <Banner image={bannerImg} text="Chez vous, partout et ailleurs" />
      <div className="cards-container">
        {/* Parcours des logements du fichier JSON pour créer une Card */}
        {logements.map((logement) => (
          <Card 
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </main>
  )
}