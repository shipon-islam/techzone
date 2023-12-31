import AuthProvider from "@/components/AuthProvider";
import NavigationProvider from "@/components/NavigationProvider";
import "@uploadthing/react/styles.css";
import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const redex = Readex_Pro({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={redex.className}>
        <AuthProvider>
          <NavigationProvider>
            <Toaster position="top-center" reverseOrder={false} />
            {children}
          </NavigationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
