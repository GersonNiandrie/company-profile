export default function ServicesServices() {
  const services = [
    { title: "Gundam Plastic Model Kits", description: "Expert advice for your business" },
    { title: "Development", description: "High-quality software solutions" },
    { title: "Design", description: "Creative designs that stand out" },
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="card p-6 bg-gray-500 shadow hover:shadow-lg hover:shadow-primary transition">
            <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
            <p>{s.description}</p>
            <button className="btn btn-sm btn-outline mt-4">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
