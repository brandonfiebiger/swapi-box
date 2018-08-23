import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import mockFilmResult from '../../mockFilmResult'

import Crawl from './Crawl';

describe('Crawl', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Crawl films={mockFilmResult}/>);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})