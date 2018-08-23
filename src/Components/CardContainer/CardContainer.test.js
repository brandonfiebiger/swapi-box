import React from 'react';
import { shallow } from 'enzyme';

import CardContainer from './CardContainer';

describe('CardContainer', () => {
  
  it('should match the snapshot', () => {
    const category = [];
    const favorites = [];
    const wrapper = shallow(<CardContainer category={category} favorites={favorites}/>);
    
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('should match the snapshot when one card is in category array', () => {
    const category = [{name: 'test', origin: 'the matrix'}];
    const favorites = [];
    const wrapper = shallow(<CardContainer category={category} favorites={favorites}/>);

    expect(wrapper.html()).toMatchSnapshot();  
  })

  it('should match the snapshot when multiple cards are in category array', () => {
    const category = [{name: 'test1', origin: 'the matrix'}, {name: 'test2', origin: 'the matrix'}];
    const favorites = [];
    const wrapper = shallow(<CardContainer category={category} favorites={favorites}/>);

    expect(wrapper.html()).toMatchSnapshot();  
  })

})