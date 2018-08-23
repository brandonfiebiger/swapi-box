import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

describe('Card', () => {

  let wrapper;
  let facts;
  let mockToggleFavorites;
  let selected;

  beforeEach(() => {
    facts = [];
    mockToggleFavorites = jest.fn();
    selected = false;

    wrapper = shallow(<Card facts={facts} 
      toggleFavorites={mockToggleFavorites} 
      selected={selected} />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot with a fact', () => {
    facts = [{name: 'test', origin: 'the matrix'}];

    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot with multiple facts', () => {
    facts = [{name: 'test1', origin: 'the matrix'}, {name: 'test2', origin: 'the matrix'}];
 
    expect(wrapper).toMatchSnapshot();
  })

  it('should call toggleFavorites with the correct parameters when clicked', () => {
    wrapper.find('.Card').simulate('click');

    expect(mockToggleFavorites).toHaveBeenCalledWith(facts);
  })

  it('should change color of svg depending on if selected is true or false', () => {
    expect(wrapper.find('path').props('fill')).toEqual('#f2f2f2');

    selected = true;
    wrapper.instance().forceUpdate();

    expect(wrapper.find('path').props('fill')).toEqual('#fac917');

  })
})