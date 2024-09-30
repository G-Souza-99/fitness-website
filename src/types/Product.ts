// src/types/Product.ts

export interface Product {
  id: number;
  title: string;
  price: number; // Ensured as number
  image: string;
  category: string;
  description: string; // New field added
}
