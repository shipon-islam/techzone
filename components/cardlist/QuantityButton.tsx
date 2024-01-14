"use client";
import { cardQuantityAction } from "@/actions/card";
import { quantityBtnType } from "@/types";
import { TbMinus, TbPlus } from "react-icons/tb";

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
