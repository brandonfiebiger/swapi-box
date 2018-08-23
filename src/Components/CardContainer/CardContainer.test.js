import React from 'react';
import { shallow } from 'enzyme';

import CardContainer from './CardContainer';

describe('CardContainer', () => {

  let wrapper;
  let category;
  let favorites;
  let selected;

  beforeEach(() => {
    category = [];
    favorites = [];
    selected = false;
    wrapper = shallow(<CardContainer category={category} favorites={favorites}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot when one card is in category array', () => {
    category = [{name: 'test', origin: 'the matrix'}];
    
    expect(wrapper).toMatchSnapshot();  
  })

  it('should match the snapshot when multiple cards are in category array', () => {
    category = [{name: 'test1', origin: 'the matrix'}, {name: 'test2', origin: 'the matrix'}];
    
    expect(wrapper).toMatchSnapshot();  
  })

  it.skip('should set the value of selected based on if favorites includes the card facts', () => {
    category = [{name: 'test', origin: 'the matrix'}];
    favorites = [];

    expect(selected).toEqual(false);

    category = [{name: 'test', origin: 'the matrix'}];
    favorites = [{name: 'test', origin: 'the matrix'}];

    wrapper.instance()

    expect(selected).toEqual(true);
  })

})