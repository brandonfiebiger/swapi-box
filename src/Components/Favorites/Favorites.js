import React from 'react';
import './Favorites.css';

const Favorites = ({ favorites, selectFavorites }) => {
  return(
    <button onClick={ () => selectFavorites() }>
      View Favorites: {favorites.length}
    </button>
  )  
}

export default Favorites;