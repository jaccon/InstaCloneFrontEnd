import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:333/'
});

export default api;

