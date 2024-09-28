import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './Navigation.scss';
import logo from '../../assets/images/logo-letters.png';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const cartContext = useContext(CartContext);

  const totalQuantity = cartContext ? cartContext.cartItems.reduce((total, item) => total + item.quantity, 0) : 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${scrolling ? 'scrolled' : ''}`}>
      <div className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon="bars" />
      </div>

      <div className="nav-container">
        <div className="nav-left">
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
            <li><NavLink to="/store" className={({ isActive }) => (isActive ? 'active' : '')}>Store</NavLink></li>
          </ul>
        </div>
        <div className="nav-logo">
          <Link to="/"><img src={logo} alt="Luis Nicolau Fitness Logo" /></Link>
        </div>
        <div className="nav-right">
          <div className='wrapper'>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <li><NavLink to="/about-me" className={({ isActive }) => (isActive ? 'active' : '')}>About Me</NavLink></li>
              <li><NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink></li>
            </ul>
            
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <div className="nav-cart">
                <Link to="/mycart">
                  <FontAwesomeIcon icon="shopping-cart" />
                  {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
                </Link>
              </div>
              <ThemeToggle />
            </ul>
          </div>
        </div>
      </div>

      
    </nav>
  );
};

export default Navigation;
