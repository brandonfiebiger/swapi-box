import React, { Component } from 'react';
import './App.css';

import CleanData from './helper';
import Crawl from './Components/Crawl/Crawl.js';
import Favorites from './Components/Favorites/Favorites.js'
import Categories from './Components/Categories/Categories';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: ['people', 'planets', 'vehicles'],
      selectedCategory: '',
      cards: [],
      favorites: [],
      films: [],
      people: [],
      planets: [],
      vehicles: [],
      error: false,
      loading: true
    };
  }

  async componentDidMount() {
    this.fetchData('films');
  }

  fetchData = async (category) => {
    let url = '';

    switch(category) {
      case 'films':
        url = 'https://swapi.co/api/films/';
        break;
      case 'people':
        url = 'https://swapi.co/api/people/';
        break;
      case 'planets': 
        url = 'https://swapi.co/api/planets/';
        break;
      case 'vehicles':
        url = 'https://swapi.co/api/vehicles/';
        break;
      default:
        url = '';
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      const cleanedData = await CleanData(data, category);
      this.setState({ [category]: cleanedData, loading: false });
    } 
    catch(error) {
      this.setState({ error: true })
    }
  }

  selectCategory = (category) => {
    this.setState({ selectedCategory: category });
  }

  render() {
    const { favorites, categories, selectedCategory, films, loading } = this.state;
    return (
      <div className="App">
        <Favorites favorites={favorites} />
        <Categories 
          categories={categories} 
          selectedCategory={selectedCategory}
          selectCategory={this.selectCategory} />
        <Crawl films={films} loading={loading} />
      </div>
    );
  }
}

export default App;
