// src/components/CartPage/CartPage.tsx

import React, { useContext } from 'react';
import './CartPage.scss';
import { CartContext } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
import bannerImage from '../../assets/images/cart-banner.jpg'; // Replace with correct banner image path
import Banner from '../Banner/Banner'; // Import the Banner component

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
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <Helmet>
        <title>Your Cart - Luis Nicolau Fitness</title>
        <meta
          name="description"
          content="Review your selected items and proceed to checkout."
        />
      </Helmet>

      <Banner
        image={bannerImage}
        title="Your Cart"
        description="Review your selected items and proceed to checkout."
        onBack={handleGoBack}
      />

      <div className="cart-page">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button className="continue-shopping" onClick={() => navigate('/')}>
              <FontAwesomeIcon icon={faArrowLeft} /> Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-item-info">
                  <h2>{item.title}</h2>
                  <p className="price">€{item.price.toFixed(2)}</p>
                  <div className="quantity-control">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label={`Decrease quantity of ${item.title}`}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label={`Increase quantity of ${item.title}`}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-button"
                    aria-label={`Remove ${item.title} from cart`}
                  >
                    <FontAwesomeIcon icon="trash" /> Remove
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

      <Footer />
    </>
  );
};

export default CartPage;
