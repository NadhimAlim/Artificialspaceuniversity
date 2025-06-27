import React from "react";

const education = [
  {
    step: 1,
    icon: "fas fa-school",
    title: "SDIT Baitussalam Prambanan",
    link: "https://baitussalam.sch.id/sdit-baitussalam-1/",
  },
  {
    step: 2,
    icon: "fas fa-book-reader",
    title: "SMP N 2 Piyungan Bantul",
    link: "https://smpn2piyungan.sch.id/",
  },
  {
    step: 3,
    icon: "fas fa-graduation-cap",
    title: "MAN 3 Bantul – MIPA",
    link: "https://man3bantul.sch.id/",
  },
  {
    step: 4,
    icon: "fas fa-university",
    title: "Universitas Ahmad Dahlan – Informatika",
    link: "https://tif.uad.ac.id/",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            📚 Perjalanan Pendidikan Nadhim Alim
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Dari Sekolah Dasar hingga Universitas — membangun fondasi dan semangat belajar yang terus tumbuh.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Garis horizontal */}
          <div className="absolute top-14 left-0 right-0 hidden lg:block border-t-2 border-blue-200 z-0"></div>
          {/* Garis vertikal (mobile/tablet) */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-blue-200 lg:hidden z-0"></div>

          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 z-10"
            >
              {/* Number in circle */}
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-blue-600 text-white text-lg font-bold rounded-full mb-4">
                {edu.step}
              </div>

              {/* Icon */}
              <div className="text-blue-500 text-2xl mb-3">
                <i className={edu.icon}></i>
              </div>

              {/* Title */}
              <h3 className="text-md font-semibold text-gray-800 mb-2">
                {edu.title}
              </h3>

              {/* Link */}
              <a
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                🔗 Kunjungi Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
