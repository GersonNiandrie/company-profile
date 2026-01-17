export default function CompanyHistory() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <p className="text-lg opacity-80 leading-relaxed">
        Our store began with a simple passion for building model kits and a desire to make quality kits more accessible to fellow hobbyists. 
        What started as a small operation serving local builders has grown into a dedicated model kit store trusted by enthusiasts of all skill levels.

        Over time, we expanded our selection to include a wider range of model kits, tools, and accessories, while staying true to our core focus on quality, authenticity, and community. 
        Today, we continue to grow alongside the hobby, supporting builders from their first kit to their most ambitious projects.
      </p>

      <div className="mt-10 grid sm:grid-cols-3 gap-6">
        <div className="stat bg-base-200 rounded-box">
          <div className="stat-title">Founded</div>
          <div className="stat-value">2019</div>
        </div>

        <div className="stat bg-base-200 rounded-box">
          <div className="stat-title">Stores</div>
          <div className="stat-value">3</div>
        </div>

        <div className="stat bg-base-200 rounded-box">
          <div className="stat-title">Clients</div>
          <div className="stat-value">30+</div>
        </div>
      </div>
    </section>
  );
}
