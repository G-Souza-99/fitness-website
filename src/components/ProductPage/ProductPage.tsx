// src/components/ProductPage/ProductPage.tsx

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import './ProductPage.scss';
import { CartContext } from '../../contexts/CartContext';
import { CartItem } from '../../types/CartItem';
import { toast } from 'react-toastify';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id); // Convert id to number
  const product = products.find((p) => p.id === productId);

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { addToCart } = cartContext;

  if (!product) {
    return <div className="product-page"><h2>Product not found.</h2></div>;
  }

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      ...product,
      quantity: 1,
    };
    addToCart(cartItem);
    toast.success(`${product.title} has been added to your cart!`);
  };

  return (
    <div className="product-page">
      <div className="product-details">
        <div className="image-section">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="info-section">
          <h1>{product.title}</h1>
          <p className="price">€{product.price.toFixed(2)}</p>
          <p className="description">{product.description}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
