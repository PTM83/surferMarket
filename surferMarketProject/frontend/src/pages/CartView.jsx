
import { SurferHeader } from '../components/SurferHeader';
import { SurferFooter } from '../components/SurferFooter';
import NavigationButton from '../components/NavigationButtons';
import './CartView.css'; 
import { SurferCardProduct } from '../components/SurferCardProduct';

const CartView = () => {
  
  return (
    <>
      <SurferHeader />

      <NavigationButton/>
      
      <SurferCardProduct />
      
      <SurferFooter />
    </>
  );
};

export default CartView;
