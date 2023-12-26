"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";

function Navbar() {
  const [dropdownToggle, setdropdownToggle] = useState(false);
  return (
    <header>
      <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
        <div className="flex flex-wrap items-center">
          <div className="flex flex-shrink md:w-1/3  text-white">
            <Link href="/dashboard" aria-label="Home">
              <span className="text-xl flex items-center pl-4">
                <MdAdminPanelSettings className=" text-4xl" />
                Admin Dashboard
              </span>
            </Link>
          </div>
          <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
            <span className="relative w-full">
              <input
                aria-label="search"
                type="search"
                id="search"
                placeholder="Search"
                className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
              />
              <div
                className="absolute search-icon"
                style={{ top: "1rem", left: ".8rem" }}
              >
                <svg
                  className="fill-current pointer-events-none text-white w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
              </div>
            </span>
          </div>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="flex-1 md:flex-none md:mr-3">
                <Link
                  className="inline-block py-2 px-4 text-white no-underline"
                  href="/"
                >
                  Back Home
                </Link>
              </li>
              <li className="flex-1 md:flex-none md:mr-3">
                <Link
                  className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="/dashboard/product-list"
                >
                  Product List
                </Link>
              </li>
              <li className="flex-1 md:flex-none md:mr-3">
                <div className="relative inline-block">
                  <button
                    onClick={() => setdropdownToggle((prev) => !prev)}
                    className="drop-button text-white py-2 px-2"
                  >
                    <span className="pr-2">
                      <i className="em em-robot_face" />
                    </span>
                    Hi, User
                    <svg
                      className="h-3 fill-current inline"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  {dropdownToggle && (
                    <div className="absolute bg-gray-800 text-white right-0 mt-1 p-3 overflow-auto z-30">
                      <input
                        type="text"
                        className="drop-search p-2 text-gray-600"
                        placeholder="Search.."
                      />
                      <button className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block ">
                        <FaUser className="inline-block text-lg mr-2" />
                        {"user" || "Admin"}
                      </button>
                      <a
                        href="#"
                        className="p-2 text-white text-sm  hover:bg-gray-600 block w-full text-left rounded-md"
                      >
                        <IoMdSettings className="inline-block text-xl mr-2" />
                        Settings
                      </a>
                      <div className="border border-gray-800 cursor-pointer" />
                      <button
                        className="p-2 text-white text-sm   hover:bg-gray-600 block w-full text-left rounded-md"
                        onClick={() => console.log("first")}
                      >
                        <IoLogOut className="inline-block text-2xl mr-2" />
                        Log Out
                      </button>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
