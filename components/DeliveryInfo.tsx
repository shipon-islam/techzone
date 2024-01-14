import { DeleveryType } from "@/types";

export default function DeliveryInfo({ icon, text, head }: DeleveryType) {
  let ReactIcon = icon;
  return (
    <div className="flex mt-8 gap-x-2 border-b-2 font-poppins">
      <div className="self-center">
        <ReactIcon className="text-2xl text-orange-300" />
      </div>
      <div>
        <h3 className="capitalize">{head}</h3>
        <p className="capitalize">{text}</p>
      </div>
    </div>
  );
}
