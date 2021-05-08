import axios from 'axios';

const ekdnAxios = axios.create({
  baseURL: `http://localhost:3000/`
});

export default ekdnAxios
