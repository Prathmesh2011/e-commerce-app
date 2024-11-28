export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface CartItemType {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
  quantity: number;
}

export interface Notification {
  id: string;
  title: string;
  description: string;
  image: string;
  time: string;
}
