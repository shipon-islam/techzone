import { ServiceCardType } from "@/types";
import Image from "next/image";

export default function ServiceCard({
  photo,
  headline,
  tittle,
}: ServiceCardType) {
  return (
    <div className="text-center">
      <Image
        className="mx-auto"
        src={photo}
        width={120}
        height={120}
        alt="service-card"
      />
      <h3 className="font-bold mt-4 mb-2">{headline}</h3>
      <p className="text-gray-700">{tittle}</p>
    </div>
  );
}
