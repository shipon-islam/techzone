"use client";
import NavigationProvider from "@/components/NavigationProvider";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function GlobalProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <NavigationProvider>{children}</NavigationProvider>
    </SessionProvider>
  );
}
