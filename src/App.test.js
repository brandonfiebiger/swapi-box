import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<App />);
  });

  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should check to see if there are favorites in localStorage and update state if there are', async () => {
    expect(wrapper.state('favorites')).toEqual([]);
    const favorites = [{name: 'test'}];

    localStorage.setItem('favorites', JSON.stringify(favorites));
    wrapper = shallow(<App />);

    expect(wrapper.state('favorites')).toEqual([{name: 'test'}]);
  });
  
  describe('selectCategory', () => {

    it('should set state of selectedCategory to category being passed in', () => {
      expect(wrapper.state('selectedCategory')).toEqual('');
      wrapper.instance().selectCategory('planets');
      expect(wrapper.state('selectedCategory')).toEqual('planets');
    });
    
    it('should set the state of loading to true if the selected categories array does not have length',  () => {
      wrapper.setState({loading: false});
      wrapper.instance().selectCategory('planets');
      expect(wrapper.state('loading')).toEqual(true);
      
      wrapper.setState({loading: false});
      wrapper.setState({planets: ['moon']});
      wrapper.instance().selectCategory('planets');
      expect(wrapper.state('loading')).toEqual(false);
    });

    it('should set the state of selectedCategory to the selected category', () => {
      wrapper.instance().selectCategory('planets');
      expect(wrapper.state('selectedCategory')).toEqual('planets');
    });

  });

  describe('selectFavorites', () => {

    it('should give an alert if there are no favorites', () => {
      window.alert = jest.fn();
      wrapper.instance().selectFavorites();
      expect(window.alert).toHaveBeenCalled();
    });

    it('should update state of selectedCategory with favorites', () => {
      wrapper.setState({ favorites: [{name: 'test'}]});
      expect(wrapper.state('selectedCategory')).toEqual('');
      
      wrapper.instance().selectFavorites();
      
      expect(wrapper.state('selectedCategory')).toEqual('favorites');
    });

  });

  describe('toggleFavorites', () => {
    
    it('should update the state of favorites with a new favorite', () => {
      wrapper.instance().toggleFavorites('FOO');
      expect(wrapper.state('favorites')).toEqual(['FOO']);
    });

    it('should remove the favorite from the array when input twice', () => {
      wrapper.instance().toggleFavorites('BAR');
      wrapper.instance().toggleFavorites('BAR');
      expect(wrapper.state('favorites')).toEqual([]);
    });

    it('should save favorites to localeStorage', () => {
      const favorite = {name: 'test'};
    
      expect(localStorage.getItem('favorites')).toEqual(undefined);
  
      wrapper.instance().toggleFavorites(favorite);
  
      expect(JSON.parse(localStorage.getItem('favorites'))).toEqual([favorite]);
    });

  });

});

