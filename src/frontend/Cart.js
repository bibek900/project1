

// // Cart.js
// import React from 'react';
// import { useRecoilState } from 'recoil';
// import { cartState } from './cartState';
// import '../stylesheet/cart.css'; // Import your CSS file for styling

// function Cart() {
//   const [cart, setCart] = useRecoilState(cartState);

//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//   };

//   return (
//     <div className="cart-container">
//       <h2>Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="product-grid">
//           {cart.map((item) => (
//             <div className="product-card" key={item.id}>
//               <img src={item.image} alt={item.name} className="product-image" />
//               <div className="product-details">
//                 <h3 className="product-title">{item.name}</h3>
//                 <p className="product-price">${item.price}</p>
//                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;

import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from './cartState';
import { Link } from 'react-router-dom';
import '../stylesheet/cart.css'; // Import your CSS file for styling

function Cart() {
  const [cart, setCart] = useRecoilState(cartState);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const totalCartValue = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const checkout=()=>{
    setCart([]);
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="product-grid">
          {cart.map((item) => (
            <div className="product-card" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="product-image"
              />
              <div className="product-details">
                <h3 className="product-title">{item.name}</h3>
                <p className="product-price">${item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span className="product-quantity">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart-footer">
          <p>Total Cart Value: ${totalCartValue.toFixed(2)}</p>
          <button className="checkout-button" onClick={checkout}>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;

