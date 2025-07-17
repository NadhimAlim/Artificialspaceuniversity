import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiGit,
  SiLaravel,
  SiGithub,
  SiSolidity,
} from "react-icons/si";

const hardSkills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
  { name: "React", icon: <SiReact className="text-cyan-400 text-5xl animate-spin-slow" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600 text-5xl" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-600 text-5xl" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500 text-5xl" /> },
  { name: "Git", icon: <SiGit className="text-red-500 text-5xl" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-500 text-5xl" /> },      // ✔️ Sesuai (Laravel = Merah)
{ name: "Github", icon: <SiGithub className="text-black text-5xl" /> },          // ✔️ Ganti ke hitam (Github = Hitam/putih)
{ name: "Solidity", icon: <SiSolidity className="text-gray-700 text-5xl" /> },  // ✔️ Ganti ke abu gelap (Solidity = Abu/Hitam)


];

const softSkills = [
  "Komunikasi yang Efektif",
  "Pemecahan Masalah secara Kreatif",
  "Manajemen Waktu dan Tugas",
  "Kepemimpinan dan Inisiatif",
  "Adaptasi dalam Tim yang Dinamis",
  "Kolaborasi Tim dan Empati",
  "Kemampuan Berpikir Kritis",
  "Etika dan Tanggung Jawab Kerja",
  "Kemampuan Mendengarkan secara Aktif",
  "Pengambilan Keputusan yang Bijak",
  "Ketekunan dan Disiplin",
  "Manajemen Stres dan Emosi",
];


const SkillPage = () => {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            💡 Skill Yang Pernah Dipelajarin <span className="text-blue-600">Nadhim Alim</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Kombinasi keahlian teknis dan interpersonal untuk membangun solusi teknologi yang berdampak.
          </p>
        </div>

        {/* Hard Skills Section */}
        <div className="mb-20">
          {/* <h3 className="text-2xl font-semibold text-blue-700 mb-6">🚀 Hard Skills</h3> */}
          <div className="overflow-x-auto">
            <div className="flex gap-6 w-max snap-x snap-mandatory pb-4 px-1">
              {hardSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="snap-center min-w-[130px] bg-white rounded-xl p-5 flex flex-col items-center justify-center text-center shadow hover:shadow-lg transition"
                >
                  <div className="mb-3">{skill.icon}</div>
                  <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          {/* <h3 className="text-2xl font-semibold text-blue-700 mb-6">🤝 Soft Skills</h3> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, i) => (
              <div
                key={i}
                className="bg-blue-100 rounded-xl p-6 text-blue-900 shadow hover:shadow-md transition"
              >
                <p className="text-md font-medium flex items-start">
                  <span className="text-blue-700 mr-2 text-lg">✔️</span> {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillPage;
