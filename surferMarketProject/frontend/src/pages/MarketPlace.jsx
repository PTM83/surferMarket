
import { SurferCardProduct } from '../components/SurferCardProduct';
import { SurferFooter } from '../components/SurferFooter';
import { SurferHeader } from '../components/SurferHeader';
import NavigationButtons from '../components/NavigationButtons';
import { useNavigate } from 'react-router-dom'; 
import boton_vender from '../assets/icons/boton_vender.png';  

export const MarketPlace = () => {

  const navigate = useNavigate(); 

  const handleNavigateToForm = () => {
    navigate('/add-product'); 
  };

  return (
    <>
      <SurferHeader />
      <NavigationButtons />

      <div>
        <img 
          src={boton_vender} 
          alt="Botón Vender" 
          style={{ width: '200px', height: 'auto', cursor: 'pointer' }} 
          onClick={handleNavigateToForm} 
        />
      </div>

      <SurferCardProduct /> 

      <SurferFooter />
    </>
  );
};
