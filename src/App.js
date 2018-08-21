import React, { Component } from 'react';
import './App.scss';
import mockPeopleData from './mockPeopleData'
import Crawl from './Components/Crawl/Crawl.js';
import Favorites from './Components/Favorites/Favorites.js'

import CleanData from './helper';
import FilmData from './mockFilmData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: ['people', 'planets', 'vehicles'],
      selectedCategory: '',
      cards: [],
      favorites: [],
      filmCrawls: [],
      error: false,
      loading: true
    };
  }

  componentDidMount() {
    fetch( 'https://swapi.co/api/films/' )
      .then(response => response.json())
      .then(data => {
        const filmCrawls = CleanData(data, 'film');
        this.setState({ filmCrawls, loading: false });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <div className="App">
        <Favorites favorites={this.state.favorites}/>
        <Crawl filmCrawls={this.state.filmCrawls} loading={this.state.loading}/>
      </div>
    );
  }
}

export default App;
