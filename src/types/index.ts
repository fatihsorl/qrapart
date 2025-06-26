export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  note?: string;
}

export interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
}

export interface Order {
  items: CartItem[];
  total: number;
  timestamp: string;
  roomNumber?: string;
  tableNumber?: string;
}
