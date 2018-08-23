import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import mockFilmResult from './mockFilmResult'
import mockPeopleResult from './mockPeopleResult'
import mockVehicleResult from './mockVehicleResult'

import App from './App';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('fetchData', () => {
    it('should set state to the appropiate category if fetch works', async () => {
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
    
    // it('should call CleanData method', async () => {
    //   await wrapper.instance().fetchData('films')
      
    // })
  })

  describe('selectCategory', () => {
    it('should set the state of loading to true if the selected categories array does not have length',  () => {
      wrapper.instance().selectCategory('planets');
      expect(wrapper.state('loading')).toEqual(true);
    })

    it('should set the state of selectedCategory to the selected category', () => {
      wrapper.instance().selectCategory('planets');
      expect(wrapper.state('selectedCategory')).toEqual('planets');
    })

    // it('should call the fetchData method', () => {
    //   wrapper.instance().selectCategory('planets')
    // })
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

