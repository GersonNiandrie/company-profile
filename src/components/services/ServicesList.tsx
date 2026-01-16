type Service = {
  title: string;
  description: string;
  price?: string;
};

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies, focusing on performance and scalability.",
    price: "Starting from $1,500",
  },
  {
    title: "UI / UX Design",
    description:
      "User-centered design that enhances usability and improves customer engagement.",
    price: "Starting from $800",
  },
  {
    title: "Technical Consulting",
    description:
      "Expert guidance on architecture, technology choices, and development workflows.",
  },
];

export default function ServicesList() {
  return (
    <section className="bg-base-200 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">{service.title}</h2>
              <p className="opacity-80">{service.description}</p>

              {service.price && (
                <p className="mt-4 font-semibold text-primary">
                  {service.price}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
