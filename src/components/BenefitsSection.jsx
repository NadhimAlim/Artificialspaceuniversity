import React from "react";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Perjalanan Pendidikan Nadhim Alim
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Dari sekolah dasar hingga perguruan tinggi — membangun fondasi dan
            semangat belajar yang terus berkembang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full"
            >
              <div className="p-6 text-center">
                <div className="bg-blue-50 rounded-full p-4 inline-block mb-4">
                  <i className={`${item.icon} text-blue-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm"
                >
                  Kunjungi Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const education = [
  {
    icon: "fas fa-school",
    title: "SDIT Baitussalam Prambanan",
    link: "https://baitussalam.sch.id/sdit-baitussalam-1/", // ganti jika ada link yang lebih akurat
  },
  {
    icon: "fas fa-book-reader",
    title: "SMP N 2 Piyungan Bantul",
    link: "https://smpn2piyungan.sch.id/", // periksa keabsahannya
  },
  {
    icon: "fas fa-graduation-cap",
    title: "MAN 3 Bantul - MIPA",
    link: "https://man3bantul.sch.id/",
  },
  {
    icon: "fas fa-university",
    title: "UAD - Prodi Informatika",
    link: "https://tif.uad.ac.id/", // ganti dengan URL universitasmu jika tersedia
  },
];

export default BenefitsSection;
