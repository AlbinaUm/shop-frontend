export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string | null;
}

export interface ProductMutation {
  category_id: string;
  title: string;
  description: string;
  price: string;
  image: File | null;
}

export interface Category {
  id: string;
  title: string;
  description: string;
}
