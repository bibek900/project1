// ProductPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../stylesheet/Products.css';
import {useRecoilState} from 'recoil';
import { cartState } from './cartState';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useRecoilState(cartState);

 
  useEffect(() => {
    // Fetch products from the fakestoreapi
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart]
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
    <div className="product-page">
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={()=>addToCart(product)} >Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
