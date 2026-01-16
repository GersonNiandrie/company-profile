export default function ServicesTestimonials() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Trusted by Our Clients
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            quote:
              "Their development team delivered a fast, scalable product that exceeded expectations.",
            client: "Startup Founder",
          },
          {
            quote:
              "The design work significantly improved our product usability.",
            client: "Product Manager",
          },
          {
            quote:
              "Clear communication and strong technical insights throughout the project.",
            client: "Business Owner",
          },
        ].map((t) => (
          <div key={t.client} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <p className="italic">“{t.quote}”</p>
              <span className="mt-4 font-semibold">— {t.client}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
