import { recommendations } from "@/data/products";
import { ProductCard } from "../product-card";

export const Recomendations = () => {
  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold mb-6">También te puede interesar</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recommendations.map((product) => (
          <ProductCard
            image={product.image}
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
