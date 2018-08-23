import React from 'react';
import { shallow } from 'enzyme';

import getData from './helper'

import mockFilmData from './ApiCalls/mockData/mockFilmData';
import mockPeopleData from './ApiCalls/mockData/mockPeopleData';

describe('getData', () => {
  it('should invoke a certain function based on the category', () => {
    const data = {results: []};
    
    getData(data, 'films');
    expect(getFilmData).toHaveBeenCalled();
    
    getData(data, 'people');
    expect(getPeopleData).toHaveBeenCalled();

    getData(data, 'planets');
    expect(getPlanetData).toHaveBeenCalled();

    getData(data, 'vehicles');
    expect(getVehicleData).toHaveBeenCalled();
  })
})