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
    alert('Error fetching initial data');
  }
}

export const getHomeworld = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch(error) {
    throw new Error('failed to fetch');
  }
};

export const getSingleSpecies = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch(error) {
    throw new Error('failed to fetch');
  }
};

export const getResident = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch(error) {
    throw new Error('failed to fetch');
  }
};