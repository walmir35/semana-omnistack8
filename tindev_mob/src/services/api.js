import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.14.185.25:3333'
});

export default api;