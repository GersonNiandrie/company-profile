type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: "Hiro Tanaka",
    role: "Founder & Master Builder",
    bio: "Founded the store out of a lifelong passion for Gunpla and model kits. Oversees curation, quality, and community events.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maya Collins",
    role: "Product Specialist",
    bio: "Helps customers choose the right kits, tools, and paints. Known for her clean builds and expert customization tips.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Ryan Park",
    role: "Workshop & Community Lead",
    bio: "Runs in-store workshops, build nights, and beginner sessions. Passionate about making model building accessible to everyone.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-base-200 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Meet the Builders
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="card bg-base-100 shadow-lg"
            >
              <div className="card-body text-center">
                <div className="avatar mx-auto mb-4">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={member.image} alt={member.name} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm opacity-70">{member.role}</p>
                <p className="mt-3 text-sm opacity-80">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
