import { ProductCard } from "@/components/product-card";

export default function Home() {
  const recommendations = [
    { id: 1, name: "Producto 1", price: 3 },
    { id: 2, name: "Producto 2", price: 4 },
    { id: 3, name: "Producto 3", price: 5 },
    { id: 4, name: "Producto 4", price: 6 },
  ];

  return (
    <main className="bg-background">
      <div className="container px-4 py-8 mx-auto">
        <h2 className="mb-6 text-xl font-medium">Nuestras recomendaciones</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {recommendations.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
