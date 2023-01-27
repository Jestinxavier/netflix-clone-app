import axios from 'axios'
import { baseURL } from './const/const';
const instance = axios.create({
    baseURL: baseURL,
  });
  export default instance