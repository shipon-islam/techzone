"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return pathname.startsWith("/dashboard") ? (
    children
  ) : (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
