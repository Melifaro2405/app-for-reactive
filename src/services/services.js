import axios from "axios";

const API_BASE = 'https://jsonplaceholder.typicode.com';

export const API_ROUTE = {
  USERS: '/users/',
  POSTS: '/posts'
};

export const getResource = (url) => {
  return axios.get(`${API_BASE}${url}`);
};

export const postResource = (url, data) => {
  return axios.post(`${API_BASE}${url}`, data);
};
