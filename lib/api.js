import axios from 'axios';

// Your API URL
const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API Functions - change these to match YOUR actual routes
export const getProducts = () => api.get('/products');
export const getProductById = (id) => api.get(`/products/${id}`);
export const getCategories = () => api.get('/categories');

export default api;