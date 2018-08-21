import React from 'react';
import './CardContainer.css';

import Card from '../Card/Card'

const CardContainer = ({ category }) => {
  const displayedCards = category.map( element => (
    <Card element={element} />
  ));

  return (
    <section>
      {displayedCards}
    </section>
)
}

export default CardContainer;