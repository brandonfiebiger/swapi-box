import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Categories from './Categories';

describe('Categories', () => {

  let wrapper;
  let categories;

  beforeEach(() => {
    categories = [];
    wrapper = shallow(<Categories categories={categories}/>);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with one category', () => {
    categories = ['people'];
    expect(wrapper).toMatchSnapshot();

  })

  it('should match snapshot with multiple categories', () => {
    categories = ['people', 'planets', 'vehicles'];
    expect(wrapper).toMatchSnapshot();
  })

  it('should invoke a changeCategory method on click', () => {

  })

  it('currentCategory should be highlighted', () => {

  })
})