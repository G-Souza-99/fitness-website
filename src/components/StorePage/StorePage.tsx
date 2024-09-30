// src/components/StorePage/StorePage.tsx

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import './StorePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import bannerImage from '../../assets/images/store-banner.jpg';
import { products } from '../../data/products'; // Import mock products data
import ProductSection from '../ProductSection/ProductSection';

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

      <div className="store-page">
        {/* Banner Section */}
        <div className="banner">
          <img src={bannerImage} alt="Store Banner" className="banner-img" />
          <div className="store-black-overlay"></div>
          <div className="banner-text">
            <div className="heading-with-arrow">
              <FontAwesomeIcon icon={faArrowLeft} onClick={handleGoBack} className="back-arrow" />
              <h1>Store</h1>
            </div>
            <p>Explore our selection of fitness products to help you reach your goals.</p>
          </div>
        </div>

        {/* Store Filter and Product List */}
        <div className="store-container">
          <aside className="store-filter">
            <h2>Categorias</h2>
            <ul>
              <li onClick={() => setSelectedCategory('All')}>All</li>
              <li onClick={() => setSelectedCategory('Planos de Treino')}>Planos de Treino</li>
              <li onClick={() => setSelectedCategory('Treinos Online')}>Treinos Online</li>
              <li onClick={() => setSelectedCategory('Equipamento de Treino')}>Equipamento de Treino</li>
              <li onClick={() => setSelectedCategory('Padle')}>Padle</li>
              <li onClick={() => setSelectedCategory('Vales Presente')}>Vales Presente</li>
            </ul>


            <h2>Preço</h2>
            <div className="price-filter">
              <label>
                Min: 
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  min="0"
                />
              </label>
              <label>
                Max: 
                <input
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
      </div>
    </>
  );
};

export default StorePage;
