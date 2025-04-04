"use client";

import { Recomendations } from "@/components/cart/recomendations";
import { Summary } from "@/components/cart/summary";
import { ProductsInCart } from "@/components/cart/products-in-cart";
import { useCartStore } from "@/store/cart";
import { EmptyCart } from "@/components/cart/empty-cart";

export default function CartPage() {
  const getSummary = useCartStore((state) => state.getSummary);
  const isEmpty = getSummary().totalItems === 0;

  return (
    <div className="container px-4 py-8 mx-auto max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Carrito de Compra</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {!isEmpty ? (
          <>
            <ProductsInCart />
            <Summary />
          </>
        ) : (
          <EmptyCart />
        )}
      </div>

      <Recomendations />
    </div>
  );
}
