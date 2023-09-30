import React, { useState } from 'react';

function CheckoutPage() {
  const [formData, setFormData] = useState({
    shippingAddress: '',
    billingAddress: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    paymentMethod: 'creditCard', // Default payment method
  });

  const[paymentStatus, setPaymentStatus]=useState(null);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    setFormData({
      ...formData,
      paymentMethod: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and payment simulation here
    console.log('Form data submitted:', formData);
  };

  const handleCheckout=()=>{
    // if(selectedPaymentMethod===''){
    //     alert('Please select a payment method');
    //     return;
    // }
    setTimeout(()=>{
        setPaymentStatus('Payment Successfull');
    },2000);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {paymentStatus?(
        <div>
            <p>{paymentStatus}</p>
            <p>Your order will be processed shortly</p>
        </div>
      ):(
      <form onSubmit={handleSubmit}>
        {/* Shipping Information */}
        <div className="form-group">
          <label htmlFor="shippingAddress">Shipping Address:</label>
          <input
            type="text"
            id="shippingAddress"
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Billing Information */}
        <div className="form-group">
          <label htmlFor="billingAddress">Billing Address:</label>
          <input
            type="text"
            id="billingAddress"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleInputChange}
          />
        </div>

        {/* Payment Method */}
        <div className="form-group">
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        {/* Credit Card Information */}
        {formData.paymentMethod === 'creditCard' && (
          <div className="credit-card-info">
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardExpiry">Expiration Date:</label>
              <input
                type="text"
                id="cardExpiry"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardCVV">CVV:</label>
              <input
                type="text"
                id="cardCVV"
                name="cardCVV"
                value={formData.cardCVV}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        )}

        <button type="submit" onClick={handleCheckout}>Submit Order</button>
      </form>
    )}
    </div>
  );
}

export default CheckoutPage;
