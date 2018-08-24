import { getHomeworld, getSpecies, getResidents } from "./apiCalls/apiCalls";

const cleanData = (data, dataCategory) => {
  let cleanedData = [];

  switch(dataCategory) {
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
}

const getFilmData = (data) => {
  return data.results.map( film => (
    {
      crawl: film.opening_crawl,
      title: film.title,
      date: film.release_date
    }
  ));
}

const getPeopleData = (data) => {
  const unresolvedPeople = data.results.map( async person => {
    const homeworld = await getHomeworld(person.homeworld);
    const species = await getSpecies(person.species);
    return { 
      name: person.name, 
      homeworld: homeworld.name, 
      population: homeworld.population,
      species: species.name
    };
  });

  return Promise.all(unresolvedPeople);
}

const getPlanetData = (data) => {
  const unresolvedPlanets = data.results.map(async planet => {
    const unresolvedResidents = await planet.residents.map(async resident => {
      const residentInfo = await getResidents(resident);
      return residentInfo.name;
    })
    const residents = await Promise.all(unresolvedResidents)
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: residents.join(', ')
    }
  })  
  return Promise.all(unresolvedPlanets)
}

const getVehicleData = (data) => {
  return data.results.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      'number of passengers': vehicle.passengers
    }
  })
}

export default cleanData;