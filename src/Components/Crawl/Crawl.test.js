import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Crawl from './Crawl';

describe('Crawl', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Crawl />);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should scroll through multiple movie descriptions', () => {

  })
})