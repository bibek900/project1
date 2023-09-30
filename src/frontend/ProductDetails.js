// ProductDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import '../stylesheet/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams(); // Get the product ID from the route parameter
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Fetch the specific product using the product ID
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <div className="product-details-content">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}

export default ProductDetails;
