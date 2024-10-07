import { Link } from 'react-router-dom';

const NavigationButtons = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <Link to="/MarketPlace">
        <button style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}>TIENDA</button>
      </Link>
      <Link to="/">
        <button style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}>NOTICIAS</button>
      </Link>
      <Link to="/userProfile">
        <button style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}>REGISTRARSE</button>
      </Link>
    </div>
  );
};

export default NavigationButtons; 
