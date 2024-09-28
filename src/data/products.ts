// src/data/products.ts

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Fitness Course 1',
    slug: 'fitness-course-1',
    description: 'Detailed description of Fitness Course 1.',
    price: 99.99,
    image: '/assets/images/course1.jpg',
  },
  // Add more products as needed
];
