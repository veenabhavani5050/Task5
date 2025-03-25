import React from "react";

function CartModal({ cart, removeFromCart, closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-img" />
              <div className="cart-details">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
        <button className="close-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
