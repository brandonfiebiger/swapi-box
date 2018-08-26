import React, { Component } from 'react';
import './App.css';

import { fetchData } from './apiCalls/apiCalls.js';
import Crawl from './Components/Crawl/Crawl.js';
import Favorites from './Components/Favorites/Favorites.js';
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
      loading: true
    };
  }

  async componentDidMount() {
    const cleanedData = await fetchData('films');
    this.setState({ 'films': cleanedData, loading: false });
    const storedData = localStorage.getItem("favorites");
    if (storedData) {
      var parsedData = JSON.parse(storedData);
      this.setState({ 'favorites': parsedData });
    } 
  }

  selectCategory = (category) => {
    if (!this.state[category].length) {
      this.setState({ loading: true }, async() => {
        const cleanedData = await fetchData(category);
        this.setState({ [category]: cleanedData, loading: false });
      });
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
      const filteredFavorites = favorites.filter( favorite => (
        favorite !== clickedCard
      ));
      let dataString = JSON.stringify(filteredFavorites);
      localStorage.setItem('favorites', dataString);
      this.setState({ favorites: filteredFavorites });
    } else {
      const addedFavorites = [...favorites, clickedCard];
      let dataString = JSON.stringify(addedFavorites);
      localStorage.setItem('favorites', dataString);
      this.setState({ favorites: addedFavorites });
    }
  }

  render() {
    const { 
      favorites, 
      categories, 
      selectedCategory, 
      films, 
      loading } = this.state;
    const category = this.state[selectedCategory] || []; 
    let appLoading;
    loading ? appLoading = 'show-loading' : appLoading = 'hide-loading';
    
    return (
      <div className='App'>
        <div className={appLoading}>Loading...</div>
        <Crawl films={films} />
        <header>
          <img src={require('./images/logo.png')} alt='SWAPIbox' />
          <Categories 
            categories={categories} 
            selectedCategory={selectedCategory}
            selectCategory={this.selectCategory} />
          <Favorites 
            favorites={favorites} 
            selectFavorites={this.selectFavorites}/>
        </header>
        <main>
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