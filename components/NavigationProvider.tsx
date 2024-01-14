"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./dashboard/Navbar";
import SideNavbar from "./dashboard/SideNavbar";

export default function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return pathname.startsWith("/dashboard") ? (
    <div>
      <Navbar />
      <div className="flex">
        <SideNavbar />
        <div className="pt-14 pl-4 text-gray-50 bg-gray-700 w-full">
          {children}
        </div>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
}
