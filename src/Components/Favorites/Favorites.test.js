import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Favorites from './Favorites';

describe('Favorites', () => {

  let wrapper;
  let favorites;

  beforeEach(() => {
    favorites = [];
    wrapper = shallow(<Favorites favorites={favorites} />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot if number of favorites changes', () => {
    favorites = ['Luke Skywalker'];
    expect(wrapper).toMatchSnapshot();    
  })

  it('should invoke a method called displayFavorites when clicked', () => {

  })
})