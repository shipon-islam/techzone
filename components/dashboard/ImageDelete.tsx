"use client";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa6";

export default function ImageDelete({ imageKey }: { imageKey: string }) {
  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/product/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data) toast.success("image deleted success");
  };
  return (
    <button onClick={() => handleDelete(imageKey)}>
      <FaTrash />
    </button>
  );
}
