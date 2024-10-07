
import { SurferHeader } from '../components/SurferHeader';
import { SurferFooter } from '../components/SurferFooter';
import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductProvider';
import NavigationButton from '../components/NavigationButtons';
import './CartView.css'; 

const CartView = () => {
  const { cart, removeFromCart, totalItems, totalAmount } = useContext(ProductContext); 

  return (
    <>
      <SurferHeader />
      <NavigationButton/>

      <section className='cart-container'>
        <h1 className='cart-header'>Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className='product-list'>
            {cart.map((item, index) => (
              <li key={index} className='product-item'>
                <span>{item.name} - {item.count} x ${item.price}</span>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
        <div className='total-info'>
          <h2>Total de productos: {totalItems}</h2>
          <h2>Monto total: ${totalAmount.toFixed(2)}</h2>
          <button className='pay-button' onClick={() => alert('Proceso de pago iniciado.')}>Pagar</button>
        </div>
      </section>
      <SurferFooter />
    </>
  );
};

export default CartView;
