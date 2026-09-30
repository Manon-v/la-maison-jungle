import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import aboutBanner from '../assets/banner-about.png'
// Composant de la page À Propos
export default function About() {
   // Données utilisées pour créer les différents Collapse
  const aboutData = [
    {
      title: 'Fiabilité',
      content: 'Les annonces sont régulièrement vérifiées par nos équipes.'
    },
    {
      title: 'Respect',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa.'
    },
    {
      title: 'Service',
      content: 'La qualité du service est au cœur de notre engagement.'
    },
    {
      title: 'Sécurité',
      content: 'Les standards de sécurité sont respectés pour tous nos hôtes et voyageurs.'
    }
  ]

  return (
    <div className="about-page">
      {/* Affichage de la bannière de la page À Propos */}
      <Banner image={aboutBanner} />
      <div className="about-collapses">
        {/* Parcours des données pour créer un Collapse pour chaque élément */}
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  )
}