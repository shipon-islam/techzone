"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";

const navLinks: string[] = ["Home", "Products", "About", "Contact"];
export default function Navbar({ cards }: { cards: number }) {
  const [toggle, setToggle] = useState(true);
  const [isShowUser, setIsShowUser] = useState(false);
  const { data, status } = useSession();

  return (
    <header className="sticky top-0 bg-[#FFF9EA] border-b border-gray-500 py-2 z-[100] text-gray-900">
      <div className="container">
        <nav
          className="flex relative 
       justify-between items-center"
        >
          <div>
            <Link className="flex items-center" href="/">
              <Image
                width="50"
                height="50"
                className=""
                src="/img/techzone_logo.png"
                alt="navLogo"
              />
              <span className="text-xl font-bold capitalize text-gray-700">
                techzone
              </span>
            </Link>
          </div>
          <div className="flex gap-x-8">
            <div className="hidden md:block">
              {navLinks.map((link: string, index) => (
                <Link
                  key={index}
                  className="ml-8 capitalize text-lg"
                  href={`/${link === "Home" ? "/" : link.toLowerCase()}`}
                  onClick={() => setToggle((prev) => !prev)}
                >
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex justify-between items-center gap-x-8 ">
              <button>
                <FiSearch className="text-xl" />
              </button>

              <Link href="/card-list" className="relative">
                <FaCartShopping className="text-xl" />
                <small className="absolute bg-primary text-[8px] inline-block px-1 rounded-full -top-1.5 -right-1">
                  {cards}
                </small>
              </Link>
              {status === "authenticated" ? (
                <div>
                  <Image
                    onClick={() => setIsShowUser((prev) => !prev)}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border cursor-pointer"
                    src={data?.user?.image as string}
                    alt="User dropdown"
                  />

                  <div
                    className={`${
                      isShowUser ? "block" : "hidden"
                    } z-10 absolute right-0 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 `}
                  >
                    <div className="px-4 py-3 text-sm text-gray-900 ">
                      <div>{data?.user?.name}</div>
                      <div className="font-medium truncate">
                        {data?.user?.email}
                      </div>
                    </div>
                    <ul
                      className="py-2 text-sm text-gray-700 "
                      aria-labelledby="avatarButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100  "
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 "
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 "
                        >
                          Earnings
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <button
                        onClick={() =>
                          signOut({
                            callbackUrl: "/login",
                          })
                        }
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href="/signup"
                  className="bg-primary px-6 font-medium flex items-center gap-x-1 rounded-full py-1"
                >
                  <TbLogout />
                  <span>Sign up</span>
                </Link>
              )}
            </div>
            <button
              className="block lg:hidden"
              onClick={() => setToggle((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 transition-all duration-500 text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    toggle
                      ? "M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                      : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <div
        className={`${
          toggle ? "hidden" : "flex"
        } md:hidden flex-col gap-y-5  absolute bg-[#FFF9EA] w-full top-[3.2rem] pt-4 pb-8`}
      >
        {navLinks.map((link: string, index) => (
          <Link
            key={index}
            className="ml-8 capitalize text-lg"
            href={`/${link === "Home" ? "/" : link.toLowerCase()}`}
            onClick={() => setToggle((prev) => !prev)}
          >
            {link}
          </Link>
        ))}
      </div>
    </header>
  );
}
