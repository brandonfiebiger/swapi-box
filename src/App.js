import React, { Component } from 'react';
import './App.css';

import CleanData from './ApiCalls/helper';
import Crawl from './Components/Crawl/Crawl.js';
import Favorites from './Components/Favorites/Favorites.js'
import Categories from './Components/Categories/Categories';
import CardContainer from './Components/CardContainer/CardContainer';

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

  componentDidMount() {
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
    if (!this.state[category].length) {
      this.setState({ loading: true })
      this.fetchData(category)
    }
    this.setState({ selectedCategory: category });
  }

  selectFavorites = () => {
    if (!this.state.favorites.length) {
      alert('You currently don\'t have any favorites saved. Click a card to add or remove it from your favorites.');
    } else {
      this.setState({ selectedCategory: 'favorites' });
    }
  }

  toggleFavorites = (element) => {
    const { favorites } = this.state;
    const clickedCard = element;

    if (favorites.includes(clickedCard)) {
      const filteredFavorites = favorites.filter( favorite => favorite !== clickedCard)
      this.setState({ favorites: filteredFavorites });
    } else {
      this.setState({ favorites: [...favorites, clickedCard] });
    }
  }

  render() {
    const { favorites, categories, selectedCategory, films, loading } = this.state;
    const category = this.state[selectedCategory] || []; 
    let appLoading = 'hide-loading';
    loading ? appLoading = 'show-loading' : appLoading;
    
    return (
      <div className='App'>
        <div className={appLoading}>Loading...</div>
        <Crawl films={films} loading={loading} />
        <main>
          <Favorites favorites={favorites} selectFavorites={this.selectFavorites}/>
          <Categories 
            categories={categories} 
            selectedCategory={selectedCategory}
            selectCategory={this.selectCategory} />
          <CardContainer 
            category={category} 
            favorites={favorites}
            toggleFavorites={this.toggleFavorites} />
        </main>
      </div>
    );
  }
}

export default App;