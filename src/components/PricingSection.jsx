import React, { useState } from "react";
import portfolioImg from "../assets/portofolio.png";
import portfolioImg2 from "../assets/portofolio2.png";
import portfolioImg3 from "../assets/portofolio3.png";
import portfolioImg4 from "../assets/portofolio4.png";
import certifImg from "../assets/sertifikatlaravel.jpeg";
import certifImg2 from "../assets/sertifikatwesclic.jpeg";
import certifImg3 from "../assets/sertifikatblockchain1.jpeg";
import certifImg4 from "../assets/dokumentasiweb3.jpg";
import Vuedirectiv from "../assets/dirextivbynadhim.png";
import Vuedirectiv2 from "../assets/dirextivbynadhim2.png";

// Komponen Slider Gambar
const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative mb-3">
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        className="w-full h-40 object-cover rounded-md"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 px-2 py-1 text-sm rounded-full"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 px-2 py-1 text-sm rounded-full"
          >
            ▶
          </button>
        </>
      )}
    </div>
  );
};

// Data proyek
const projects = {
  Frontend: [
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
    {
      title: "Website Komunitas Project Iseng-Iseng",
      description: "Project backend dengan React, Tailwind & Bootstrap.",
      tech: ["React", "Tailwind", "Bootstrap"],
      image: portfolioImg,
      link: "https://codecrimping.vercel.app",
    },
    {
      title: "Membuat Card Vue.js dengan Directiv dan cara menambahkan",
      description: "Project backend dengan Vue.js.",
      tech: ["VUE JS", "Directiv Vue"],
      images: [Vuedirectiv, Vuedirectiv2],
      link: "https://github.com/NadhimAlim/vuedirectiv/tree/main/nadhimvuelatihan",
    },
  ],
  Backend: [],
  "UI/UX": [
    {
      title: "Redesign Aplikasi Sekolah Digital",
      description: "Studi UX dan UI kit berbasis Figma.",
      tech: ["Figma", "Prototype", "User Flow"],
      link: "https://www.figma.com/design/Tqf27zxaEISAJctdanlxSn/Untitled?node-id=0-1&p=f&t=SyPio4QnwoZvQkE8-0",
    },
    {
      title: "Landing Page Video live Streaming",
      description: "Konsep hero & layout modern untuk travel-startup.",
      tech: ["Figma", "Hero Section", "UI Trend 2025"],
      link: "https://www.figma.com/design/LVdZLFCIiNABs3zqFnCtSF/Video-Live-Streaming-Service--Community-?node-id=216-23&p=f&t=lRBWpprohukIcdPs-0",
    },
  ],
  Mobile: [],
  AI: [
    {
      title:
        "Sistem Otomatisasi Klasifikasi Prestasi Akademik Siswa Berbasis AI dan Algoritma Random Forest",
      description: "Tugas Akhir Semester KCB",
      tech: ["Python", "Random Forest", "Sklearn", "Pandas"],
      link: "#",
    },
  ],
  Sertifikat: [
    {
      title: "Sertifikat Laravel 9",
      description: "Kursus Online Laravel di Coding Studio",
      image: certifImg,
      link: "./assets/sertifikatlaravel.jpeg",
    },
    {
      title: "Magang Copywriting di Wesclic",
      description: "Program magang di Wesclic Neo",
      image: certifImg2,
      link: "./assets/sertifikatwesclic.jpeg",
    },
    {
      title: "Kursus Dasar Web3 & Blockchain",
      description: "Kursus online Web3 di MySkill",
      image: certifImg3,
      link: "./assets/sertifikatblockchain1.jpeg",
    },
    {
      title: "Mini Class Web3 & Blockchain",
      description: "Mini Class Web3 di Jogja Coding House",
      image: certifImg4,
      link: "./assets/dokumentasiweb3.jpeg",
    },
  ],
};

const PortfolioSection = () => {
  const [activeCat, setActiveCat] = useState("Frontend");
  const list = projects[activeCat];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <header className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">💼 Portofolio Nadhim</h2>
          <p className="text-gray-500 mt-2">
            Pilih kategori untuk melihat proyek dan sertifikat yang pernah saya selesaikan.
          </p>
        </header>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.length ? (
            list.map((p, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                {/* Gambar Utama atau Slider */}
                {p.images ? (
                  <ImageSlider images={p.images} />
                ) : p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                ) : null}

                <h3 className="text-lg font-bold text-blue-700 mb-1">{p.title}</h3>
                <p className="text-gray-700 mb-3 text-sm">{p.description}</p>

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
