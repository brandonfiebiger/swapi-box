import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import CardContainer from './CardContainer';

describe('CardContainer', () => {

  let wrapper;
  let infoCards;
  beforeEach(() => {
    infoCards = [];
    wrapper = shallow(<CardContainer infoCards={infoCards}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot when one card is in infoCards array', () => {
    infoCards = [{}];
    expect(wrapper).toMatchSnapshot();  
  })

  it('should match the snapshot when multiple cards are in infoCards array', () => {
    infoCards = [{}, {}];
    expect(wrapper).toMatchSnapshot();  
  })
})