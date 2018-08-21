import React from 'react';
import './Categories.scss';

const Categories = ({ categories, selectedCategory, selectCategory }) => {
  const buttons = categories.map( (category, index) => {
    let selectedBtn = '';

    if (selectedCategory === category) {
      selectedBtn = 'btn-selected';
    }
    
    return <button 
      name={category}
      key={index}
      className={'btn ' + selectedBtn}
      onClick={(e) => selectCategory(e.target.name)}>
      {category}
    </button>
  });

  return (
    <nav className='nav'>{buttons}</nav>
  )
}

export default Categories;