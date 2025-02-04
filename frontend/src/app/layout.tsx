import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
