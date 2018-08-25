import React from 'react';
import PropTypes from 'prop-types';

import './Favorites.css';

const Favorites = ({ favorites, selectFavorites }) => {
  return (
    <button onClick={ () => selectFavorites() }>
      View Favorites: {favorites.length}
    </button>
  );  
};

export default Favorites;

Favorites.propTypes = {
  favorites: PropTypes.array,
  selectFavorites: PropTypes.func
};