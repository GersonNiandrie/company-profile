export default function ProductTestimonials() {
  const testimonials = [
    {
      name: "Ryo Tanaka",
      quote:
        "The Gunpla selection here is incredible. I found kits I couldn’t get anywhere else.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Michelle Wong",
      quote:
        "Their tools section completely upgraded my building workflow. Highly recommended.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Daniel Cruz",
      quote:
        "Fast shipping and excellent packaging. My kits arrived in perfect condition.",
      image: "https://randomuser.me/api/portraits/men/61.jpg",
    },
  ];

  return (
    <section className="px-6 py-20 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Builders Trust Us
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card bg-base-100 p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={t.image} alt={t.name} />
                  </div>
                </div>
                <p className="font-semibold">{t.name}</p>
              </div>

              <p className="italic text-sm opacity-80">
                “{t.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
