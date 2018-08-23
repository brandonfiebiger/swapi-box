const getPlanetData = (data) => {
  const unresolvedPlanets = data.results.map(async planet => {
    const unresolvedResidents = await planet.residents.map(async resident => {
      const response = await fetch(resident)
      const residentInfo = await response.json()
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

export default getPlanetData;