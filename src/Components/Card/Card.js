import React from 'react';
import './Card.css';

const Card = ({ element }) => {

  const cardElements = Object.keys(element).map( elementKey => (
    <li>{elementKey}: {element[elementKey]}</li>
  ));

  return (
    <ul>
      {cardElements}
    </ul>
  )
}

export default Card;