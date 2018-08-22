import React, { Component } from 'react';
import './Crawl.css';

const Crawl = (props) => {
  const { loading, films } = props;
  const displayFilms = films.map( film => (
    <div>
      <h2>{film.title}</h2>
      <p>{film.crawl}</p>
      <p className='film-end'>{film.date}</p>
    </div>
  ))
  // let film = {};
  // if (!loading) {
  //   film = films[Math.floor(Math.random() * films.length - 1) + 1];
  // }
    return(
    <section className="crawler-container">
      <div className="crawler">
        {displayFilms}
      </div>
    </section>
)


}


export default Crawl;
