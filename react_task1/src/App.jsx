import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const updateCart = (newCart) => {
    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div>
      <Navbar
        cartCount={cart.length}
        toggleCartModal={() => setIsCartOpen(true)}
      />
      <Products onCartUpdate={updateCart} />
      {isCartOpen && (
        <CartModal
          cart={cart}
          removeFromCart={removeFromCart}
          closeModal={() => setIsCartOpen(false)}
        />
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
