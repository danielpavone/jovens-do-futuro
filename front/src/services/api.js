import axios from 'axios';

const api = axios.create({
  baseURL: 'https://efuture-hackathon.herokuapp.com',
});

export default api;
