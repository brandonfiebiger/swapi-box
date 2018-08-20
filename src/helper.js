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

}

const getPlanetData = (data) => {

}

const getVehicleData = (data) => {

}

export default getData;