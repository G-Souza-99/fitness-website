// src/data/services.ts

export interface Service {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: 'Personal Training',
    slug: 'personal-training',
    description: 'Detailed description of Personal Training.',
    image: '/assets/images/personal-training.jpg',
  },
  // Add more services as needed
];
