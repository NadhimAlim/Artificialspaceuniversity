"use client";
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

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// import style swiper
import "swiper/css";

const hardSkills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 text-5xl" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-5xl" />,
  },
  {
    name: "React",
    icon: <SiReact className="text-cyan-400 text-5xl animate-spin-slow" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-600 text-5xl" />,
  },
  { name: "PHP", icon: <SiPhp className="text-indigo-600 text-5xl" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500 text-5xl" /> },
  { name: "Git", icon: <SiGit className="text-red-500 text-5xl" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-500 text-5xl" /> },
  { name: "Github", icon: <SiGithub className="text-black text-5xl" /> },
  { name: "Solidity", icon: <SiSolidity className="text-gray-700 text-5xl" /> },
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
            💡 Skill Yang Pernah Dipelajarin{" "}
            <span className="text-blue-600">Nadhim Alim</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Kombinasi keahlian teknis dan interpersonal untuk membangun solusi
            teknologi yang berdampak.
          </p>
        </div>

        {/* Hard Skills Slider */}
        <div className="mb-20 mt-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
          >
            {hardSkills.map((skill, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center shadow hover:shadow-lg transition">
                  <div className="mb-3">{skill.icon}</div>
                  <span className="text-sm font-medium text-gray-800">
                    {skill.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Soft Skills Section */}
        <div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {softSkills.map((skill, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="bg-blue-100 rounded-xl p-6 text-blue-900 shadow hover:shadow-md transition"
      >
        <p className="text-md font-medium flex items-start">
          <span className="text-blue-700 mr-2 text-lg">✔️</span> {skill}
        </p>
      </motion.div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default SkillPage;
