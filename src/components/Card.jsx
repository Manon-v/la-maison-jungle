import React from 'react';
import { Link } from 'react-router-dom';
// Composant qui affiche la carte d'un logement
export default function Card({ id, title, cover }) {
  return (
    // Le clic sur la carte redirige vers la page du logement
    <Link to={`/housing/${id}`} className="card">
      {/* Affichage de l'image du logement */}
      <img src={cover} alt={title} className="card-image" />
      {/* Affichage du titre du logement */}
      <h2 className="card-title">{title}</h2>
    </Link>
  );
}