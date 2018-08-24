import React from 'react';
import { shallow } from 'enzyme';
import mockFilmResult from './apiCalls/mockData/mockFilmResult'
import mockPeopleResult from './apiCalls/mockData/mockPeopleResult'
import mockVehicleResult from './apiCalls/mockData/mockVehicleResult'

import App from './App';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe('fetchData', () => {
    it.skip('should set state to the appropiate category if fetch works', async () => {
      await wrapper.instance().fetchData('films')
      expect(wrapper.state('films')).toEqual(mockFilmResult)
      await wrapper.instance().fetchData('people')
      expect(wrapper.state('people')).toEqual(mockPeopleResult)
      await wrapper.instance().fetchData('vehicles')
      expect(wrapper.state('vehicles')).toEqual(mockVehicleResult)
    })

    it('should throw an error if the fetch doesnt work', async () => {
      await wrapper.instance().fetchData('nope')
      expect(wrapper.state('error')).toEqual(true)
    })
  })
  
  describe('selectCategory', () => {
    it('should set state of selectedCategory to category being passed in', () => {
      expect(wrapper.state('selectedCategory')).toEqual('');
      wrapper.instance().selectCategory('planets');
      expect(wrapper.state('selectedCategory')).toEqual('planets');
    })
    
    it('should set the state of loading to true if the selected categories array does not have length',  () => {
      wrapper.setState({loading: false})
      wrapper.instance().selectCategory('planets');
      expect(wrapper.state('loading')).toEqual(true)
      
      wrapper.setState({loading: false})
      wrapper.setState({planets: ['moon']})
      wrapper.instance().selectCategory('planets');
      expect(wrapper.state('loading')).toEqual(false);

    })

    it('should call fetch data with the correct params', () => {
      wrapper.instance().fetchData = jest.fn()
      wrapper.instance().selectCategory('planets');
      expect(wrapper.instance().fetchData).toHaveBeenCalledWith('planets')

    })

    it('should set the state of selectedCategory to the selected category', () => {
      wrapper.instance().selectCategory('planets');
      expect(wrapper.state('selectedCategory')).toEqual('planets');
    })

    it('should call the fetchData method', () => {
      wrapper.instance().fetchData = jest.fn() 
      wrapper.instance().selectCategory('planets')
      expect(wrapper.instance().fetchData).toHaveBeenCalled();
    })
  })

  describe('selectFavorites', () => {
    it.skip('should give an alert if there are no favorites', () => {
      wrapper.instance().selectFavorites();
      expect(window.alert).toHaveBeenCalled();
    })

    it('should update state of selectedCategory with favorites', () => {
      wrapper.setState({ favorites: [{name: 'test'}]})
      expect(wrapper.state('selectedCategory')).toEqual('');
      
      wrapper.instance().selectFavorites();
      
      expect(wrapper.state('selectedCategory')).toEqual('favorites');
    })

  })

  describe('toggleFavorites', () => {
    it('should update the state of favorites with a new favorite', () => {
      wrapper.instance().toggleFavorites('I love you');
      expect(wrapper.state('favorites')).toEqual(['I love you'])
    })

    it('should remove the favorite from the array when input twice', () => {
      wrapper.instance().toggleFavorites('lets be friends')
      wrapper.instance().toggleFavorites('lets be friends')
      expect(wrapper.state('favorites')).toEqual([])
    })
  })
})

