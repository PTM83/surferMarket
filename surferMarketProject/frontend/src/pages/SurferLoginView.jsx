import { SurferHeader } from '../components/SurferHeader'
import NavigationButtons from '../components/NavigationButtons'
import { SurferFooter } from '../components/SurferFooter'
import tableSurf from '../assets/icons/surfing-board.png'
import { Link } from 'react-router-dom'


export const SurferLoginView = () => {
  
  const profileFields = [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name', required: true },
    { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password',minLength: 8, required: true }
  ];


  return (
    <>
      <SurferHeader />

      <NavigationButtons/>

      <section className='profile-container'>

        <form action='/submit' method='POST' className="surfer-form">

          <img src={ tableSurf } alt='Logo' className='form-logo'></img>

          <h2>Enter your Surfer Data</h2>

          <p>Únete a nuestra comunidad de surfistas y empieza a explorar! 🏄‍♀️</p>

          {
            profileFields.map((field) => (
            <div key={field.id} className="div-form">
              <label htmlFor={field.id} className='label_form'>{field.label}:</label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                placeholder={field.placeholder || ''}
                minLength={field.minLength || undefined}
                required={field.required}
                className='input_form'
              />
            </div>
          ))
          }

          <Link to='/userProfile' className='form_direction'>Si no posees una cuenta haz clic acá</Link>

          <input type="submit" value="Submit" className="profile-button"/>
        </form>

      </section>


      <SurferFooter />
    </>
  )
}
