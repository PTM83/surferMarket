import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { addToCart, getCartItems, removeFromCart } from '../service/cartService';

// Create a context for the cart

const CartContext = createContext();

// CartProvider component to wrap the app and provide cart stage globally
export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {

const [cartItems, setCartItems] = useState(getCartItems() || [])

  const handleAddToCart = (product) => {
    const updateCart = addToCart(product)
    setCartItems([...updateCart])
  }

  const handleRemoveFromCart = (productId) => {
    const updateCart = removeFromCart(productId)
    setCartItems([...updateCart])
  }

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart, handleRemoveFromCart }}>
      { children }
    </CartContext.Provider>
  )
}

// Add PropTypes validation for the children prop
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
