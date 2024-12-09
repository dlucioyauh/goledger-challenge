import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'http://ec2-54-91-215-149.compute-1.amazonaws.com/api/query/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('psAdmin:goledger'),
  }
});

export default axiosConfig;
