import cleanData from "./helper";

import { mockFilmData } from './apiCalls/mockFilmData';
import  mockPeopleData from './apiCalls/mockPeopleData';

describe('cleanData', () => {
  it.skip('should invoke a certain function based on the category', () => {
    cleanData(data, 'films')
    expect(getFilmData).toHaveBeenCalled();
    
    cleanData(data, 'people');
    expect(getPeopleData).toHaveBeenCalled();

    cleanData(data, 'planets');
    expect(getPlanetData).toHaveBeenCalled();

    cleanData(data, 'vehicles');
    expect(getVehicleData).toHaveBeenCalled();
  }); 

  describe('getFilmData', () => {
    it('should return clean film data', () => {
      const data = mockFilmData;
      const cleanedData = cleanData(data, 'films');
  
      expect(cleanedData).toHaveLength(2);
    });
  });

  describe.skip('getPeopleData', () => {
    it('should return clean people data', () => {
      const data = mockPeopleData;
      console.log(data)
      const cleanedData = cleanData(data, 'people');
  
      expect(cleanedData).toHaveLength();
    });
  });

  describe.skip('getPlanetData', () => {
    it('should return clean planet data', () => {
      const data = mockPlanetData;
      const cleanedData = cleanData(data, 'planets');
  
      expect(cleanedData).toHaveLength();
    });
  });

  describe.skip('getVehicleData', () => {
    it('should return clean vehicle data', () => {
      const data = mockVehicleData;
      const cleanedData = cleanData(data, 'vehicles');
  
      expect(cleanedData).toHaveLength();
    });
  });

});