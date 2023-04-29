import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localorder.link:5000',
});

export default api;
