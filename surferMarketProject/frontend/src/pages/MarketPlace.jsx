
import { SurferCardProduct } from '../components/SurferCardProduct';
import { SurferFooter } from '../components/SurferFooter';
import { SurferHeader } from '../components/SurferHeader';
import NavigationButtons from '../components/NavigationButtons';
import { useContext } from 'react';
import { ProductContext } from '../Context/ProductProvider'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import boton_vender from '../assets/icons/boton_vender.png';  

export const MarketPlace = () => {
  const { addToCart } = useContext(ProductContext); 
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

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

      <SurferCardProduct products={products} addToCart={addToCart} /> 

      <SurferFooter />
    </>
  );
};
