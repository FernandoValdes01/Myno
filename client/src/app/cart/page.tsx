"use client";

import { Recomendations } from "@/components/cart/recomendations";
import { Summary } from "@/components/cart/summary";
import { ProductsInCart } from "@/components/cart/products-in-cart";
import { useCartStore } from "@/store/cart";
import { EmptyCart } from "@/components/cart/empty-cart";

export default function CartPage() {
  const totalItems = useCartStore((state) => state.getSummary().totalItems);
  const isEmpty = totalItems === 0;

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Carrito de Compra</h1>

      {!isEmpty ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ProductsInCart />
          <Summary />
        </div>
      ) : (
        <EmptyCart />
      )}

      <Recomendations />
    </>
  );
}
