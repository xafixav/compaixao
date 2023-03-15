import axios from 'axios';

const url = process.env.REACT_APP_LOCALHOST || 'http://localhost:3001';

console.log(url);

const api = axios.create({
  baseURL: `${url}`,
});

const getAll = async (endpoint) => {
  // const fetchRequest = await fetch(`${address}/assisted/getall`);
  const { data } = await api.get(endpoint);
  return data;
};

const register = async (endpoint, object) => {
  const { data } = await api.post(endpoint, object);
  return data;
};

const update = async (endpoint, object) => {
  const { data } = await api.post(endpoint, object);
  return data;
};

export { 
  getAll, 
  register,
  update,
};
