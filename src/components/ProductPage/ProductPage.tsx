// src/components/ProductPage/ProductPage.tsx

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './ProductPage.scss';

const productData = [
  {
    id: 'product-1',
    name: 'Fitness Course 1',
    description: 'An amazing fitness course to get you in shape.',
    price: 49.99,
    image: '/assets/images/course1.jpg',
  },
  // Add more product data as needed
];

const ProductPage: React.FC = () => {
  const { productName } = useParams<{ productName: string }>();
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Loading...</div>;
  }

  const { addToCart } = cartContext;

  const product = productData.find(
    (p) => p.id === productName
  );

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="price">${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button className="cta-button" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
