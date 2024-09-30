import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.scss';
import './fontAwsome';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <CartProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CartProvider>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root');
}
