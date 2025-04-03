"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/product-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import manzanas from "@/assets/manzanas.png";
// Datos de ejemplo para el carrito
const initialCartItems = [
  {
    id: 1,
    name: "Producto 1",
    price: 19.99,
    quantity: 2,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Producto 2",
    price: 29.99,
    quantity: 1,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Producto 3",
    price: 9.99,
    quantity: 3,
    image: "/placeholder.svg",
  },
];

// Productos recomendados
const recommendedProducts = [
  { id: 4, name: "Producto 4", price: 12.99, image: manzanas },
  { id: 5, name: "Producto 5", price: 24.99, image: manzanas },
  { id: 6, name: "Producto 6", price: 15.99, image: manzanas },
  { id: 7, name: "Producto 7", price: 18.99, image: manzanas },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  // Calcular subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calcular impuestos (21% IVA)
  const tax = subtotal * 0.21;

  // Calcular descuento (10% si se aplica cupón)
  const discount = couponApplied ? subtotal * 0.1 : 0;

  // Calcular total
  const total = subtotal + tax - discount;

  // Actualizar cantidad de un producto
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Eliminar un producto del carrito
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Aplicar cupón de descuento
  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "descuento10") {
      setCouponApplied(true);
    }
  };

  // Verificar si el carrito está vacío
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="container px-4 py-8 mx-auto max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Carrito de Compra</h1>

      {isCartEmpty ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">Tu carrito está vacío</h2>
          <p className="text-muted-foreground mb-6">
            Parece que aún no has añadido productos a tu carrito
          </p>
          <Button asChild>
            <Link href="/">Explorar productos</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de productos en el carrito */}
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
                            updateQuantity(item.id, item.quantity - 1)
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
                            updateQuantity(item.id, item.quantity + 1)
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
                          onClick={() => removeItem(item.id)}
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
                <Button variant="ghost" onClick={() => setCartItems([])}>
                  Vaciar carrito
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Resumen del pedido */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Resumen del pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">IVA (21%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  {couponApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Descuento (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="pt-4">
                  <div className="space-y-2 mb-4">
                    <Label htmlFor="coupon">Cupón de descuento</Label>
                    <div className="flex gap-2">
                      <Input
                        id="coupon"
                        placeholder="Introduce tu código"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        disabled={couponApplied}
                      />
                      <Button
                        variant="outline"
                        onClick={applyCoupon}
                        disabled={couponApplied || !couponCode}
                      >
                        Aplicar
                      </Button>
                    </div>
                    {couponApplied && (
                      <p className="text-sm text-green-600">
                        ¡Cupón aplicado correctamente!
                      </p>
                    )}
                  </div>

                  <Button className="w-full" size="lg">
                    Proceder al pago
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Al realizar tu compra, aceptas nuestros términos y
                    condiciones y política de privacidad.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Productos recomendados */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-6">
          También te puede interesar
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recommendedProducts.map((product) => (
            <ProductCard
              image={product.image}
              key={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
