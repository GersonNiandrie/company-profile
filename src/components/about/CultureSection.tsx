export default function CultureSection() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Our Culture</h2>

      <p className="opacity-80 leading-relaxed mb-10">
        We believe that great products are built by empowered teams.
        Our culture emphasizes collaboration, ownership, and continuous
        learning.
      </p>

      <div className="grid sm:grid-cols-3 gap-6">
        {[
          "Open communication and transparency",
          "Continuous learning and improvement",
          "Respect for work-life balance",
        ].map((value) => (
          <div key={value} className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <p>{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
