import axios from 'axios';

const url = process.env.REACT_APP_LOCALHOST || 'http://localhost:3001';

const api = axios.create({
  baseURL: `${url}`,
});

const getAllAssisted = async () => {
  // const fetchRequest = await fetch(`${address}/assisted/getall`);
  const { data } = await api.get('/assisted/getall');
  return data;
};

const registerAssisted = async (object) => {
  const { data } = await api.post('/assisted/register', object);
  return data;
};

const registerAssistedComentary = async (object) => {
  const { data } = await api.post('/assisted/comentary/register', object);
  return data;
};

const registerProduct = async (object) => {
  const { data } = await api.post('/assisted/register', object);
  return data;
};

export { 
  getAllAssisted, 
  registerAssisted, 
  registerProduct, 
  registerAssistedComentary 
};
