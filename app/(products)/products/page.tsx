import prisma from "@/prisma/db";
import Image from "next/image";
import Link from "next/link";
export default async function Products() {
  const products = await prisma.products.findMany();
  return (
    <div className="flex flex-wrap gap-10 container py-8 ">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <Image
            className="border"
            src={product.images[0].url}
            alt="product"
            width={100}
            height={100}
          />
        </Link>
      ))}
    </div>
  );
}
