import React from 'react'
import logements from '../logements.json' 
import Card from '../components/Card'
import Banner from '../components/Banner'
import bannerImg from '../assets/banner-home.png'

export default function Home() {
  return (
    <main>
      <Banner image={bannerImg} text="Chez vous, partout et ailleurs" />
      <div className="cards-container">
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