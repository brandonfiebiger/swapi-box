import React from 'react';
import { shallow } from 'enzyme';

import cleanData from './helper'

import mockFilmData from './ApiCalls/mockData/mockFilmData';
import mockPeopleData from './ApiCalls/mockData/mockPeopleData';

describe('cleanData', () => {
  it.skip('should invoke a certain function based on the category', () => {
    const data = {results: []};
    
    cleanData(data, 'films');
    expect(getFilmData).toHaveBeenCalled();
    
    cleanData(data, 'people');
    expect(getPeopleData).toHaveBeenCalled();

    cleanData(data, 'planets');
    expect(getPlanetData).toHaveBeenCalled();

    cleanData(data, 'vehicles');
    expect(getVehicleData).toHaveBeenCalled();
  })  

  describe('getFilmData', () => {

  })

  describe('getPeopleData', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          people: mockPeople,
        }),
      }))
    })

      it('fetch is called with the correct params', async () => {    
        await getPeopleData(mockPeopleData)
        expect(window.fetch).toHaveBeenCalledWith()
      })
    
      it('returns an object if status code is ok', async () => {
        await expect(getPeopleData(mockPeopleData)).resolves.toEqual({})
      })
    
      it('throws an error if status code is not ok', async () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 500,
        }))
    
        await expect(getPeopleData()).rejects.toEqual(Error(''))
      })

  })

  describe('getPlanetData', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          planets: mockPlanets,
        }),
      }))
      
    })
    
    describe('getVehicleData', () => {
      
    })
    
  })
})