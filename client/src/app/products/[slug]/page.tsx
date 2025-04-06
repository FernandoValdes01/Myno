import ProductDetail from "@/components/product-details";
import { recommendations } from "@/data/products";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return recommendations.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = recommendations.find((product) => product.slug === slug);
  if (!product) notFound();

  return <ProductDetail product={product} relatedProducts={recommendations} />;
}
