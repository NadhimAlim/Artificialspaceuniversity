import React from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Divisi Media dan Digital",
    company: "HIPMI PT UAD",
    period: "Maret 2024 – Sekarang",
    desc: "Bertanggung jawab atas desain grafis, konten visual, dan dokumentasi kegiatan organisasi.",
  },
  {
    role: "Joki Tugas Informatika",
    company: "Project Freelance Mandiri",
    period: "Sep 2023 – Sekarang",
    desc: "Membantu mahasiswa menyelesaikan tugas pemrograman dan proyek berbasis teknologi.",
  },
  {
    role: "Copywriter & Digital Marketing",
    company: "Wesclic Indonesia Neotech",
    period: "Agustus 2024 – Desember 2024",
    desc: "Membuat konten artikel berbasis SEO untuk platform WordPress dan melakukan strategi promosi digital.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Pengalaman Profesional
        </h2>

        <div className="relative border-l-4 border-blue-600 pl-6 space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-4 top-1 bg-blue-600 rounded-full p-2 text-white shadow">
                <FaBriefcase size={16} />
              </div>

              <div className="bg-white shadow-md rounded-lg p-6 transition group-hover:shadow-lg">
                <h3 className="text-xl font-bold text-blue-700">{exp.role}</h3>
                <p className="text-gray-700 font-semibold">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                <p className="text-gray-600 leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
