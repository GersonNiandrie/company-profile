"use client";

import Link from "next/link";
import Image from "next/image";
import { useUser } from "@/lib/UserContext";
import Backendless from "@/lib/backendless";

export default function Navbar() {
  const { user, setUser } = useUser();
  
  const isAdmin = user?.roles?.includes("admin");

  const handleLogout = async () => {
    try {
      await Backendless.UserService.logout();
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-6 sticky top-0 left-0 w-full z-50">
      <div className="flex-1 flex items-center">
        <Link href="/" className="flex items-center">
          <Image src="/company.png" alt="Company Logo" width={75} height={75} />
        </Link>
        <span className="ml-2 text-sm opacity-70 hidden sm:inline">
          For Builders, By Builders.
        </span>
      </div>

      {/* ===================== */}
      {/* NAVBAR BUTTONS CONTAINER */}
      {/* ===================== */}
      <div className="flex-none flex items-center gap-4">
        <Link href="/about" className="btn btn-ghost btn-sm bg-neutral">
          About
        </Link>
        <Link href="/services" className="btn btn-ghost btn-sm bg-neutral">
          Products
        </Link>
        <Link href="/blog" className="btn btn-ghost btn-sm bg-neutral">
          Blog
        </Link>

        {user ? (
          <>
            <span className="font-medium mr-4">
              Hi, {user.name || user.email}
            </span>
            {isAdmin && (
              <span className="badge badge-secondary mr-2">Admin</span>
            )}
            <button className="btn btn-outline btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary btn-sm">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
