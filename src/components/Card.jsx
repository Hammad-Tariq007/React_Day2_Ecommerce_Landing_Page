import React from 'react';
import './Card.css';

const Card = ({ image, name, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
