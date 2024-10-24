/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import './StorePage.scss';
import bannerImage from '../../assets/images/store-banner.jpg';
import { products } from '../../data/products'; // Import mock products data
import ProductSection from '../ProductSection/ProductSection';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner'; // Import the Banner component

const StorePage: React.FC = () => {
  const navigate = useNavigate();
  
  // Add state for price range
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');


  const handleGoBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1); // Go back in the browser history
    } else {
      navigate('/'); // Redirect to home if no previous page
    }
  };

  // Function to filter products by price range
  const handlePriceFilter = () => {
    const filtered = products.filter((product) => {
      const productPrice = product.price;
      const withinPrice = productPrice >= minPrice && productPrice <= maxPrice;
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return withinPrice && matchesCategory;
    });
    setFilteredProducts(filtered);
  };
  

  return (
    <>
      <Helmet>
        <title>Store - Luis Nicolau Fitness</title>
        <meta
          name="description"
          content="Explore the store page for Luis Nicolau Fitness. Find the best products for your fitness journey."
        />
      </Helmet>

      <Banner
        image={bannerImage}
        title="Store"
        description="Explore our selection of fitness products to help you reach your goals."
        onBack={handleGoBack}
        className="store-banner" // Add a Store-specific class for additional styling
      />

      {/* Store Filter and Product List */}
      <div className="store-container">
        <aside className="store-filter">
          <h2>Categorias</h2>
          <ul>
            <li
              onClick={() => setSelectedCategory('All')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedCategory('All');
                }
              }}
            >
              All
            </li>
            <li
              onClick={() => setSelectedCategory('Planos de Treino')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedCategory('Planos de Treino');
                }
              }}
            >
              Planos de Treino
            </li>
            <li
              onClick={() => setSelectedCategory('Treinos Online')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedCategory('Treinos Online');
                }
              }}
            >
              Treinos Online
            </li>
            <li
              onClick={() => setSelectedCategory('Equipamento de Treino')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedCategory('Equipamento de Treino');
                }
              }}
            >
              Equipamento de Treino
            </li>
            <li
              onClick={() => setSelectedCategory('Padle')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedCategory('Padle');
                }
              }}
            >
              Padle
            </li>
            <li
              onClick={() => setSelectedCategory('Vales Presente')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedCategory('Vales Presente');
                }
              }}
            >
              Vales Presente
            </li>
          </ul>


          <h2>Preço</h2>
          <div className="price-filter">
            <label htmlFor="min-price">
              Min: 
              <input
                id="min-price"
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                min="0"
              />
            </label>
            <label htmlFor="max-price">
              Max: 
              <input
                id="max-price"
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                min="0"
              />
            </label>
            <button onClick={handlePriceFilter}>Filtrar</button>
          </div>
        </aside>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductSection
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StorePage;
