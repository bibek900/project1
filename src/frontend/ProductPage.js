// ProductPage.js
import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from './cartState';

function ProductPage({ product }) {
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = () => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If it's already in the cart, increase the quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If it's not in the cart, add it with a quantity of 1
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductPage;
