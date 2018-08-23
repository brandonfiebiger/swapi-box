import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

describe('Card', () => {

  let wrapper;
  let facts;
  let mockToggleFavorites;
  let selected;

  beforeEach(() => {
    facts = {};
    mockToggleFavorites = jest.fn();
    selected = false;

    wrapper = shallow(<Card facts={facts} 
      toggleFavorites={mockToggleFavorites} 
      selected={selected} />);
  })

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('should match the snapshot with a fact', () => {
    facts = {name: 'test'};
    wrapper = shallow(<Card facts={facts} 
      toggleFavorites={mockToggleFavorites} 
      selected={selected} />);

    expect(wrapper.html()).toMatchSnapshot();
  })

  it('should match the snapshot with multiple facts', () => {
    facts = {name: 'test1', origin: 'the matrix'};
    
    wrapper = shallow(<Card facts={facts} 
      toggleFavorites={mockToggleFavorites} 
      selected={selected} />);

    expect(wrapper.html()).toMatchSnapshot();
  })

  it('should call toggleFavorites with the correct parameters when clicked', () => {
    wrapper.find('.Card').simulate('click');

    expect(mockToggleFavorites).toHaveBeenCalledWith(facts);
  })

  it('should change color of svg depending on if selected is true or false', () => {
    expect(wrapper.find('path').prop('fill')).toEqual('#f2f2f2');

    selected = true;
    facts = {name: 'test1', origin: 'the matrix'};
    wrapper = shallow(<Card facts={facts} 
      toggleFavorites={mockToggleFavorites} 
      selected={selected} />);
      
    expect(wrapper.find('path').prop('fill')).toEqual('#fac917');
  })
})