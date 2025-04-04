import { ProductCard } from "@/components/product-card";
import { recommendations } from "@/data/products";

export default function Home() {
  return (
    <>
      <h2 className="mb-6 text-xl font-medium">Nuestras recomendaciones</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {recommendations.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
}
