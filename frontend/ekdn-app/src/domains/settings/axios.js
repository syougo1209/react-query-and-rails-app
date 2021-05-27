import axios from 'axios';

const ekdnAxios = axios.create({
  baseURL: `http://localhost:3000/api/v1/`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
});

export default ekdnAxios
