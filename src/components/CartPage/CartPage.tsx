// src/components/CartPage/CartPage.tsx

import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartItem } from '../../types/CartItem';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './CartPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartPage: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Loading...</div>;
  }

  const { cartItems, removeFromCart, updateQuantity } = cartContext;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Helmet>
        <title>My Cart - Complete Purchase</title>
        <meta name="description" content="My Cart page." />
      </Helmet>

      <div className="cart-page">
        <h1>My Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item: CartItem) => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="item-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                      <FontAwesomeIcon icon="minus" />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <FontAwesomeIcon icon="plus" />
                    </button>
                    <button onClick={() => removeFromCart(item.id)}>
                      <FontAwesomeIcon icon="trash" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <p>Total: ${totalPrice.toFixed(2)}</p>
              <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
