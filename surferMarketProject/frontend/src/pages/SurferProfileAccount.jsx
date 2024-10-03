import { SurferFooter } from "../components/SurferFooter"
import { SurferHeader } from "../components/SurferHeader"

import tableSurf from '../assets/icons/surfing-board.png'

export const SurferProfileAccount = () => {

  const formFields = [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name', required: true },
    { id: 'password', label: 'Password', type: 'password', minLength: 8, required: true },
    { id: 'confirmPassword', label: 'Confirm Password', type: 'password', minLength: 8, required: true },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'example@mail.com', required: true }
  ];

  return (
    <>
    <SurferHeader />

    <section className="surfer-profile-introduction">
      <h1>Bienvenido a nuestro marketplace de surf 🏄‍♀️</h1>
      <p>Lugar ideal para apasionados del surf como tú! 🌊 Aquí, 
        surfistas de todos los niveles pueden comprar y vender tablas, trajes, y todo tipo de accesorios relacionados 
        con el surf. Únete a nuestra comunidad de amantes del mar y las olas, y descubre productos únicos y de calidad 
        que te ayudarán a mejorar tu experiencia en el agua. Regístrate ahora para empezar a navegar por nuestra amplia 
        selección y conecta con otros surfistas que comparten tu pasión. ¡No esperes más y surfea la ola de oportunidades 
        que te ofrecemos! 🏄‍♂️🏄‍♀️
      </p>
    </section>
    
      <section className='profile-container'>

        <form action='/submit' method='POST' className="surfer-form">

        <img src={ tableSurf } alt='Logo' className='form-logo'></img>
        
        <h2>Enter your Surfer Data</h2>

        <p>Únete a nuestra comunidad de surfistas y empieza a explorar! 🏄‍♀️</p>

        {
          formFields.map((field) => (
          <div key={field.id} className="div-form">
            <label htmlFor={field.id}>{field.label}:</label>
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              placeholder={field.placeholder || ''}
              minLength={field.minLength || undefined}
              required={field.required}
            />
          </div>
        ))
        }

          <input type="submit" value="Submit" className="profile-button"/>
        </form>

      </section>

      <SurferFooter />
    </>
  )
}
