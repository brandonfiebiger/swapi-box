import { cleanData, getPeopleData, getPlanetData, getVehicleData, getResidents, getFilmData } from "./helper";
import { mockFilmData } from './apiCalls/mockFilmData';
import { mockVehicleData, mockVehicleResult } from './apiCalls/mockVehicleData'
import { mockFilmResult, filmResultafterCleanData } from './apiCalls/mockFilmResult'
import  mockPeopleData from './apiCalls/mockPeopleData';
import { mockPlanetData, dataToFeedForPlanets, mockGetPlanetDataResult, dataToFeedForResidents } from './apiCalls/mockPlanetData';
import { mockPeopleResult, peopleResultFromGetPeopleData} from './apiCalls/mockPeopleResult'
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

  describe('getResidents', () => {
    it('should get the correct resident data', async () => {
      const residentNames = await getResidents(dataToFeedForResidents)
      const resolvedNames = Promise.all(residentNames)
      expect(residentNames).toEqual('')
    })
  })

});