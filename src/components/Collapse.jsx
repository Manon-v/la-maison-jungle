import { useState } from 'react'
// Composant qui permet d'afficher ou de masquer du contenu
export default function Collapse({ title, children, content }) {
  // Le contenu est fermé par défaut
  const [isOpen, setIsOpen] = useState(false)
// Change l'état du collapse pour l'ouvrir ou le fermer

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  // Détermine le contenu à afficher
  const displayContent = children || (
    Array.isArray(content) ? (
      // Si le contenu est un tableau, chaque élément est affiché dans une liste
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      // Sinon, le contenu est affiché sous forme de texte
      <p>{content}</p>
    )
  )

  return (
    <div className="collapse">
       {/* Un clic sur la bannière ouvre ou ferme le contenu */}
      <div className="collapse-banner" onClick={toggleCollapse}>
        <h2>{title}</h2>
         {/* La classe "open" est ajoutée lorsque le collapse est ouvert */}
       <span className={`collapse-arrow ${isOpen ? 'open' : ''}`}></span>
      </div>
      {/* Le contenu s'affiche uniquement lorsque le collapse est ouvert */}
      {isOpen && (
        <div className="collapse-content">
          {displayContent}
        </div>
      )}
    </div>
  )
}