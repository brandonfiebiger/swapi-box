import { fetchData, getHomeworld, getSingleSpecies, getResident } from './apiCalls';
import { mockFilmData } from './mockFilmData';
import  mockPeopleData  from './mockPeopleData';
import { peopleResultAfterFetchData } from './mockPeopleResult';
import { mockPlanetData, mockPlanetResult } from './mockPlanetData';
import { mockSpeciesData, mockSpeciesResult } from './mockSpeciesData';
import { mockResidentData, mockResidentResult } from './mockResidentData';

describe('apiCalls', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockFilmData),
    }));
  });

  describe('fetchData', () => {

    it('fetch is called with the correct params', async () => {    
      await fetchData('people');
      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people');
    });
  
    it('returns an array if status code is ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockPeopleData)
      }));
      const data = await fetchData('people');

      expect(data).toEqual(peopleResultAfterFetchData);
    });
  
    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({ status: 500 }) 
      );
      await expect(fetchData('asdf')).rejects.toEqual(Error('Error fetching initial data'));
    });

  });

  describe('getHomeworld', () => {
    it('should return the correct planet data', async () => {
      window.fetch = jest.fn().mockImplementation( async () => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockPlanetData)
      }));
      const data = await getHomeworld("https://swapi.co/api/planets/1/");
      expect(data).toEqual(mockPlanetResult);
    });

    // it('should throw an error is status code is not ok', () => {

    // });
    
  });

  describe('getSingleSpecies', () => {
    it('should get the correct species data', async () => {
      window.fetch = jest.fn().mockImplementation( async () => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockSpeciesData)
      }));
      const data = await getSingleSpecies("https://swapi.co/api/species/1/");
      expect(data).toEqual(mockSpeciesResult);
    });

// it('should throw an error is status code is not ok', () => {

// });
    
  });

  describe('getResident', () => {
    it('should aquire the correct resident data', async () => {
      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockResidentData)
      }));
      const data = await getResident("https://swapi.co/api/people/5/");
      expect(data).toEqual(mockResidentResult);
    });

// it('should throw an error is status code is not ok', () => {

// });

  }); 

});