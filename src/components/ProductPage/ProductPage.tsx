// src/components/ProductPage/ProductPage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import ProductSection from '../ProductSection/ProductSection';
import './ProductPage.scss';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id); // Convert id to number
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-page">
      <ProductSection product={product} />
    </div>
  );
};

export default ProductPage;
