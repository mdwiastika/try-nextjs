"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  return (
    <nav className={`border flex justify-between px-24 h-20 items-center text-xl font-medium font-mono ${["/about"].includes(usePathname()) ? "hidden" : ""}`}>
      <div className="logo">Logo Saya</div>
      <ul className="flex justify-between gap-7">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
