import axios from 'axios';
import { POST_URL } from '../config/config';

export const getDatasById = (id) => {
  return axios.get(`${POST_URL}?userId=${id}`);
};

export const getAllData = () => {
  return axios.get(POST_URL);
};

export const deleteDataById = (id) => {
  return axios.delete(`${POST_URL}/${id}`);
};

export const editDataById = (id, data) => {
  return axios.patch(`${POST_URL}/${id}`, data);
};

export const updateLikeData = (id, likes) => {
  return axios.patch(`${POST_URL}/${id}`, likes);
};
