// import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image, { type StaticImageData } from "next/image";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  price: number;
  image: StaticImageData;
}

export function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    // <Link href="#" className="block transition-opacity hover:opacity-80">
    <Card className="overflow-hidden rounded-none pt-0">
      <CardHeader className="p-0">
        <Image
          src={image}
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
    </Card>
    // </Link>
  );
}
