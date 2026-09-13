import { useState } from 'react'

export default function Collapse({ title, children, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  
  const displayContent = children || (
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
      <div className="collapse-banner" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>
          {isOpen ? '▲' : '▼'}
        </span>
      </div>
      {isOpen && (
        <div className="collapse-content">
          {displayContent}
        </div>
      )}
    </div>
  )
}