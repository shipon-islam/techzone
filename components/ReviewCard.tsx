import Image from "next/image";
import { FaStar } from "react-icons/fa";
export default function ReviewCard() {
  return (
    <div className="w-[25rem] bg-[#F1F1F1] px-5 py-6 rounded-lg">
      <div className="flex gap-x-4">
        <Image
          src="/img/girl.jpg"
          className="rounded-full h-[40px]"
          width={40}
          height={40}
          alt="user"
        />
        <div>
          <h5 className="font-medium text-lg">Nusrat afrin</h5>
          <div className="flex">
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
          </div>
        </div>
      </div>
      <p className="mt-4">
        There are so many online shop i've seen but tech zone is one of the best
        their service and product
      </p>
    </div>
  );
}
