import getPeopleData from './ApiCalls/getPeopleData/getPeopleData';
import getPlanetData from './ApiCalls/getPlanetData/getPlanetData';

const getData = (data, dataCategory) => {
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

export default getData;