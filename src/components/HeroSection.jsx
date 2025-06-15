import React from "react";
// import heroImg from "../assets/hero1.jpeg";

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-12 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Belajar <span className="text-yellow-400">Teknologi Terkini</span>
              <br /> Mulai dari Nol Hingga Mahir
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              Akses semua modul pembelajaran: Fullstack, UI/UX, Cyber Security,
              Mobile Development, AI, dan lainnya. Hanya dengan{" "}
              <span className="font-bold text-yellow-400">Rp 2 juta</span>,
              Anda bisa belajar semua materi selama 1 tahun penuh!
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="#enroll" className="bg-white text-blue-600 px-6 py-4 font-bold rounded-md shadow-sm hover:shadow-md transition flex items-center">
                <i className="fas fa-rocket mr-2"></i>Daftar Sekarang
              </a>
              <a href="#benefits" className="border border-white text-white px-6 py-4 font-bold rounded-md hover:bg-black hover:text-blue-600 transition flex items-center">
                <i className="fas fa-info-circle mr-2"></i>Pelajari Lebih Lanjut
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                <img src="https://randomuser.me/api/portraits/women/45.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="Student" />
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full border-2 border-white -ml-3" alt="Student" />
                <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-10 h-10 rounded-full border-2 border-white -ml-3" alt="Student" />
              </div>
              <div>
                <p className="font-bold">1,200+ Alumni</p>
                <div className="text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span className="text-white ml-1">(4.9/5)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            <img src="/img/hero1.jpeg" alt="Belajar Teknologi" className="w-full rounded-xl shadow-lg transform -skew-y-3 hover:skew-y-0 transition duration-300" />
            <div className="absolute bg-yellow-400 text-gray-900 p-3 rounded-lg shadow-sm bottom-5 -left-5 w-48">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-2 mr-2">
                  <i className="fas fa-medal text-yellow-400"></i>
                </div>
                <div>
                  <p className="font-bold">Platform Terfavorit</p>
                  <p className="text-xs">EdTech Awards 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
