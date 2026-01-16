"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6 fixed top-0 left-0 w-full z-50 h-24">
      <div className="flex-1 flex items-center">
        <Link href="/" className="flex items-center">
          <Image src="/company.png" alt="Company Logo" width={75} height={75} />
        </Link>
        <span className="ml-3 text-sm opacity-70 hidden sm:inline">
          For Builders, By Builders.
        </span>
      </div>

      <div className="flex-none gap-3 items-center">
        <Link href="/about" className="btn btn-ghost btn-sm">About</Link>
        <Link href="/services" className="btn btn-ghost btn-sm">Services</Link>
        <Link href="/blog" className="btn btn-ghost btn-sm">Blog</Link>
        <Link href="/login" className="btn btn-ghost btn-sm">Login</Link>
        <Link href="/register" className="btn btn-primary btn-sm">Register</Link>
      </div>
    </div>
  );
}
