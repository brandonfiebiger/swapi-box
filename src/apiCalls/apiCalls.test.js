import React from 'react';
import { shallow } from 'enzyme';

import mockFilmData from './ApiCalls/mockData/mockFilmData';
import mockPeopleData from './ApiCalls/mockData/mockPeopleData';

describe('apiCalls', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        cleanedData: mockData,
      }),
    }))
  })

  describe('fetchData', () => {

    it('fetch is called with the correct params', async () => {    
      await fetchData()
      expect(window.fetch).toHaveBeenCalledWith()
    })
  
    it('returns an object if status code is ok', async () => {
      await expect(fetchData()).resolves.toEqual({})
    })
  
    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500,
      }))
  
      await expect(fetchData()).rejects.toEqual(Error(''))
    })

  })

  describe('getHomeworld', () => {

  })

  describe('getSpecies', () => {
    
  })

  describe('getResidents', () => {
    
  })   

})