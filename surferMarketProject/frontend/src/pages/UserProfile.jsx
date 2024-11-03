import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Asegúrate de que el token esté almacenado
  
    fetch('/api/auth/profile', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al obtener datos del perfil');
        }
        return res.json();
      })
      .then((data) => setUserData(data))
      .catch((error) => {
        console.error('Error al cargar datos del perfil:', error);
        setError('Hubo un problema al cargar tu perfil.');
      });
  }, []);
  

  if (error) {
    return <p>{error}</p>;
  }

  if (!userData) {
    return <p>Cargando datos del perfil...</p>;
  }

  return (
    <div className="profile-section">
      <h1>Perfil de {userData.name}</h1>

      <h2>Mis Publicaciones</h2>
      <ul>
        {userData.publishedBoards && userData.publishedBoards.length > 0 ? (
          userData.publishedBoards.map((board) => (
            <li key={board.id}>
              {board.name} - {board.category} - Precio: ${board.price}
            </li>
          ))
        ) : (
          <p>No tienes publicaciones.</p>
        )}
      </ul>

      <h2>Mis Ventas</h2>
      <ul>
        {userData.soldBoards && userData.soldBoards.length > 0 ? (
          userData.soldBoards.map((board) => (
            <li key={board.id}>
              {board.name} - {board.category} - Vendido a: {board.buyer}
            </li>
          ))
        ) : (
          <p>No tienes ventas.</p>
        )}
      </ul>

      <h2>Mis Compras</h2>
      <ul>
        {userData.purchasedBoards && userData.purchasedBoards.length > 0 ? (
          userData.purchasedBoards.map((board) => (
            <li key={board.id}>
              {board.name} - {board.category} - Precio de compra: ${board.price}
            </li>
          ))
        ) : (
          <p>No tienes compras.</p>
        )}
      </ul>
    </div>
  );
};

export default UserProfile;
