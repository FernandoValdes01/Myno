import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const EmptyCart = () => {
  return (
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
  );
};
