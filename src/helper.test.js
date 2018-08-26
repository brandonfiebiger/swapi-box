import { cleanData, getPeopleData, getPlanetData, getVehicleData, getResidents, getFilmData } from "./helper";
import { mockVehicleData, mockVehicleResult } from './apiCalls/mockVehicleData'
import  { mockPeopleData, mockPeopleResult, peopleResultFromGetPeopleData } from './apiCalls/mockPeopleData';
import { mockFilmData, mockFilmResult, filmResultafterCleanData } from './apiCalls/mockFilmData';
import { mockPlanetData, dataToFeedForPlanets, mockGetPlanetDataResult, dataToFeedForResidents } from './apiCalls/mockPlanetData';
jest.mock('./apiCalls/apiCalls.js')

describe('cleanData', () => {
  it('should return the correct data based on category', async() => {
    const cleanedFilmData = cleanData(mockFilmData, 'films')
    expect(cleanedFilmData).toEqual(filmResultafterCleanData)

    const cleanedPeopleData = await cleanData(mockPeopleData, 'people');
    expect(cleanedPeopleData).toEqual(peopleResultFromGetPeopleData)

    const cleanedPlanetData = await cleanData(dataToFeedForPlanets, 'planets');
    expect(cleanedPlanetData).toEqual(mockGetPlanetDataResult)

    const cleanedVehicles = cleanData(mockVehicleData, 'vehicles');
    expect(cleanedVehicles).toEqual(mockVehicleResult);
  }); 

  it('should default to returning an empty array', () => {
    const emptyArray = cleanData()
    expect(emptyArray).toEqual([])
  })

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
      expect(cleanedData).toEqual(peopleResultFromGetPeopleData)
    });
  });

  describe('getPlanetData', () => {
    it('should return clean planet data', async () => {
      const data = dataToFeedForPlanets;
     
      const cleanedData = await getPlanetData(dataToFeedForPlanets);
  
      expect(cleanedData).toHaveLength(10);
      expect(cleanedData).toEqual(mockGetPlanetDataResult)

    });
  });

  describe('getVehicleData', () => {
    it('should return clean vehicle data', () => {
      const data = mockVehicleData;
      const cleanedData = cleanData(data, 'vehicles');
  
      expect(cleanedData).toHaveLength(10);
    });
  });
});