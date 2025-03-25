import React from "react";

function Navbar({ cartCount, toggleCartModal }) {
  return (
    <nav className="navbar">
      <h1 className="logo">🛍️ Shopping App</h1>
      <button className="cart-btn" onClick={toggleCartModal}>
        🛒 Cart <span className="cart-count">{cartCount}</span>
      </button>
    </nav>
  );
}

export default Navbar;
