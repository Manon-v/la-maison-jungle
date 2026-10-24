import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Banner from '../components/Banner'
import bannerImg from '../assets/banner-home.png'

export default function Home() {
  const [logements, setLogements] = useState([])
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState(false)

  // Récupération des logements depuis le backend
  useEffect(() => {
    const controller = new AbortController()

    async function chargerLogements() {
      try {
        const reponse = await fetch(
          'http://localhost:8080/api/properties',
          { signal: controller.signal }
        )

        if (!reponse.ok) {
          throw new Error('Impossible de récupérer les logements')
        }

        const donnees = await reponse.json()
        setLogements(donnees)
      } catch (error) {
        if (error.name !== 'AbortError') {
          setErreur(true)
        }
      } finally {
        if (!controller.signal.aborted) {
          setChargement(false)
        }
      }
    }

    chargerLogements()

    return () => controller.abort()
  }, [])

  return (
    <main>
      <Banner image={bannerImg} text="Chez vous, partout et ailleurs" />

      {chargement && <p role="status">Chargement des logements…</p>}

      {erreur && (
        <p role="alert">
          Impossible de charger les logements. Réessaie plus tard.
        </p>
      )}

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