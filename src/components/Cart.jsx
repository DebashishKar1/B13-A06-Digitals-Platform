import { toast } from "react-toastify";

const Cart = ({ cart = [], removeFromCart, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.icon}</span>
              <span>{item.name}</span>
              <span>${item.price}</span>

              <button
                onClick={() => {
                  removeFromCart(item.id);
                  toast.error("Product Removed");
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total Price: ${total}</h3>

          <button
            onClick={() => {
              checkout();
              toast.info("Proceed to Checkout");
            }}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;