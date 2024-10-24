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
    price: 20.0,
    image: product1,
    category: 'Equipamento de Treino',
    description: 'High-quality fitness gear to help you achieve your workout goals.',
  },
  {
    id: 2,
    title: 'Nutritional Supplements',
    price: 15.0,
    image: product2,
    category: 'Alimentação',
    description: 'Premium nutritional supplements to support your fitness journey.',
  },
  {
    id: 3,
    title: 'Workout Apparel',
    price: 30.0,
    image: product3,
    category: 'Equipamento de Treino',
    description: 'Comfortable and stylish workout apparel for all your training needs.',
  },
  {
    id: 4,
    title: 'gggggggg',
    price: 255.0,
    image: product3,
    category: 'Equipamento de Treino',
    description: 'High-quality fitness gear to help you achieve your workout goals.',
  },
  {
    id: 5,
    title: 'fffffffffffff',
    price: 5.0,
    image: product2,
    category: 'Alimentação',
    description: 'Premium nutritional supplements to support your fitness journey.',
  },
  {
    id: 6,
    title: 'Wwwwwwwwwwwww',
    price: 303.0,
    image: product1,
    category: 'Equipamento de Treino',
    description: 'Comfortable and stylish workout apparel for all your training needs.',
  },
  // Add more products as needed with descriptions
];
