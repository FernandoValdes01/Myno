import manzanas from "@/assets/manzanas.png";
import cocacola from "@/assets/cocacola.png";
import pepsi from "@/assets/pepsi.png";
import lechugas from "@/assets/lechugas.png";
import { Product } from "@/types/products";

export const recommendations: Product[] = [
  { id: 1, name: "50x Manzanas", price: 40, image: manzanas, slug: "50x-manzanas", categoria: "Frutas" },
  { id: 2, name: "50x Pepsi", price: 50, image: pepsi, slug: "50x-pepsi", categoria: "Bebidas" },
  { id: 3, name: "50x Coca Cola", price: 50, image: cocacola, slug: "50x-coca-cola", categoria: "Bebidas" },
  { id: 4, name: "50x Lechugas", price: 50, image: lechugas, slug: "50x-lechugas", categoria: "Verduras" },
];