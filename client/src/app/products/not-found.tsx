import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProductNotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[60vh] md:h-[80vh]">
      <h1 className="text-4xl font-bold mb-4">Producto no encontrado</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Lo sentimos, el producto que estás buscando no existe o ha sido
        eliminado.
      </p>
      <Button asChild>
        <Link href="/search">Ver todos los productos</Link>
      </Button>
    </div>
  );
}
