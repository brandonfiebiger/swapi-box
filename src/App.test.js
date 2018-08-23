import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import mockFilmResult from './mockFilmResult'

import App from './App';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('fetchData', () => {
    it('should set state to the appropiate category if fetch works', async () => {
      await wrapper.instance().fetchData('films')
      expect(wrapper.state('films')).toEqual(mockFilmResult)
    })

    it('should throw an error if the fetch doesnt work', async () => {
      
    })  
  })
})

