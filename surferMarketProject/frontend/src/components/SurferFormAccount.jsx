
import tableSurf from '../assets/icons/surfing-board.png'

export const SurferFormAccount = () => {

  const formFields = [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name', required: true },
    { id: 'password', label: 'Password', type: 'password', minLength: 8, required: true },
    { id: 'confirmPassword', label: 'Confirm Password', type: 'password', minLength: 8, required: true },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'example@mail.com', required: true }
  ];

  return (
    <>
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
    </>
  )
}