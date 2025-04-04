"use client";

import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCartStore } from "@/store/cart";

export const ProductsInCart = () => {
  const {
    cart: cartItems,
    updateProductQuantity,
    removeFromCart,
    clearCart,
  } = useCartStore();

  return (
    <div className="lg:col-span-2">
      <Card>
        <CardHeader>
          <CardTitle>Productos ({cartItems.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4"
              >
                <div className="w-20 h-20 bg-muted rounded-md overflow-hidden flex-shrink-0">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Imagen
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    Código: PROD-{item.id}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() =>
                      updateProductQuantity(item.id, item.quantity - 1)
                    }
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() =>
                      updateProductQuantity(item.id, item.quantity + 1)
                    }
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ${item.price.toFixed(2)} / unidad
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/">Seguir comprando</Link>
          </Button>
          <Button variant="ghost" onClick={clearCart}>
            Vaciar carrito
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
