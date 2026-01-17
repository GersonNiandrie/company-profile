type ProductPreview = {
  title: string;
  description: string;
  image: string;
};

export default function ServicesPreview() {
  const products: ProductPreview[] = [
    {
      title: "Gundam Plastic Model Kits",
      description:
        "Official Gunpla kits from Entry Grade to Master Grade, perfect for both beginners and seasoned builders.",
      image: "/products/gundam-kit.jpg",
    },
    {
      title: "Other Plastic Model Kits",
      description:
        "A curated selection of mecha, military, automotive, and character model kits from trusted brands.",
      image: "/products/other-kits.webp",
    },
    {
      title: "Tools and Accessories",
      description:
        "Essential tools, paints, and accessories to help you build, customize, and perfect your models.",
      image: "/products/tools.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-neutral">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Our Products
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {products.map((p) => (
          <div
            key={p.title}
            className="card bg-green-300 text-base-200 shadow hover:shadow-lg hover:shadow-primary transition"
          >
            {/* Image */}
            <figure className="h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Content */}
            <div className="card-body">
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="text-sm opacity-80">{p.description}</p>

              <div className="card-actions mt-4">
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
