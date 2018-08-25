import React from 'react';
import { shallow } from 'enzyme';

import Crawl from './Crawl';

describe('Crawl', () => {
  
  it('should match snapshot', () => {
    const films = [];
    const wrapper = shallow(<Crawl films={films}/>);
    
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should match snapshot with one film', () => {
    const films = [{ title: 'test1', crawl: 'text', date: '1'}];
    const wrapper = shallow(<Crawl films={films}/>);
    
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should match snapshot with multiple films', () => {
    const films = [
      { title: 'test1', crawl: 'text', date: '1' }, 
      { title: 'test2', crawl: 'text', date: '2' }
    ];
    const wrapper = shallow(<Crawl films={films}/>);
    
    expect(wrapper.html()).toMatchSnapshot();
  });

});