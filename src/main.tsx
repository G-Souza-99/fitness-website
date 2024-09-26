// In main.tsx or index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './contexts/CartContext';
import '@fortawesome/fontawesome-free/css/all.css'; 
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
