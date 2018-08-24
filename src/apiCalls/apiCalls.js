import cleanData from '../helper';

export const fetchData = async (category) => {
  let url = `https://swapi.co/api/${category}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const cleanedData = await cleanData(data, category);
    return cleanedData;
  } 
  catch(error) {
    alert(error.message);
  }
}

export const getHomeworld = async (url) => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch(error) {
    alert('Was unable to get homeworld data...');
  }
}

export const getSingleSpecies = async (url) => {
  try {
    const response = await fetch(url)
    return await response.json();
  } catch(error) {
    alert('Was unable to get species data...');
  }
}

export const getResident = async (url) => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch(error) {
    alert('Was unable to get residents data...');
  }
}