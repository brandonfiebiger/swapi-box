import React from 'react';
import './CardContainer.css';

import Card from '../Card/Card'

const CardContainer = ({ category, toggleFavorites }) => {
  const displayedCards = category.map( element => (
    <Card element={element} toggleFavorites={toggleFavorites} />
  ));

  return (
    <section>
      {displayedCards}
    </section>
)
}

export default CardContainer;