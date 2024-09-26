import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.jpg';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartContext = useContext(CartContext);

  const totalPrice = cartContext
    ? cartContext.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;

  return (
    <nav className="navigation">
      <div className="nav-logo">
        <Link to="/"><img src={logo} alt="Luis Nicolau Fitness Logo" /></Link>
      </div>

      <div className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fas fa-bars"></i>
      </div>


      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><NavLink to="/about-me" className={({ isActive }) => (isActive ? 'active' : '')}> About Me</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}> Services</NavLink></li>
        <li className="nav-cart">
          <Link to="/mycart"><i className="fas fa-shopping-cart"></i><span>${totalPrice.toFixed(2)}</span></Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>

    </nav>
  );
};

export default Navigation;
