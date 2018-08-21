import React from 'react';
import PropTypes from 'prop-types';
import './Categories.css';

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
      onClick={(event) => selectCategory(event.target.name)}>
      {category}
    </button>;
  });

  return (
    <nav className='nav'>{buttons}</nav>
  );
};

export default Categories;

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  selectedCategory: PropTypes.string,
  selectCategory: PropTypes.func
};