// src/pages/UserProfile.jsx

import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Llamada a la API para obtener los datos del perfil
    fetch('/api/auth/profile')
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error al cargar datos del perfil:', error));
  }, []);

  if (!userData) {
    return <p>Cargando datos del perfil...</p>;
  }

  return (
    <div className="profile-section">
      <h1>Perfil de {userData.name}</h1>
      
      <h2>Mis Publicaciones</h2>
      <ul>
        {userData.publishedBoards.map((board) => (
          <li key={board.id}>
            {board.name} - {board.category} - Precio: ${board.price}
          </li>
        ))}
      </ul>

      <h2>Mis Ventas</h2>
      <ul>
        {userData.soldBoards.map((board) => (
          <li key={board.id}>
            {board.name} - {board.category} - Vendido a: {board.buyer}
          </li>
        ))}
      </ul>

      <h2>Mis Compras</h2>
      <ul>
        {userData.purchasedBoards.map((board) => (
          <li key={board.id}>
            {board.name} - {board.category} - Precio de compra: ${board.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
