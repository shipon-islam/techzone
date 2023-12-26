"use client";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function TodoForm() {
  const todoRef: any = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ todo: todoRef.current.value }),
    });
    todoRef.current.value = "";

    const data = await res.json();
    if (data) toast.success("added successfuly");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto border-2 p-8 mt-8 rounded-md"
    >
      <div className="mb-5">
        <label
          htmlFor="todo"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your email
        </label>
        <input
          type="text"
          name="todo"
          ref={todoRef}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Write a todo..✍️"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-auto block"
      >
        add
      </button>
    </form>
  );
}
