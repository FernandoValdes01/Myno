"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cart";

export const Summary = () => {
  const total = useCartStore((state) => state.getSummary().total);
  const subTotal = useCartStore((state) => state.getSummary().subTotal);
  const tax = useCartStore((state) => state.getSummary().tax);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Resumen del pedido</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">IVA (15%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>

          <Separator />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="pt-4">
            <Button className="w-full" size="lg">
              Proceder al pago
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Al realizar tu compra, aceptas nuestros términos y condiciones y
              política de privacidad.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
