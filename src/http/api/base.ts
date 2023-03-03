import axios from 'axios';

const baseApiUrl = 'https://pokeapi.co/api/v2/';

const api = axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
