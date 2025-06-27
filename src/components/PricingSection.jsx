import React, { useState } from "react";
import portfolioImg from "../assets/portofolio.png";
import portfolioImg2 from "../assets/portofolio2.png";
import portfolioImg3 from "../assets/portofolio3.png";
import portfolioImg4 from "../assets/portofolio4.png";
import certifImg from "../assets/sertifikatlaravel.jpeg"; // tambahkan gambarnya di folder assets
import certifImg2 from "../assets/sertifikatwesclic.jpeg"; 
import certifImg3 from "../assets/sertifikatblockchain1.jpeg"; 

const projects = {
  Website: [
    {
      title: "Website Komunitas Project Iseng-Iseng",
      description: "Project iseng untuk portofolio pribadi.",
      tech: ["React", "Tailwind", "Bootstrap"],
      image: portfolioImg,
      link: "https://codecrimping.vercel.app",
    },
    {
      title: "Portfolio Website Interaktif SiCepat",
      description: "Website berbasis HTML • CSS • JS • PHP.",
      tech: ["HTML", "CSS", "PHP", "JS"],
      image: portfolioImg2,
      link: "https://sicepat-express-btxg72k7r-nadhimalims-projects.vercel.app",
    },
    {
      title: "Website EduLearn untuk Siswa",
      description: "Landing page edukasi – HTML • CSS • JS.",
      tech: ["HTML", "CSS", "JS"],
      image: portfolioImg3,
      link: "https://nadhimedulearn.vercel.app",
    },
    {
      title: "Website Portofolio Pribadi",
      description: "Landing page edukasi – HTML • CSS • JS.",
      tech: ["HTML", "CSS", "JS"],
      image: portfolioImg4,
      link: "https://nadhim-alimid.vercel.app",
    },
  ],
  "UI/UX": [
    {
      title: "Redesign Dashboard Sekolah",
      description: "Studi UX dan UI kit berbasis Figma.",
      tech: ["Figma", "Prototype", "User Flow"],
      link: "#",
    },
    {
      title: "Landing Page Travel-App",
      description: "Konsep hero & layout modern untuk travel-startup.",
      tech: ["Figma", "Hero Section", "UI Trend 2025"],
      link: "#",
    },
  ],
  AI: [],
  Mobile: [],
  Sertifikat: [
    {
      title: "Sertifikat Laravel 9",
      description: "Kursus Online laravel di coding studio",
      image: certifImg,
      link: "./assets/sertifikatlaravel.jpeg",
    },
    {
      title: "Magang Copywriting di wesclic",
      description: "magang di wesclic neo",
      image: certifImg2,
      link: "./assets/sertifikatwesclic.jpeg",
    },
    {
      title: "Kursus Dasar Web3 dan Blockchain",
      description: "kursus online di myskill",
      image: certifImg3,
      link: "./assets/sertifikatblockchain1.jpeg",
    },
  ],
};

const PortfolioSection = () => {
  const [activeCat, setActiveCat] = useState("Website");
  const list = projects[activeCat];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <header className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">💼 Portofolio Nadhim</h2>
          <p className="text-gray-500 mt-2">
            Pilih kategori untuk melihat proyek yang pernah saya kerjakan.
          </p>
        </header>

        {/* Filter */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {Object.keys(projects).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 rounded-full border font-semibold transition ${
                activeCat === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.length ? (
            list.map((p, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                )}

                <h3 className="text-lg font-bold text-blue-700 mb-1">{p.title}</h3>
                <p className="text-gray-700 mb-3 text-sm">{p.description}</p>

                {/* Sertifikat download button */}
                {activeCat === "Sertifikat" ? (
                  <a
                    href={p.link}
                    download
                    className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm transition"
                  >
                    ⬇ Download Sertifikat
                  </a>
                ) : (
                  <>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech?.map((t, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-600 text-[11px] px-2 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-600 hover:underline"
                    >
                      🔗 Lihat Proyek
                    </a>
                  </>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              <p className="text-lg">🚧 Belum ada item untuk kategori ini.</p>
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
