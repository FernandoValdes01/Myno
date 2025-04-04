"use client";

import { useCartStore } from "@/store/cart";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ShoppingCartButton = () => {
  const getSummary = useCartStore((state) => state.getSummary);
  const { totalItems } = getSummary();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <Skeleton className="size-6" />;
  }

  return (
    <div className="relative">
      {totalItems > 0 && (
        <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-primary text-white dark:text-black">
          {totalItems}
        </span>
      )}
      <ShoppingCart size={24} />
    </div>
  );
};
