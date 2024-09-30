// src/components/ProductSection/ProductSection.tsx

import React, { useContext } from 'react';
import './ProductSection.scss';
import { CartContext } from '../../contexts/CartContext';
import { CartItem } from '../../types/CartItem';
import { Product } from '../../types/Product';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ProductSectionProps {
  product: Product;
}

const ProductSection: React.FC<ProductSectionProps> = ({ product }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { addToCart } = cartContext;

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      ...product,
      quantity: 1,
    };
    addToCart(cartItem);
    toast.success(`${product.title} has been added to your cart!`);
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="price">€{product.price.toFixed(2)}</p> {/* Format price */}
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
