import { ProductCard } from "@/components/product-card";
import manzanas from "@/assets/manzanas.png";
import cocacola from "@/assets/cocacola.png";

export default function Home() {
  const recommendations = [
    { id: 1, name: "50x Manzanas", price: 40, image: manzanas },
    { id: 2, name: "50x Coca Cola", price: 50, image: cocacola },
    { id: 3, name: "100x Manzanas", price: 70, image: manzanas },
    { id: 4, name: "100x Coca Cola", price: 80, image: cocacola },
  ];

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
