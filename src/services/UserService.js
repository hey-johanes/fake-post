import axios from 'axios';
import { USER_URL } from '../config/config';

export const getUserLogin = (username, password) => {
  return axios.get(`${USER_URL}?username=${username}&password=${password}`);
};
