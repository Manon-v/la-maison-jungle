import { useId, useState } from 'react'

// Bloc de contenu avec ouverture et fermeture animées
export default function Collapse({ title, children, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = useId()

  const displayContent = children ?? (
    Array.isArray(content) ? (
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p>{content}</p>
    )
  )

  return (
    <div className="collapse">
      <button
        type="button"
        className="collapse-banner"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="collapse-title">{title}</span>

        <span
          className={`collapse-arrow ${isOpen ? 'open' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        id={contentId}
        className={`collapse-panel ${isOpen ? 'is-open' : ''}`}
        inert={!isOpen}
      >
        <div className="collapse-inner">
          <div className="collapse-content">
            {displayContent}
          </div>
        </div>
      </div>
    </div>
  )
}