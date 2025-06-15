import React from "react";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Kenapa Ribuan Tech Enthusiast Memilih ASU?
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Fasilitas premium, kurikulum relevan industri, dan bimbingan
            langsung dari para praktisi terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="card group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full"
            >
              <div className="p-6 text-center">
                <div className="bg-blue-50 rounded-full p-4 inline-block mb-4">
                  <i className={`${item.icon} text-blue-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const benefits = [
  {
    icon: "fas fa-laptop-code",
    title: "Kurikulum Industri Terkini",
    description:
      "Belajar MERN Stack, Next.js, TypeScript, dan teknologi terbaru yang relevan dengan kebutuhan industri.",
  },
  {
    icon: "fas fa-chalkboard-teacher",
    title: "1-on-1 Mentorship",
    description:
      "Dibimbing langsung oleh mentor dari perusahaan unicorn yang berpengalaman lebih dari 5 tahun.",
  },
  {
    icon: "fas fa-briefcase",
    title: "Portfolio Premium",
    description:
      "8+ proyek profesional termasuk 1 kolaborasi dengan startup mitra dan pembuatan CV siap kerja.",
  },
  {
    icon: "fas fa-network-wired",
    title: "Job Connector",
    description:
      "Terhubung ke 100+ perusahaan mitra dan dapatkan dukungan interview serta negosiasi gaji.",
  },
  {
    icon: "fas fa-certificate",
    title: "Sertifikasi Global",
    description:
      "Dapatkan sertifikat resmi yang diakui oleh perusahaan teknologi nasional dan internasional.",
  },
  {
    icon: "fas fa-users",
    title: "Tech Community",
    description:
      "Bergabung dalam komunitas alumni aktif dan ikuti networking event bersama profesional industri.",
  },
  {
    icon: "fas fa-calendar-alt",
    title: "Akses Penuh 1 Tahun",
    description:
      "Nikmati akses selama 1 tahun ke semua modul pembelajaran lengkap, dari AI hingga Web Dev.",
  },
  {
    icon: "fas fa-comments",
    title: "Code Review Harian",
    description:
      "Submit kode Anda setiap hari dan dapatkan masukan langsung dari mentor & reviewer profesional.",
  },
  {
    icon: "fas fa-clock",
    title: "Flexible Learning",
    description:
      "Belajar kapan saja sesuai waktu luang Anda, tanpa terikat jam tetap atau zona waktu.",
  },
];

export default BenefitsSection;
