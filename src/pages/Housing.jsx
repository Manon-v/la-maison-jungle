import { useParams, Navigate } from 'react-router-dom'
import logements from '../logements.json'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import './Housing.css'

export default function Housing() {
  const { id } = useParams()

 
  const logement = logements.find((item) => item.id === id)

  
  if (!logement) {
  return <Navigate to="/404" replace />
}

  const range = [1, 2, 3, 4, 5]

  return (
    <div className="housing-page">
      <Slideshow pictures={logement.pictures} />

      <div className="housing-header">
        <div className="housing-title-container">
          <h1>{logement.title}</h1>
          <p className="housing-location">{logement.location}</p>
          <div className="housing-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="housing-host-rating">
          <div className="host-info">
            <p>
              {logement.host.name.split(' ')[0]} <br />
              {logement.host.name.split(' ')[1]}
            </p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="rating">
            {range.map((elem) => (
              <svg
                key={elem}
                className={`star ${parseInt(logement.rating) >= elem ? 'filled' : ''}`}
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