import React, { useState, useEffect } from "react";
import axios from "axios";

function Products({ onCartUpdate }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      onCartUpdate(updatedCart);
      alert("Item added to cart!");
    }
  };

  return (
    <div className="products-container">
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="products-grid">
          {data.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt="#" className="product-image" />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price}</p>
              <h6 className="product-description">{`Description:   ${product.description}`}</h6>
              <button
                className="add-to-cart"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
