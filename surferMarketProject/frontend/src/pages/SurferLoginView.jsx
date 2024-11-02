import React, { useState } from 'react'; // Asegúrate de que React está importado si es necesario
import { SurferHeader } from '../components/SurferHeader';
import NavigationButtons from '../components/NavigationButtons';
import { SurferFooter } from '../components/SurferFooter';
import tableSurf from '../assets/icons/surfing-board.png';
import { Link, useNavigate } from 'react-router-dom'; // Asegúrate de que Link y useNavigate estén importados

export const SurferLoginView = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {
        navigate('/userProfile');
      } else {
        setError('Nombre de usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      setError('Error de conexión. Intenta de nuevo.');
    }
  };

  return (
    <>
      <SurferHeader />
      <NavigationButtons />

      <section className='profile-container'>
        <form onSubmit={handleSubmit} className="surfer-form">
          <img src={tableSurf} alt='Logo' className='form-logo' />

          <h2>Enter your Surfer Data</h2>
          <p>Únete a nuestra comunidad de surfistas y empieza a explorar! 🏄‍♀️</p>

          <div className="div-form">
            <label htmlFor="name" className='label_form'>Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className='input_form'
            />
          </div>

          <div className="div-form">
            <label htmlFor="password" className='label_form'>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              minLength={8}
              required
              className='input_form'
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit" className="profile-button">Submit</button>
        </form>

        <Link to='/userProfile' className='form_direction'>Si no posees una cuenta haz clic acá</Link>
      </section>

      <SurferFooter />
    </>
  );
};

export default SurferLoginView;
