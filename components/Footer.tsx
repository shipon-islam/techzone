"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-overlay h-[44rem] sm:h-[27rem] lg:h-[20rem] text-gray-900 overflow-hidden">
      <section className="container relative  border-b border-black ">
        <div className="h-[40rem] sm:h-[22rem] lg:h-[15rem]"></div>
        <Image
          className="absolute right-40 top-52 sm:top-3 "
          src="/img/circle.svg"
          alt="circle"
          width={80}
          height={80}
        />
        <Image
          className="absolute left-[19rem] bottom-48 sm:top-12 "
          src="/img/circle.svg"
          alt="circle"
          width={30}
          height={30}
        />
        <Image
          className="absolute left-[38rem] top-40 "
          src="/img/circle.svg"
          alt="circle"
          width={50}
          height={50}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 py-10 absolute w-full top-0 ">
          <div>
            <div>
              <Link className="flex items-center" href="/">
                <span className="text-xl font-bold capitalize text-gray-700">
                  techZone
                </span>
                <Image
                  width="50"
                  height="50"
                  className=""
                  src="/img/techzone_logo.png"
                  alt="navLogo"
                />
              </Link>
            </div>
            <p className="my-4">
              Mirpur 10, metro 4 piller ,<br /> Dhaka, Bangladesh
            </p>
            <div className="flex gap-x-4">
              <a
                className="bg-white p-1.5 rounded-full inline-block shadow-md shadow-black"
                href="#"
              >
                <FaInstagram />
              </a>
              <a
                className="bg-primary p-1.5 rounded-full inline-block  shadow-md shadow-black"
                href="#"
              >
                <FaFacebookF />
              </a>

              <a
                className="bg-white p-1.5 rounded-full inline-block shadow-md shadow-black"
                href="#"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="capitalize text-xl text-gray-900">company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className=" capitalize hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/career" className=" capitalize hover:text-primary">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/work" className=" capitalize hover:text-primary">
                  How It Work
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="capitalize text-xl text-gray-900">Policy</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/faq" className=" capitalize hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className=" capitalize hover:text-primary"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className=" capitalize hover:text-primary"
                >
                  Shipping
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="capitalize text-xl text-gray-900">Get In Touch</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="tel:+8801883972780" className="hover:text-primary">
                  +8801883972780
                </a>
              </li>
              <li>
                <a
                  href="mail:techzone21@gamil.com"
                  className="  hover:text-primary"
                >
                  techzone21@gamil.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <p className="text-center py-6">© 2023 TechZone. ALL RIGHT RESERVED.</p>
      </section>
    </footer>
  );
}
