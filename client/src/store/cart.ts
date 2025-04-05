import { CartProduct } from "@/types/products";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  updateProductQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;

  getSummary: () => {
    totalItems: number;
    subTotal: number;
    tax: number;
    total: number;
  }
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      items: 0,

      addToCart: (product: CartProduct) => {
        const { cart } = get();

        // 1. Revisar si el producto existe en el carrito con la talla seleccionada
        const productInCart = cart.some(
          (item) => item.id === product.id
        );

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        // 2. Se que el producto existe por talla... tengo que incrementar
        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + product.quantity };
          }

          return item;
        });

        set({ cart: updatedCartProducts });
      },

      updateProductQuantity: (id: number, quantity: number) => {
        const { cart, removeFromCart } = get();
        if (quantity == 0) {
            removeFromCart(id);
            return
        }

        const updatedCartProducts = cart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: quantity };
          }
          return item;
        });

        set({ cart: updatedCartProducts });
      },
      removeFromCart: (id: number) => {
        const { cart } = get();

        const updatedCartProducts = cart.filter(
          (item) => {
            return item.id !== id
          }
        );

        set({ cart: updatedCartProducts });
      },
      getSummary: () => {
        const { cart } = get();

        const totalItems = cart?.reduce((total,item) => total + item.quantity, 0) ?? 0
        const subTotal = cart.reduce((subTotal, item) => subTotal + (item.price * item.quantity), 0);
        const tax = subTotal * 0.15;
        const total = subTotal + tax;

        return {
          totalItems,
          subTotal,
          tax,
          total
        }

      },
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: "cart",
    }
  )
);
