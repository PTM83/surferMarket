import { useEffect, useState } from 'react';
import { fetchData } from '../service/apiService'; // Verifica que la ruta sea correcta

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() { // Corrige "loadProducs" a "loadProducts"
      try {
        const endPoint = '/api/products';
        const data = await fetchData(endPoint);
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return { products, loading, error };
}
