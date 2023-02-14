import axios from 'axios';

const url = process.env.REACT_APP_LOCALHOST || 'http://localhost:3001';

const api = axios.create({
  baseURL: `${url}`,
});

const getAllAssisted = async () => {
    // const fetchRequest = await fetch(`${address}/assisted/getall`);
    const { data } = await api.get('/assisted/getall');
    return data;
}

const registerAssisted = async (newAssisted) => {
    const { data } = await api.post('/assisted/register', newAssisted);
    return data;
}

export { getAllAssisted, registerAssisted }