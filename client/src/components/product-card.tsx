import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: number;
}

export function ProductCard({ name, price }: ProductCardProps) {
  return (
    <Link href="#" className="block transition-opacity hover:opacity-80">
      <Card className="overflow-hidden">
        <div className="aspect-square">
          <div className="flex items-center justify-center w-full h-full">
            Imagen
          </div>
        </div>
        <CardContent className="p-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium truncate">{name}</p>
            <p className="text-sm font-medium">${price}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
