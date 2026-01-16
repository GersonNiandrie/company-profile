import { ReactNode } from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import { UserProvider } from "@/lib/UserContext";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-base-100 text-base-content min-h-screen flex flex-col">
        {/* Wrap everything in UserProvider */}
        <UserProvider>
          <Navbar />
          <main className="flex-1 pt-28 px-4 sm:px-6 lg:px-12">{children}</main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
