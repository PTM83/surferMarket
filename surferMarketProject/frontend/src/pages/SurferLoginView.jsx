import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/authContext';
import { SurferHeader } from './SurferHeader';
import NavigationButtons from './NavigationButtons';
import { SurferFooter } from './SurferFooter';
import tableSurf from '../assets/icons/surfing-board.png';

export const SurferLoginView = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate('/userProfile');
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
            <input type="text" id="name" name="name" placeholder="Enter your name" required className='input_form' />
          </div>
          <div className="div-form">
            <label htmlFor="password" className='label_form'>Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" minLength="8" required className='input_form' />
          </div>
          <button type="submit" className="profile-button">Submit</button>
        </form>
      </section>
      <SurferFooter />
    </>
  );
};
