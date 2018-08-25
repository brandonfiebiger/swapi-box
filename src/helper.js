import { 
  getHomeworld, 
  getSingleSpecies, 
  getResident } from "./apiCalls/apiCalls";

const cleanData = (data, dataCategory) => {
  let cleanedData = [];

  switch (dataCategory) {
    case 'films':
      cleanedData = getFilmData(data);
      break;
    case 'people':
      cleanedData = getPeopleData(data);
      break;
    case 'planets':
      cleanedData = getPlanetData(data);
      break;
    case 'vehicles':
      cleanedData = getVehicleData(data);
      break;
    default: 
      cleanedData = [];
  }

  return cleanedData;
};

const getFilmData = (data) => {
  return data.results.map( film => (
    {
      crawl: film.opening_crawl,
      title: film.title,
      date: film.release_date
    }
  ));
};

const getPeopleData = async (data) => {
  const unresolvedPeople = data.results;
  const peopleWithHomeworld = await getHomeworlds(unresolvedPeople);
  const peopleWithHomeworldAndSpecies = await getSpecies(peopleWithHomeworld);

  return Promise.all(peopleWithHomeworldAndSpecies);
};

const getHomeworlds = async (people) => {
  return people.map(async person => {
    const homeworld = await getHomeworld(person.homeworld);
    return {
      ...person, 
      homeworld: homeworld.name, 
      population: homeworld.population };
  });
};

const getSpecies = async (people) => {
  return people.map(async person => {
    const resolvedPerson = await person;
    const species = await getSingleSpecies(resolvedPerson.species);
    return {
      name: resolvedPerson.name, 
      homeworld: resolvedPerson.homeworld, 
      population: resolvedPerson.population, 
      species: species.name};
  });
};

const getPlanetData = (data) => {
  const uncleanPlanets = data.results;
  const unresolvedPlanets = uncleanPlanets.map( async planet => {
    const residents = await getResidents(planet.residents);
    const residentsPromise = await Promise.all(residents);
    const resolvedResidents = await residentsPromise;
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: resolvedResidents.join(', ')
    };
  }); 
  return Promise.all(unresolvedPlanets);
};

const getResidents = async (residents) => {
  return  residents.map(async resident => {
    const residentInfo = await getResident(resident);
    return residentInfo.name;
  });
};

const getVehicleData = (data) => {
  return data.results.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      'number of passengers': vehicle.passengers
    };
  });
};

export default cleanData;