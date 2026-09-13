import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/housing/${id}`} className="card">
      <img src={cover} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </Link>
  );
}