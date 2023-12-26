"use client";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa6";
export default function TodoDelete({ id }: { id: string }) {
  const handleDelete = async (productId: string) => {
    const res = await fetch(`/api/todos/${productId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data) toast.success("Todo delete successfull");
  };
  return (
    <button
      onClick={() => handleDelete(id)}
      className="text-gray-600 hover:text-red-500"
    >
      <FaTrash />
    </button>
  );
}
