import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Export individual functions for easier use
export const getProducts = (q = '') => {
  return api.get('/products', { params: q ? { q } : {} });
};

export const addProduct = (product) => {
  return api.post('/addproducts', product);
};

export default api;
