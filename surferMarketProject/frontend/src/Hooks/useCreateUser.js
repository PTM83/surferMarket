import { useState } from 'react';
import { fetchData } from '../service/apiService';

export const useCreateUser = () => {
  const [newUser, setNewUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createUser = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const endPoint = '/api/auth/register'; // ENDPOINT completa
      const options = {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const data = await fetchData(endPoint, options);
      setNewUser(data); // Guardar el usuario recién creado
      return data; // Devolver el nuevo usuario si se necesita en el componente
    } catch (err) {
      setError(err.message);
      console.error('Error en createUser:', err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { newUser, createUser, loading, error };
};
