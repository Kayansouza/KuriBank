// src/services/api.js
import axios from 'axios';

async function fetchProducts() {
  try {
    const response = await axios.get('/api/products');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
}

export default fetchProducts;
