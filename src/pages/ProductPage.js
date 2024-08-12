
import React, { useEffect, useState } from 'react';
import fetchProducts from '../services/api.js';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError('Erro ao carregar produtos');
      }
    };

    loadProducts();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;
