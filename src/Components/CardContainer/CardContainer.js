import React from 'react';
import PropTypes from 'prop-types';

import './CardContainer.css';

import Card from '../Card/Card';

const CardContainer = ({ 
  category, 
  toggleFavorites, 
  favorites 
}) => {
  const displayedCards = category.map( (facts, index) => {
    const selected = favorites.includes(facts);
    return <Card 
      key={index} 
      facts={facts} 
      toggleFavorites={toggleFavorites} 
      selected={selected} />;
  });

  return (
    <section>
      {displayedCards}
    </section>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  category: PropTypes.array,
  toggleFavorites: PropTypes.func,
  favorites: PropTypes.array
};