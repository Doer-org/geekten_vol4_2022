import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'http://localhost:',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});
