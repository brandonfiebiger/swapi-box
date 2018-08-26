import { cleanData, getPeopleData, getPlanetData } from "./helper";
import { mockFilmData } from './apiCalls/mockFilmData';
import  mockPeopleData from './apiCalls/mockPeopleData';
import { mockPlanetData, dataToFeedForPlanets } from './apiCalls/mockPlanetData';
jest.mock('./apiCalls/apiCalls.js')

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

  describe('getPeopleData', () => {
    it('should return clean people data', async () => {
      const data = mockPeopleData;
      // console.log(data)
      const cleanedData = await getPeopleData(data);
      expect(cleanedData).toHaveLength(10);
    });
  });

  describe('getPlanetData', () => {
    it('should return clean planet data', async () => {
      const data = dataToFeedForPlanets;
      console.log(data)
     
      const cleanedData = await getPlanetData(dataToFeedForPlanets);
  
      expect(cleanedData).toHaveLength(10);
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