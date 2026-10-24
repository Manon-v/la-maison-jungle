import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import './Housing.css'

// Composant qui affiche la page détaillée d'un logement
export default function Housing() {
  const { id } = useParams()

  const [resultat, setResultat] = useState(null)

  // Récupération du logement correspondant à l'id depuis le backend
  useEffect(() => {
    const controller = new AbortController()

    async function chargerLogement() {
      try {
        const reponse = await fetch(
          `http://localhost:8080/api/properties/${encodeURIComponent(id)}`,
          { signal: controller.signal }
        )

        if (reponse.status === 404) {
          setResultat({ id, statut: 'introuvable' })
          return
        }

        if (!reponse.ok) {
          throw new Error('Impossible de récupérer le logement')
        }

        const donnees = await reponse.json()
        setResultat({ id, statut: 'succes', logement: donnees })
      } catch (error) {
        if (error.name !== 'AbortError') {
          setResultat({ id, statut: 'erreur' })
        }
      }
    }

    chargerLogement()

    // Annulation de la requête si on quitte la page ou change d'id
    return () => controller.abort()
  }, [id])

  // Attente des données du logement demandé
  if (!resultat || resultat.id !== id) {
    return <p role="status">Chargement du logement…</p>
  }

  // Redirection si cet identifiant ne correspond à aucun logement
  if (resultat.statut === 'introuvable') {
    return <Navigate to="/404" replace />
  }

  // Message si le serveur est indisponible
  if (resultat.statut === 'erreur') {
    return (
      <p role="alert">
        Impossible de charger le logement. Réessaie plus tard.
      </p>
    )
  }

  const logement = resultat.logement
  const range = [1, 2, 3, 4, 5]

  return (
    <div className="housing-page">
      {/* Affichage du diaporama avec les photos du logement */}
      <Slideshow pictures={logement.pictures} />

      {/* Informations principales du logement */}
      <div className="housing-header">
        <div className="housing-title-container">
          <h1>{logement.title}</h1>
          <p className="housing-location">{logement.location}</p>

          {/* Affichage des différents tags du logement */}
          <div className="housing-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Informations sur l'hôte et note du logement */}
        <div className="housing-host-rating">
          <div className="host-info">
            <p>
              {logement.host.name.split(' ')[0]} <br />
              {logement.host.name.split(' ')[1]}
            </p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>

          {/* Affichage de la note sur 5 sous forme d'étoiles */}
          <div className="rating">
            {range.map((elem) => (
              <svg
                key={elem}
                className={`star ${
                  parseInt(logement.rating) >= elem ? 'filled' : ''
                }`}
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.73 30L15 22.965L24.27 30L20.73 18.615L30 12H18.645Z"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  stroke="currentColor"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Informations complémentaires affichées dans des Collapse */}
      <div className="housing-collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}