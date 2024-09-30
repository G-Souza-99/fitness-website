// src/types/Product.ts

export interface Product {
  id: number;
  title: string;
  price: number; // Changed from string to number
  image: string;
  category: string;
}
