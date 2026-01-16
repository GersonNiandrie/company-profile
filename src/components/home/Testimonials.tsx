export default function Testimonials() {
  const testimonials = [
    {
      name: "Alice Johnson",
      quote: "Amazing service! Highly recommended.",
    },
    {
      name: "Bob Smith",
      quote: "Professional and reliable team.",
    },
    {
      name: "Carol Lee",
      quote: "They exceeded our expectations.",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="card p-6 shadow">
            <p className="italic mb-4">"{t.quote}"</p>
            <p className="font-semibold">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
