import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-base-100 text-base-content min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1 pt-28 px-4 sm:px-6 lg:px-12">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
