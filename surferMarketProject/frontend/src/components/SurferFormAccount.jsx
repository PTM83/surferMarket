import { useCreateUser } from '../hooks/useCreateUser';
import tableSurf from '../assets/icons/surfing-board.png';
import { useState } from 'react';

export const SurferFormAccount = () => {
  const { createUser, newUser, loading, error } = useCreateUser();

  // Estado inicial del formulario
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
    role: 'seller',
    profile_image: 'https://example.com/vendedor5.jpg'
  });

  // Definición de los campos del formulario
  const formFields = [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name', required: true },
    { id: 'password', label: 'Password', type: 'password', minLength: 8, required: true }, // Verifica que el id sea 'password'
    { id: 'confirmPassword', label: 'Confirm Password', type: 'password', minLength: 8, required: true },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'example@mail.com', required: true },
  ];

  // Manejo de cambios en el formulario
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return alert('Las contraseñas no coinciden');
    }
    try {
      console.log('Datos enviados:', formData);
      await createUser({
        name: formData.name,
        email: formData.email,
        password: formData.password, // Asegúrate de enviar el campo 'password' y no 'password_hash'
        role: formData.role,
        profile_image: formData.profile_image
      });
      alert('Usuario creado con éxito');
    } catch (err) {
      alert('Hubo un problema al crear el usuario');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="surfer-form">
        <img src={tableSurf} alt="Logo" className="form-logo" />
        <h2>Enter your Surfer Data</h2>
        <p>Únete a nuestra comunidad de surfistas y empieza a explorar! 🏄‍♀️</p>
        {formFields.map((field) => (
          <div key={field.id} className="div-form">
            <label htmlFor={field.id}>{field.label}:</label>
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              placeholder={field.placeholder || ''}
              minLength={field.minLength || undefined}
              required={field.required}
              value={formData[field.id] || ''} // Asegúrate de que el valor esté presente
              onChange={handleInputChange}
            />
          </div>
        ))}
        <input type="submit" value="Submit" className="profile-button" disabled={loading} />
        {error && <p>Error al crear el usuario: {error}</p>}
        {newUser && <p>Usuario creado: {newUser.name}</p>}
      </form>
    </>
  );
};
