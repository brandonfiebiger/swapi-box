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

const getPeopleData = (data) => {
  const unresolvedPeople = data.results.map( async person => {
    const homeworld = await fetchData(person.homeworld);
    const species = await fetchData(person.species);
    return { 
      name: person.name, 
      homeworld: homeworld.name, 
      population: homeworld.population,
      species: species.name
    };
  });

  return Promise.all(unresolvedPeople);
}

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const getPlanetData = (data) => {

}

const getVehicleData = (data) => {

}

export default getData;