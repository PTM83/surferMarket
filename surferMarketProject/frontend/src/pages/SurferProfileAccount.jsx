import { SurferFooter } from "../components/SurferFooter"
import { SurferFormAccount } from "../components/SurferFormAccount"
import { SurferHeader } from "../components/SurferHeader"
import NavigationButtons from "../components/NavigationButtons"; // Sin llaves porque es una exportación por defecto


export const SurferProfileAccount = () => {

  return (
    <>
    <SurferHeader />

  <NavigationButtons/>

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

        <SurferFormAccount/>

      </section>

      <SurferFooter />
    </>
  )
}
