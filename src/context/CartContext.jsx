import { createContext, useState, useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      return false; // ইতিমধ্যে আছে
    }

    setCart((prevCart) => [...prevCart, product]);
    return true;
  };

  
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  
  const clearCart = () => {
    setCart([]);
  };


  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.price || 0), 0);
  }, [cart]);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalPrice,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};