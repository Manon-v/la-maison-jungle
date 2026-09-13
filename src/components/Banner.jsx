import React from 'react'

export default function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner-img" />
      <div className="banner-overlay"></div>
      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  )
}