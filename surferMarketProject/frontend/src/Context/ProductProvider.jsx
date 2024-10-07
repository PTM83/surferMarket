
import React, { createContext, useEffect, useState } from "react";
import productData from "./products.json"; 

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (id, price, name, img) => {
    const productIndex = cart.findIndex(p => p.id === id);
    const product = { id, price, name, img, count: 1 };

    if (productIndex >= 0) {
      cart[productIndex].count++;
      setCart([...cart]);
    } else {
      setCart([...cart, product]);
    }
    console.log(cart);
  };

 
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  
  const totalItems = cart.reduce((acc, item) => acc + item.count, 0);
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <ProductContext.Provider 
      value={{ 
        products, 
        cart, 
        setProducts, 
        addToCart, 
        removeFromCart, 
        totalItems, 
        totalAmount 
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
