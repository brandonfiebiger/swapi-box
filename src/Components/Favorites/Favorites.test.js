import React from 'react';
import { shallow } from 'enzyme';

import Favorites from './Favorites';

describe('Favorites', () => {

  it('should match the snapshot', () => {
    const favorites = [];
    const wrapper = shallow(<Favorites favorites={favorites} />);

    expect(wrapper.html()).toMatchSnapshot();
  })

  it('should match snapshot if there is one favorite', () => {
    const favorites = [{name: 'Luke Skywalker'}];
    const wrapper = shallow(<Favorites favorites={favorites} />);

    expect(wrapper.html()).toMatchSnapshot();    
  })

  it('should match snapshot if there are multiple favorites', () => {
    const favorites = [{name: 'Luke Skywalker'}, {name: 'R2D2'}];
    const wrapper = shallow(<Favorites favorites={favorites} />);

    expect(wrapper.html()).toMatchSnapshot();    
  })

  it('should invoke a method called selectFavorites when clicked', () => {
    const favorites = [];
    const mockSelectFavorites = jest.fn();
    const wrapper = shallow(<Favorites favorites={favorites} selectFavorites={mockSelectFavorites} />);
    
    wrapper.find('button').simulate('click');
    expect(mockSelectFavorites).toHaveBeenCalled();
  })
})