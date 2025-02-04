import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center fixed w-full top-0 z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold tracking-wide">RESTRUCTURING INTERVIEWS</h1>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-lg">
        <Link href="/" className="px-4 hover:text-blue-600 transition">Home</Link>
        <Link href="/product" className="px-4 hover:text-blue-600 transition">Restructuring Guides</Link>
        <Link href="/blog" className="px-4 hover:text-blue-600 transition">Restructuring Blog</Link>
        <Link href="/questions" className="px-4 hover:text-blue-600 transition">Top 15 Restructuring Interview Questions</Link>
        <Link href="/about" className="px-4 hover:text-blue-600 transition">About</Link>
        <Link href="/contact" className="px-4 hover:text-blue-600 transition">Contact</Link>
      </div>

      {/* Icons */}
      <div className="flex space-x-4">
        <Search className="w-6 h-6 text-gray-600 cursor-pointer" />
        <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer" />
      </div>
    </nav>
  );
}
