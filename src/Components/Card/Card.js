import React from 'react';
import './Card.css';

const Card = ({ facts, toggleFavorites, selected }) => {
  let fillColor;
  const cardFacts = Object.keys(facts).map( fact => {
    selected ? fillColor = '#fac917' : fillColor = '#f2f2f2';
    return <li>{fact}: {facts[fact]}</li>
  });

  return (
    <div onClick={ () => toggleFavorites(facts) }>
      <svg 
        width='2rem'
        enable-background="new 0 0 426.667 426.667" 
        viewBox="0 0 426.667 426.667" >
        <path 
          d="m213.333 10.441 65.916 133.576 147.418 21.419-106.667 103.974 25.173 146.816-131.84-69.316-131.848 69.316 25.182-146.816-106.667-103.974 147.409-21.419z" 
          fill={fillColor}/>
      </svg>
      <ul>
        {cardFacts}
      </ul>
    </div>
  )
}

export default Card;