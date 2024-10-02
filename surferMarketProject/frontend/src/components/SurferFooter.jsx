import linkedin from '../assets/icons/linkedin.png'
import instagram from '../assets/icons/instagram.png'
import tiktok from '../assets/icons/tiktok.png'
import { useState } from 'react'

export const SurferFooter = () => {

  const [useMail, setUseMail] = useState('')

  const handleMailChange = (e) => {
    setUseMail(e.target.value);
  }

  return (
    <>
      <footer className="footer-contaier">
        <section className='footer-rightSize'>
          <li className="footer-list">
              <ul>Novedades</ul>
              <ul>Descubrir</ul>
              <ul>Ofertas</ul>
              <ul>Ayuda</ul>
          </li>
        </section>

        <section className='footer-middle'>

          <span>No quedes fuera de la ola deja tu email</span>

          <input 
          type="email" 
          placeholder="Put your email address..." 
          value={useMail} 
          onChange={handleMailChange} 
          className="mail-input"
          >
          </input>

          <button> send </button>

        </section>

        <section className='footer-leftSize'>
          <li className="footer-list">
              <img src={ linkedin } alt="linkedin" className="social-media-logo"></img>
              <img src={ instagram } alt="instagram" className="social-media-logo"></img>
              <img src={ tiktok } alt="tiktok" className="social-media-logo"></img>
          </li>
        </section>

      </footer>
    </>
  )
}
