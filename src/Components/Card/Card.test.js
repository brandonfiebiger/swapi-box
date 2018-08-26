import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

describe('Card', () => {
  let facts;
  let mockToggleFavorites;
  let selected;

  beforeEach(() => {
    facts = {};
    mockToggleFavorites = jest.fn();
    selected = false;
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Card facts={facts} 
      toggleFavorites={mockToggleFavorites} 
      selected={selected} />);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should match the snapshot with a fact', () => {
    facts = {name: 'test'};
    const wrapper = shallow(<Card facts={facts} 
      toggleFavorites={mockToggleFavorites} 
      selected={selected} />);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should match the snapshot with multiple facts', () => {
    facts = {name: 'test1', origin: 'the matrix'};
    const wrapper = shallow(<Card facts={facts} 
      toggleFavorites={mockToggleFavorites} 
      selected={selected} />);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should call toggleFavorites with the correct parameters when clicked', () => {
    const wrapper = shallow(<Card facts={facts} 
      toggleFavorites={mockToggleFavorites} 
      selected={selected} />);
    
    wrapper.find('.Card').simulate('click');

    expect(mockToggleFavorites).toHaveBeenCalledWith(facts);
  });

  it('should change color of svg depending on if selected is true or false', () => {
    let wrapper = shallow(<Card facts={facts} 
      toggleFavorites={mockToggleFavorites} 
      selected={selected} />);
    
    expect(wrapper.find('path').prop('fill')).toEqual('#f2f2f2');

    selected = true;
    facts = {name: 'test1', origin: 'the matrix'};
    wrapper = shallow(<Card facts={facts} 
      toggleFavorites={mockToggleFavorites} 
      selected={selected} />);
      
    expect(wrapper.find('path').prop('fill')).toEqual('#fac917');
  });

  it('should say none next to residents if there are none', () => {
    facts = {residents: []};
    const wrapper = shallow(<Card facts={facts} 
      toggleFavorites={mockToggleFavorites} 
      selected={selected} />);

    expect(wrapper.find('.residents').text()).toEqual('residents: none');

  });

});