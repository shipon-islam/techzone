import ImageDelete from "@/components/dashboard/ImageDelete";
import UploadProduct from "@/components/dashboard/UploadProduct";
import prisma from "@/prisma/db";
import Image from "next/image";
export const revalidate = 5;
export default async function ProductList() {
  const data = await prisma.gallery.findMany();

  return (
    <>
      <UploadProduct />
      <div className="grid grid-cols-4 justify-center gap-6 mt-8 mx-8">
        {data?.reverse().map((item: any, id: any) => (
          <div className="border rounded-lg" key={item.id}>
            <Image src={item.image.url} width={400} height={400} alt="images" />
            <ImageDelete imageKey={item.id} />
          </div>
        ))}
      </div>
    </>
  );
}
