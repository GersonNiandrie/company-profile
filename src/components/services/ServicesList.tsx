export default function ProductListSection() {
  const products = [
    {
      title: "Gundam Plastic Model Kits",
      description:
        "Bandai Gunpla kits including HG, RG, MG, and limited releases for builders of all levels.",
      image:
        "/products/gundam-kit.jpg",
    },
    {
      title: "Scale & Other Model Kits",
      description:
        "Military, automotive, aircraft, and sci-fi kits from trusted global manufacturers.",
      image:
        "/products/other-kits.webp",
    },
    {
      title: "Tools & Accessories",
      description:
        "Precision nippers, sanding tools, paints, airbrushes, decals, and everything you need to customize.",
      image:
        "/products/tools.jpg",
    },
  ];

  return (
    <section className="px-6 py-20 bg-neutral">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What We Offer
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.title}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition"
            >
              <figure className="relative h-56">
                <img
                  src={p.image}
                  alt={p.title}
                  className="object-cover"
                />
              </figure>

              <div className="card-body">
                <h3 className="card-title">{p.title}</h3>
                <p className="text-sm opacity-80">{p.description}</p>

                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-outline btn-sm">
                    Browse
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
