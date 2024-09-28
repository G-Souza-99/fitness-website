import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './Navigation.scss';
import logo from '../../assets/images/logo2.png';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartContext = useContext(CartContext);

  const totalQuantity = cartContext ? cartContext.cartItems.reduce((total, item) => total + item.quantity, 0) : 0;

  return (
    <nav className="navigation">
      <div className="nav-logo">
        <Link to="/"><img src={logo} alt="Luis Nicolau Fitness Logo" /></Link>
      </div>

      <div className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon="bars" />
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><NavLink to="/about-me" className={({ isActive }) => (isActive ? 'active' : '')}>About Me</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink></li>
        <li className="nav-cart">
          <Link to="/mycart"><FontAwesomeIcon icon="shopping-cart" />{totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}</Link>
        </li>
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  );
};

export default Navigation;
