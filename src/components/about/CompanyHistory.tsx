export default function CompanyHistory() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <p className="text-lg opacity-80 leading-relaxed">
        Founded with a passion for building meaningful digital products,
        our company has grown from a small team into a trusted technology
        partner for businesses of all sizes. We focus on long-term
        solutions, not short-term fixes.
      </p>

      <div className="mt-10 grid sm:grid-cols-3 gap-6">
        <div className="stat bg-base-200 rounded-box">
          <div className="stat-title">Founded</div>
          <div className="stat-value">2019</div>
        </div>

        <div className="stat bg-base-200 rounded-box">
          <div className="stat-title">Projects</div>
          <div className="stat-value">50+</div>
        </div>

        <div className="stat bg-base-200 rounded-box">
          <div className="stat-title">Clients</div>
          <div className="stat-value">30+</div>
        </div>
      </div>
    </section>
  );
}
