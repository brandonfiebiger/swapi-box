const getData = (data, dataCategory) => {
  let cleanedData = [];

  if (dataCategory === 'film') {
    cleanedData = getFilmData(data);
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
  let allPeople = [];
  fetch('https://swapi.co/api/people/')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(result => {
      let person = {};
      person.name = result.name;
      fetch(result.homeworld)
      .then(response => response.json())
      .then(data => {
        person.homeworld = data.name;
        person.population = data.population;
      })
      fetch(result.species)
      .then(response => response.json())
      .then(data => {
        person.species = data.name
      })
      allPeople.push(person)
    })
  })
  return allPeople;
}


const getPlanetData = (data) => {

}

const getVehicleData = (data) => {

}

export default getData;