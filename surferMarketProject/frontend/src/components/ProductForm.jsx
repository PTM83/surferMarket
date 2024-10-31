import { useCart } from '../components/cartContext';
import NavigationButtons from './NavigationButtons';
import { SurferFooter } from './SurferFooter';
import { SurferHeader } from './SurferHeader';

export const ProductForm = () => {
  const { cartItems, removeFromCart } = useCart(); // Add removeFromCart from context
  
  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <SurferHeader />
      <NavigationButtons />
      <h1>ProductForm {cartItems.length}</h1>
      <section className='shopping-cart-container'>
        {cartItems.length > 0 ? (
          <>
            <ul className="shopping-cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="shopping-cart-item">
                  <div className="item-info">
                    <img src={item.image_url} alt={item.name} className="item-image" />
                    <span className="item-name">Nombre del producto: {item.name}</span>
                    <span className="item-price">Precio del producto: ${parseFloat(item.price).toLocaleString('es-ES')}</span>
                    <button 
                      className="remove-button" 
                      onClick={() => removeFromCart(item.id)} // Remove item
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <h2>Total: ${totalPrice.toLocaleString('es-ES')}</h2>
          </>
        ) : (
          <h2>No hay elementos por mostrar</h2>
        )}
      </section>
      <SurferFooter />
    </>
  );
};
