export default function Testimonials() {
  const testimonials = [
    {
      name: "Kenji Tanaka",
      role: "Gunpla Builder",
      quote:
        "Best place for Gunpla kits. The selection is great and the staff really knows their stuff.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emily Carter",
      role: "Hobbyist Modeler",
      quote:
        "Fast shipping and genuine kits. I always find tools and accessories I can’t get elsewhere.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Wong",
      role: "Scale Model Enthusiast",
      quote:
        "Their advice helped me choose my first airbrush. Highly recommended for beginners and pros.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">
        What Builders Say
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="card bg-base-100 p-6 shadow hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm opacity-70">{t.role}</p>
              </div>
            </div>

            <p className="italic text-sm opacity-80">“{t.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
