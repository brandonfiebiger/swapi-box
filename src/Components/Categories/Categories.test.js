import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Categories from './Categories';

describe('Categories', () => {

  let wrapper;
  let categories;
  let mockFn;

  beforeEach(() => {
    categories = ['word', 'up', 'money'];
    mockFn = jest.fn()
    wrapper = shallow(<Categories categories={categories} selectCategory={mockFn}/>);

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

  it('should invoke a selectCategory method on click', () => {
    wrapper = mount(<Categories categories={categories} selectCategory={mockFn}/>)
    wrapper.find('button').first().simulate('click')
    expect(wrapper.props().selectCategory).toHaveBeenCalled()

  })

  // it('currentCategory should be highlighted', () => {
  //   wrapper = mount(<Categories categories={categories} selectCategory={mockFn}/>)
  //   wrapper.find('button').first().simulate('click');
  //   expect(wrapper.find('button').first().hasClass('btn-selected')).toEqual(true)
  // })
})