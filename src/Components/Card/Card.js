import React from 'react';
import './Card.css';

const Card = ({ facts, toggleFavorites }) => {

  const cardFacts = Object.keys(facts).map( fact => (
    <li>{fact}: {facts[fact]}</li>
  ));

  return (
    <ul 
      onClick={() => toggleFavorites(facts)} >
      {cardFacts}
    </ul>
  )
}

export default Card;