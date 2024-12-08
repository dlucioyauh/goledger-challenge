import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.exemplo.com', // Substitua com a URL da API
  headers: {
    'Authorization': 'Basic ' + btoa('psAdmin' + ':' + 'goledger')
  }
});

export default axiosInstance;
