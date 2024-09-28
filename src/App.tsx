// src/App.tsx

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const AboutMe = lazy(() => import('./components/AboutMe/AboutMe'));
const ProductPage = lazy(() => import('./components/ProductPage/ProductPage'));
const ServicePage = lazy(() => import('./components/ServicePage/ServicePage'));
const CartPage = lazy(() => import('./components/CartPage/CartPage'));
const CheckoutPage = lazy(() => import('./components/CheckoutPage/CheckoutPage'));

function App() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* About Me Page */}
          <Route path="/about-me" element={<AboutMe />} />

          {/* Product Pages */}
          <Route path="/product/:productName" element={<ProductPage />} />
          <Route path="/product" element={<Navigate to="/" />} />

          {/* Service Pages */}
          <Route path="/service/:serviceName" element={<ServicePage />} />
          <Route path="/service" element={<Navigate to="/" />} />

          {/* Cart Page */}
          <Route path="/mycart" element={<CartPage />} />

          {/* Checkout Page */}
          <Route path="/checkout" element={<CheckoutPage />} />

          {/* Redirect unknown routes to home or a 404 page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
