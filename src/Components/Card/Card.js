import React from 'react';
import './Card.css';

const Card = ({ element, toggleFavorites }) => {

  const cardElements = Object.keys(element).map( elementKey => (
    <li>{elementKey}: {element[elementKey]}</li>
  ));

  return (
    <ul 
      onClick={() => toggleFavorites(element)} >
      {cardElements}
    </ul>
  )
}

export default Card;