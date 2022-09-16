import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'https://dita-server.onrender.com',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});
