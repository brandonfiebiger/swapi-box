import React from 'react';
import { shallow } from 'enzyme';

import cleanData from "./helper";

import mockFilmData from './ApiCalls/mockData/mockFilmData';
import mockPeopleData from './ApiCalls/mockData/mockPeopleData';

describe('cleanData', () => {
  it('should invoke a certain function based on the category', () => {
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
  
  })

  describe('getPlanetData', () => {

  })

  describe('getVehicleData', () => {

  })
})