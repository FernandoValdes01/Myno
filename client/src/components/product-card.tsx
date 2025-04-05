"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart";
import defaultIMG from "@/assets/logo.png";
import { Product } from "@/types/products";

export function ProductCard({
  id,
  name,
  price,
  image,
  slug,
  categoria,
}: Product) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    // <Link href="#" className="block transition-opacity hover:opacity-80">
    <Card className="overflow-hidden rounded-none pt-0">
      <CardHeader className="p-0">
        <Image
          src={image ?? defaultIMG}
          placeholder="blur"
          alt="Product Image"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </CardHeader>
      <CardContent className="">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium truncate">{name}</p>
          <p className="text-sm font-medium">${formatPrice(price)}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() =>
            addToCart({
              id,
              name,
              price,
              quantity: 1,
              image,
              slug,
              categoria,
            })
          }
        >
          Añadir al carrito
        </Button>
      </CardFooter>
    </Card>
  );
}
