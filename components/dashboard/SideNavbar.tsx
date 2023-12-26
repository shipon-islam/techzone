import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdShoppingBasket, MdSpaceDashboard } from "react-icons/md";

export default function SideNavbar() {
  const links = [
    {
      id: 1,
      name: "dashboard",
      path: "/dashboard",
      Icon: <MdSpaceDashboard className="inline-block text-lg" />,
    },
    {
      id: 2,
      name: "messages",
      path: "/dashboard",
      Icon: <AiFillMessage className="inline-block text-lg" />,
    },
    {
      id: 3,
      name: "order",
      path: "/dashboard/announcement",
      Icon: <HiOutlineSpeakerphone className="inline-block text-xl" />,
    },
    {
      id: 4,
      name: "products",
      path: "/dashboard/products",
      Icon: <MdShoppingBasket className="inline-block text-lg" />,
    },
    {
      id: 5,
      name: "members",
      path: "/dashboard/members",
      Icon: <FaUser className="inline-block text-lg" />,
    },
  ];
  return (
    <nav aria-label="alternative nav">
      <div className="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">
        <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
          <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
            {links.map((item) => (
              <li key={item.id} className="mr-3 flex-1">
                <Link
                  href={item.path}
                  className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
                >
                  {item.Icon}
                  <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block capitalize ml-1">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
