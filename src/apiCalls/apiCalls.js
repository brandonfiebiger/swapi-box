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
    alert(error.message);
  }
}

export const getSpecies = async (url) => {
  try {
    const response = await fetch(url)
    return await response.json();
  } catch(error) {
    alert(error.message);
  }
}

export const getResidents = async (url) => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch(error) {
    alert(error.message);
  }
}