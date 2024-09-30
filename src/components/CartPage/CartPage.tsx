// src/components/CartPage/CartPage.tsx

import React, { useContext } from 'react';
import './CartPage.scss';
import { CartContext } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CartPage: React.FC = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { cartItems, removeFromCart, updateQuantity } = cartContext;

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout!');
    // Implement checkout functionality here
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const numericPrice = parseFloat(item.price.replace('€', '').replace(',', '.'));
        return total + numericPrice * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-page">
      <header className="cart-header">
        <button onClick={handleGoBack} className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
        <h1>Your Cart</h1>
      </header>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-info">
                <h2>{item.title}</h2>
                <p className="price">€{item.price}</p>
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-button">
                  <FontAwesomeIcon icon={faTrash} /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h2>Total: €{calculateTotal()}</h2>
          <button onClick={handleCheckout} className="checkout-button">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
