// src/data/products.ts

import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';
// Import additional products as needed

import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    title: 'Fitness Gear',
    price: 20.0, // Changed from '€20,00' to 20.0
    image: product1,
    category: 'Equipamento de Treino',
  },
  {
    id: 2,
    title: 'Nutritional Supplements',
    price: 15.0, // Changed from '€15,00' to 15.0
    image: product2,
    category: 'Alimentação',
  },
  {
    id: 3,
    title: 'Workout Apparel',
    price: 30.0, // Changed from '€30,00' to 30.0
    image: product3,
    category: 'Equipamento de Treino',
  },
  // Add more products as needed
];
