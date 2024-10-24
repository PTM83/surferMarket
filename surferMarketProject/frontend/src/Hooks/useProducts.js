
import { useEffect, useState } from 'react'
import { fetchProducts } from '../service/apiService';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducs() {
      try {
        const endPoint = '/api/products'
        const data = await fetchProducts(endPoint);
        setProducts(data);
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadProducs()
  }, [])

  return { products, loading, error }
}
