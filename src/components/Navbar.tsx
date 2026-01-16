"use client";

import Link from "next/link";
import Image from "next/image";
import Backendless from "@/lib/backendless";
import { useUser } from "@/lib/UserContext";

export default function Navbar() {
  const { user, setUser } = useUser();

  const handleLogout = async () => {
    try {
      await Backendless.UserService.logout();
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-6 fixed top-0 left-0 w-full z-50 h-24">
      <div className="flex-1 flex items-center">
        <Link href="/" className="flex items-center">
          <Image src="/company.png" alt="Logo" width={75} height={75} />
        </Link>
        <span className="ml-3 text-sm opacity-70 hidden sm:inline">
          For Builders, By Builders.
        </span>
      </div>

      <div className="flex-none gap-3 items-center">
        <Link href="/about" className="btn btn-ghost btn-sm">About</Link>
        <Link href="/services" className="btn btn-ghost btn-sm">Services</Link>

        {user ? (
          <>
            <span className="font-medium mr-2">{user.name || user.email}</span>
            <button className="btn btn-outline btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-ghost btn-sm">Login</Link>
            <Link href="/register" className="btn btn-primary btn-sm">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}
