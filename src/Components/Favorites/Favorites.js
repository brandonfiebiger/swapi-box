import React from 'react';
import './Favorites.css';

const Favorites = ({ favorites }) => {

  return(
    <button>
      View Favorites: {favorites.length}
    </button>
  )  
}

export default Favorites;