type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

const team: TeamMember[] = [
  {
    name: "John Doe",
    role: "CEO",
    bio: "Leads the company with a focus on vision and long-term growth.",
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    bio: "Architects scalable systems and mentors the engineering team.",
  },
  {
    name: "Alex Johnson",
    role: "UI / UX Designer",
    bio: "Designs intuitive interfaces and delightful user experiences.",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-base-200 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Meet the Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="avatar mx-auto mb-4">
                  <div className="w-24 rounded-full bg-base-300" />
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
