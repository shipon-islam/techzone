import { ProductType } from "@/types";
import Image from "next/image";
import { IoMdHeart } from "react-icons/io";

export default function ProductCard({
  product_url,
  tittle,
  category,
  price,
}: ProductType) {
  return (
    <div
      style={{ filter: "drop-shadow(2px 5px 12px rgba(0, 0, 0, 0.15))" }}
      className="bg-[#F1F1F1] rounded-md overflow-hidden w-[270px] h-auto"
    >
      <Image
        src={product_url}
        width={200}
        height={200}
        alt="card"
        className="px-2 py-4 mx-auto"
      />
      <div
        style={{ clipPath: "ellipse(96% 93% at 50% 95%)" }}
        className="bg-white p px-4 py-4 text-center"
      >
        <div>
          <h5 className="font-bold">{tittle}</h5>
          <p className="text-sm mt-1">{category}</p>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">$ {price}</div>
          <button>
            <IoMdHeart className="text-xl text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}
