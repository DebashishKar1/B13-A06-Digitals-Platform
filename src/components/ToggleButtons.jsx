const ToggleButtons = ({ setShowProducts }) => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <button onClick={() => setShowProducts(true)}>Products</button>
      <button onClick={() => setShowProducts(false)}>Cart</button>
    </div>
  );
};

export default ToggleButtons;