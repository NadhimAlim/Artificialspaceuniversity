import React from "react";

const skillData = [
  {
    kategori: "Hard Skills",
    icon: "🧠",
    skills: [
      "HTML, CSS, JavaScript",
      "React.js, Tailwind CSS, Bootstrap",
      "Node.js & Express.js",
      "Git & GitHub Workflow",
      "Python (AI & Data Basics)",
      "PHP & Laravel Framework",
    ],
  },
  {
    kategori: "Soft Skills",
    icon: "🤝",
    skills: [
      "Effective Communication",
      "Creative Problem Solving",
      "Time & Task Management",
      "Leadership & Initiative",
      "Adaptability in Fast-paced Teams",
      "Team Collaboration & Empathy",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50 text-gray-800 font-sans antialiased">
      <header className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-black">
          🔧 Keahlian Utama Nadhim Alim
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Dengan kombinasi keterampilan teknis dan interpersonal, saya siap membangun solusi teknologi yang tangguh dan kolaboratif.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillData.map((section, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{section.icon}</span>
              <h3 className="text-2xl font-semibold text-blue-700">{section.kategori}</h3>
            </div>
            <ul className="space-y-3 mt-2">
              {section.skills.map((skill, i) => (
                <li key={i} className="text-gray-700 text-lg leading-relaxed flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✔️</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
