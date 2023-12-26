import prisma from "@/prisma/db";
import TodoDelete from "./todoDelete";
import TodoForm from "./todoForm";
export const dynamic = "force-dynamic";
export default async function Todos() {
  const todos = await prisma.todos.findMany();
  prisma;

  return (
    <div className="min-h-screen">
      <TodoForm />
      <ul className="w-[24rem] mx-auto">
        {todos?.reverse().map((todo: any) => (
          <li
            className=" px-4 py-2 border my-2 capitalize odd:bg-red-200 even:bg-blue-200 rounded-md flex justify-between"
            key={todo.id}
          >
            <span>{todo.name}</span>
            <TodoDelete id={todo.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
