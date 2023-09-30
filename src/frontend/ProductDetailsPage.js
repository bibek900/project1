// ProductDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { currentProductState } from './atoms';

function ProductDetailsPage() {
  const { productId } = useParams();
  const [currentProduct, setCurrentProduct] = useRecoilState(currentProductState);

  // Fetch product details based on productId and update currentProduct

  return (
    <div>
      {currentProduct && (
        <div>
          <h2>{currentProduct.name}</h2>
          <p>Price: ${currentProduct.price}</p>
          {/* Other product details */}
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
