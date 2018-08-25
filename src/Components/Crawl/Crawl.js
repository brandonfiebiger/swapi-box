import React from 'react';
import PropTypes from 'prop-types';

import './Crawl.css';

const Crawl = (props) => {
  const displayFilms = props.films.map( (film, index) => (
    <div key={film.title + index}>
      <h2>{film.title}</h2>
      <p>{film.crawl}</p>
      <p className='film-end'>{film.date}</p>
    </div>
  ));

  return (
    <section className="crawler-container">
      <div className="crawler">
        {displayFilms}
      </div>
    </section>
  );
};

export default Crawl;

Crawl.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object)
};