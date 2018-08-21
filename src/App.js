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

  selectCategory = (category) => {
    this.setState({ selectedCategory: category });
  }

  render() {
    const { favorites, categories, selectedCategory, filmCrawls, loading } = this.state;
    return (
      <div className="App">
        <Favorites favorites={favorites} />
        <Categories 
          categories={categories} 
          selectedCategory={selectedCategory}
          selectCategory={this.selectCategory} />
        <Crawl filmCrawls={filmCrawls} loading={loading} />
      </div>
    );
  }
}

export default App;
