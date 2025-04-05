import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: StaticImageData; 
  slug: string
  categoria: string
}

export interface CartProduct extends Product {
  quantity: number;
}
