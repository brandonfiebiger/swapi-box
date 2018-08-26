import mockPeopleData from '../mockPeopleData'
// import { getSingleSpecies } from '../apiCalls';

export const getHomeworld = jest.fn()
  .mockImplementationOnce(() => ({
      "name": "Stewjon",
      "rotation_period": "unknown",
      "orbital_period": "unknown",
      "diameter": "0",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grass",
      "surface_water": "unknown",
      "population": "unknown",
      "residents": [
          "https://swapi.co/api/people/10/"
      ],
      "films": [],
      "created": "2014-12-10T16:16:26.566000Z",
      "edited": "2014-12-20T20:58:18.452000Z",
      "url": "https://swapi.co/api/planets/20/"
  }))

  export const getSingleSpecies = jest.fn()
    .mockImplementationOnce(() => ({
        "name": "Droid",
        "classification": "artificial",
        "designation": "sentient",
        "average_height": "n/a",
        "skin_colors": "n/a",
        "hair_colors": "n/a",
        "eye_colors": "n/a",
        "average_lifespan": "indefinite",
        "homeworld": null,
        "language": "n/a",
        "people": [
            "https://swapi.co/api/people/2/",
            "https://swapi.co/api/people/3/",
            "https://swapi.co/api/people/8/",
            "https://swapi.co/api/people/23/",
            "https://swapi.co/api/people/87/"
        ],
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/7/",
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/"
        ],
        "created": "2014-12-10T15:16:16.259000Z",
        "edited": "2015-04-17T06:59:43.869528Z",
        "url": "https://swapi.co/api/species/2/"
    }
    ))
    
    export const getResident = jest.fn()
      .mockImplementation(() => ({
          "name": "Leia Organa",
          "height": "150",
          "mass": "49",
          "hair_color": "brown",
          "skin_color": "light",
          "eye_color": "brown",
          "birth_year": "19BBY",
          "gender": "female",
          "homeworld": "https://swapi.co/api/planets/2/",
          "films": [
              "https://swapi.co/api/films/2/",
              "https://swapi.co/api/films/6/",
              "https://swapi.co/api/films/3/",
              "https://swapi.co/api/films/1/",
              "https://swapi.co/api/films/7/"
          ],
          "species": [
              "https://swapi.co/api/species/1/"
          ],
          "vehicles": [
              "https://swapi.co/api/vehicles/30/"
          ],
          "starships": [],
          "created": "2014-12-10T15:20:09.791000Z",
          "edited": "2014-12-20T21:17:50.315000Z",
          "url": "https://swapi.co/api/people/5/"
      }))
      