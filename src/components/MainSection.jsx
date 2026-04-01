import { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";
import ToggleButtons from "./ToggleButtons";

const MainSection = ({ cart, setCart }) => {
  const [showProducts, setShowProducts] = useState(true);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const checkout = () => {
    setCart([]);
  };

  return (
    <div className="main-section">
      <ToggleButtons setShowProducts={setShowProducts} />

      {showProducts ? (
        <Products addToCart={addToCart} />
      ) : (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          checkout={checkout}
        />
      )}
    </div>
  );
};

export default MainSection;