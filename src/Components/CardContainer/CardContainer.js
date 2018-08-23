import React from 'react';
import './CardContainer.css';

import Card from '../Card/Card'

const CardContainer = ({ category, toggleFavorites }) => {
  const displayedCards = category.map( facts => (
    <Card facts={facts} toggleFavorites={toggleFavorites} />
  ));

  return (
    <section>
      {displayedCards}
    </section>
)
}

export default CardContainer;