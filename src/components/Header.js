// components/Header.js
"use client";
import Link from "next/link";

export default function Header({ title }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-md">
      <h1 className="text-xl font-bold">{title}</h1>
      <nav className="space-x-4">
        <Link href="/" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">
          Home
        </Link>
        <Link href="/createpost" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">
          Create Post
        </Link>
      </nav>
    </header>
  );
}
