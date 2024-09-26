import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartItem } from '../../types/CartItem';
import { Helmet } from 'react-helmet';

const CartPage: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Loading...</div>;
  }

  const { cartItems, removeFromCart } = cartContext;

  return (
    <>
      <Helmet>
        <title>My Cart - Complete Purchase</title>
        <meta name="My Cart" content="My Cart page." />
      </Helmet> 
      
      <div className="cart-page">
      <h1>My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item: CartItem) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
    </>
    
  );
};

export default CartPage;
