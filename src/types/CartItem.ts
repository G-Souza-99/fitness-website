// src/types/CartItem.ts
import { Product } from './Product';

export interface CartItem extends Product {
  id: number;
  title: string;
  price: string;
  image: string;
  quantity: number;
  category: string;
}
