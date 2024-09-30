// src/components/CheckoutPage/CheckoutPage.tsx

import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './CheckoutPage.scss';

const CheckoutPage: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Loading...</div>;
  }

  const { cartItems } = cartContext;

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="order-summary">
        <h2>Order Summary</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.title} x {item.quantity}</span> {/* Changed 'name' to 'title' */}
                <span>€{(item.price * item.quantity).toFixed(2)}</span> {/* Ensure price is number */}
              </li>
            ))}
          </ul>
        )}
        <div className="total">
          <span>Total:</span>
          <span>€{totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className="payment-details">
        <h2>Payment Details</h2>
        <p>Payment integration coming soon.</p>
        {/* Placeholder for payment form */}
      </div>
    </div>
  );
};

export default CheckoutPage;
