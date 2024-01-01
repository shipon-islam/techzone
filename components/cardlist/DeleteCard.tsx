"use client";
import { cardDeleteAction } from "@/actions/card";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";

export default function DeleteCard({ id }: { id: string }) {
  const handleDelete = async (cardId: string) => {
    await cardDeleteAction(cardId);
    toast.success("removed");
    location.reload();
  };
  return (
    <button onClick={() => handleDelete(id)}>
      <AiOutlineClose className="text-lg text-gray-500 hover:text-red-500" />
    </button>
  );
}
