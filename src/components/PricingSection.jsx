import React, { useState } from "react";

const allProjects = {
  Website: [
    {
      title: "Sistem Akademik Sekolah",
      description: "Platform manajemen siswa & guru berbasis Laravel.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      link: "#",
    },
    {
      title: "Portfolio Website Interaktif",
      description: "Website pribadi berbasis React & Tailwind CSS.",
      tech: ["React", "Tailwind"],
      link: "#",
    },
  ],
  "UI/UX": [
    {
      title: "Redesign Aplikasi Bank",
      description: "Studi UX dan pembuatan UI Kit mobile banking.",
      tech: ["Figma", "Prototype", "User Flow"],
      link: "#",
    },
    {
      title: "Desain Landing Page Travel",
      description: "Konsep desain landing page untuk startup travel.",
      tech: ["Figma", "Hero Section", "UI Trend 2025"],
      link: "#",
    },
  ],
  AI: [],
  Mobile: [],
};

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Website");

  const availableProjects = allProjects[activeCategory];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">💼 Portofolio Nadhim</h2>
          <p className="text-gray-500 mt-2">
            Pilih kategori untuk melihat proyek yang pernah saya kerjakan.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {Object.keys(allProjects).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border font-semibold transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {availableProjects.length > 0 ? (
            availableProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 font-semibold hover:underline"
                >
                  🔗 Lihat Proyek
                </a>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center text-gray-500">
              <p className="text-lg">🚧 Belum ada proyek untuk kategori ini.</p>
              <button
                className="mt-4 px-5 py-2 bg-gray-200 text-gray-600 rounded-full cursor-not-allowed"
                disabled
              >
                Segera Hadir
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;


