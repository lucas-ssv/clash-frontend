import axios from 'axios';

const api = axios.create({
    baseURL: 'http://backend.clash.ssvieira.com/'
});

export default api;