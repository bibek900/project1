// ProductListingPage.js
import React from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { cartState, productListState, currentProductState } from './atoms';
import { Link } from 'react-router-dom';

function ProductListingPage() {
  const productList = useRecoilValue(productListState);
  const [cart, setCart] = useRecoilState(cartState);
  const setCurrentProduct = useSetRecoilState(currentProductState);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  return (
    <div>
      {productList.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListingPage;
