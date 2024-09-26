import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';

import ProductPage from './components/ProductPage/ProductPage';
import ServicePage from './components/ServicePage/ServicePage';
import CartPage from './components/CartPage/CartPage';
import AboutMe from './components/AboutMe/AboutMe';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import Navigation from './components/Navigation/Navigation';


const HomePage = lazy(() => import('./components/HomePage/HomePage'));

function App() {

  useEffect(() => {
    // Retrieve the saved theme from localStorage, or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

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
