// import myphoto from "@/public/shipon2.jpg";
import BlurImage from "@/components/BlurImage";
import prisma from "@/prisma/db";
import Link from "next/link";
export const dynamic = "force-dynamic";
export default async function Products() {
  const products = await prisma.products.findMany();
  // const blurWithProducts = await getBase64Many(products);

  return (
    <div className="flex flex-wrap gap-10 container py-8 bg-slate-600 ">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <BlurImage
            src={product.images[0].url}
            alt="product"
            width={200}
            height={200}
          />
        </Link>
      ))}
    </div>
  );
}
