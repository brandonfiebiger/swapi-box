import React, { Component } from 'react';
import './App.scss';
import mockPeopleData from './mockPeopleData'

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
      error: false
    };
  }

  componentDidMount() {
    fetch( 'http://swapi.co/api/films' )
      .then(response => response.json())
      .then(data => {
        const filmCrawls = CleanData(data, 'film');
        console.log(filmCrawls)
        this.setState({ filmCrawls });
      })
      .catch(() => {
        this.setState({ error: true });
      });
    // const filmCrawls = CleanData(FilmData, 'film');
    // this.setState({ filmCrawls });
    // console.log(filmCrawls)
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
