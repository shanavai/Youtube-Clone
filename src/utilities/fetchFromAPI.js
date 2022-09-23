import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'; 
const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'c9497320d0msh3b48d2092cfb2dcp17f3b4jsn190a2f264d93',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};