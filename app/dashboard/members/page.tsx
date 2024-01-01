import prisma from "@/prisma/db";
import { User } from "@/types";
import Image from "next/image";
export default async function Members() {
  const users = await prisma.user.findMany();
  return (
    <main>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #ID
              </th>
              <th scope="col" className="px-6 py-3">
                avatar
              </th>
              <th scope="col" className="px-6 py-3">
                FIRSTNAME
              </th>
              <th scope="col" className="px-6 py-3">
                LASTNAME
              </th>
              <th scope="col" className="px-6 py-3">
                EMAIL
              </th>
              <th scope="col" className="px-6 py-3">
                ROLE
              </th>

              <th scope="col" className="px-6 py-3">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User, index: number) => (
              <tr
                key={user.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="py-4 px-6">{index}</td>
                <td className="py-4 px-2">
                  <Image
                    src={user.avatar}
                    alt="avatar"
                    width={75}
                    height={75}
                    className="rounded-md"
                  />
                </td>
                <td className="py-4 px-6">{user.firstname}</td>
                <td className="py-4 px-6">{user.lastname}</td>
                <td className="py-4 px-6">{user.email}</td>
                <td className="py-4 px-6">{user.role}</td>
                <td className="py-4 px-6">
                  <button>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
