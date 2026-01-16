"use client"

import { useState, useEffect } from "react";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Sliding images */}
      <div
        className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Hero ${idx + 1}`}
            className="w-full flex-shrink-0 h-full object-cover"
          />
        ))}
      </div>

      {/* Static overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Static text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">Fuel your passion for model kits and collectibles.</h1>
        <p className="text-xl opacity-90">
          Discover precision, creativity, and endless possibilities in every kit.
        </p>
        <button className="btn btn-primary mt-6">Learn More</button>
      </div>
    </section>
  );
}
