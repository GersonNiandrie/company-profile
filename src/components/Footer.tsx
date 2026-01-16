"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-center py-6 mt-12">
      <p className="text-sm text-base-content/70">
        &copy; {year} Gunpla Garage. All rights reserved.
      </p>
    </footer>
  );
}
