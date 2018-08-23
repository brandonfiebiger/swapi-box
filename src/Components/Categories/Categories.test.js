import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Categories from './Categories';

describe('Categories', () => {

  let wrapper;
  let categories;
  let mockFn;
  let mockEvent;
  let selectedCategory;
  beforeEach(() => {
    categories = ['word', 'up', 'money'];
    mockFn = jest.fn()
    mockEvent = {target: 'word'}
    selectedCategory = 'word'
    wrapper = shallow(<Categories categories={categories} selectCategory={mockFn} selectedCategory={selectedCategory}/>);

  })

  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should match snapshot with one category', () => {
    categories = ['people'];
    expect(wrapper.html()).toMatchSnapshot();

  })

  it('should match snapshot with multiple categories', () => {
    categories = ['people', 'planets', 'vehicles'];
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('should invoke a selectCategory method on click', () => {
    wrapper.find('button').first().simulate('click', mockEvent)
    expect(mockFn).toHaveBeenCalled()

  })

  it('currentCategory should have a className of btn-selected when button is clicked', () => {
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.find('button').first().simulate('click', mockEvent);
    expect(wrapper.html()).toMatchSnapshot();
    
    selectedCategory = 'cheese';
    wrapper = shallow(<Categories categories={categories} selectCategory={mockFn} selectedCategory={selectedCategory}/>);
    wrapper.find('button').first().simulate('click', mockEvent);
    expect(wrapper.html()).toMatchSnapshot();
  })
})