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
  let peopleArray = []
  let newArray = [];
  fetch('https://swapi.co/api/people/')
  .then(response => response.json())
  .then(datas => {
    peopleArray = datas.results;

    for (let i = 0; i < peopleArray.length; i++) {
      let person = {};
      person.name = peopleArray[i].name;
      fetch(peopleArray[i].homeworld)
      .then(response => response.json())
      .then(data => {
        person.homeworld = data.name
        person.population = data.population
      })
      fetch(peopleArray[i].species)
      .then(response => response.json())
      .then(data => {
        person.species = data.name
      })
      console.log(person)
      newArray.push(person);
    }
    console.log(newArray)
  })
}
getPeopleData();


const getPlanetData = (data) => {

}

const getVehicleData = (data) => {

}

export default getData;