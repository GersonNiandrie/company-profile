"use client";

import { ReactNode, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { getCurrentUser } from "@/lib/auth";

interface AuthWrapperProps {
  children: ReactNode | ((props: { user: any; setUser: any }) => ReactNode);
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const u = await getCurrentUser();
      setUser(u);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <main className="flex-1 pt-28 px-4 sm:px-6 lg:px-12">
        {typeof children === "function" ? children({ user, setUser }) : children}
      </main>
    </>
  );
}
