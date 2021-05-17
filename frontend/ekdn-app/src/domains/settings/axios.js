import axios from 'axios';

const ekdnAxios = axios.create({
  baseURL: `http://localhost:3000/api/v1/`
});

export default ekdnAxios
