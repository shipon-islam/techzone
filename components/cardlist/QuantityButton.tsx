"use client";
import { cardQuantityAction } from "@/actions/card";
import { TbMinus, TbPlus } from "react-icons/tb";
type quantityBtnType = {
  quantity: number;
  id: string;
  name: "plus" | "minus";
};

export default function QuantityButton({
  name,
  quantity,
  id,
}: quantityBtnType) {
  return (
    <button
      onClick={async () => {
        await cardQuantityAction(name, quantity, id);
      }}
    >
      {name === "plus" ? (
        <TbPlus className="text-xl hover:text-orange-400 " />
      ) : (
        <TbMinus className="text-xl hover:text-orange-400 " />
      )}
    </button>
  );
}
