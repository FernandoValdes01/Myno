import manzanas from "@/assets/manzanas.png";
import cocacola from "@/assets/cocacola.png";
import { Product } from "@/types/products";

export const recommendations: Product[] = [
  { id: 1, name: "50x Manzanas", price: 40, image: manzanas, slug: "50x-manzanas", categoria: "Frutas" },
  { id: 2, name: "50x Coca Cola", price: 50, image: cocacola, slug: "50x-coca-cola", categoria: "Bebidas" },
  { id: 3, name: "100x Manzanas", price: 70, image: manzanas, slug: "100x-manzanas", categoria: "Frutas" },
  { id: 4, name: "100x Coca Cola", price: 80, image: cocacola, slug: "100x-coca-cola", categoria: "Bebidas" },
];