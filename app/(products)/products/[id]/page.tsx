import prisma from "@/prisma/db";
import ProductInfo from "../ProductInfo";
export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const product = await prisma.products.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <main className="container-div">
      <ProductInfo product={product} />
    </main>
  );
}
