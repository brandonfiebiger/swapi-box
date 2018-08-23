import React from 'react';
import './CardContainer.css';

import Card from '../Card/Card'

const CardContainer = ({ category, toggleFavorites, favorites }) => {
  const displayedCards = category.map( facts => {
    const selected = favorites.includes(facts)
    return <Card facts={facts} toggleFavorites={toggleFavorites} selected={selected} />
  });

  return (
    <section>
      {displayedCards}
    </section>
)
}

export default CardContainer;