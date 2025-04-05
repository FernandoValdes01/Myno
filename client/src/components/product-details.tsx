"use client";

import Image from "next/image";
import Link from "next/link";
import { Share2, Heart, ShoppingCart, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Product } from "@/types/products";
import { ProductCard } from "@/components/product-card";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart";

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetail({
  product,
  relatedProducts,
}: ProductDetailProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    // setIsAddedToCart(true);
    addToCart({ ...product, quantity: 1 });
    // toast({
    //   title: "Añadido al carrito",
    //   description: `${product.name} (${quantity}) ha sido añadido a tu carrito`,
    // })

    // reset button
    // setTimeout(() => {
    //   setIsAddedToCart(false);
    // }, 1000);
  };

  // Handle adding to wishlist
  const handleAddToWishlist = () => {
    // toast({
    //   title: isAddedToWishlist ? "Eliminado de favoritos" : "Añadido a favoritos",
    //   description: isAddedToWishlist
    //     ? `${product.name} ha sido eliminado de tu lista de favoritos`
    //     : `${product.name} ha sido añadido a tu lista de favoritos`,
    // })
  };

  return (
    <div>
      {/* Breadcrumbs */}
      <nav className="flex mb-6 text-sm text-muted-foreground">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-foreground">
              Inicio
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <span>/</span>
            <Link href="/search" className="hover:text-foreground">
              {/* // TODO: redireccionar a pagina de busqueda con categoria filtrada */}
              {product.categoria}
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center text-muted-foreground">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  "Imagen del producto"
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <Button
                variant="ghost"
                size="icon"
                className={false ? "text-red-500" : ""}
                onClick={handleAddToWishlist}
              >
                <Heart className={`h-5 w-5 ${false ? "fill-red-500" : ""}`} />
              </Button>
            </div>
            <div className="flex items-center justify-between mt-2 gap-2">
              <span className="text-muted-foreground">
                {formatPrice(product.price)}
              </span>
              <span className="text-muted-foreground">En stock</span>
            </div>
          </div>
          <Separator />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              className="flex-1 active:opacity-80"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Añadir al carrito
            </Button>
            <Button variant="outline" size="icon" className="hidden sm:flex">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Shipping & Returns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-2">
              <Truck className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <p className="font-medium">Envío gratuito</p>
                <p className="text-sm text-muted-foreground">
                  En pedidos superiores a $50
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <RotateCcw className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <p className="font-medium">Devoluciones gratuitas</p>
                <p className="text-sm text-muted-foreground">
                  Hasta 30 días después de la compra
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Productos relacionados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                categoria={product.categoria}
                name={product.name}
                price={product.price}
                slug={product.slug}
                image={product.image}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
