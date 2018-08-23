const getPeopleData = (data) => {
  const unresolvedPeople = data.results.map( async person => {
    const responseHomeworld = await fetch(person.homeworld)
    const homeworld = await responseHomeworld.json()
    const responseSpecies = await fetch(person.species)
    const species = await responseSpecies.json();
    return { 
      name: person.name, 
      homeworld: homeworld.name, 
      population: homeworld.population,
      species: species.name
    };
  });

  return Promise.all(unresolvedPeople);
}

export default getPeopleData;