import React, { useState } from "react";

const PricingSection = () => {
  const [showPromo, setShowPromo] = useState(false);

  return (
    <section id="pricing" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Pilih Paket Belajar Anda</h2>
          <p className="text-gray-500 mt-2">Pilih paket yang sesuai dengan kebutuhan belajar Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* STARTER PLAN */}
          <div className="bg-white border-2 border-green-500 rounded-xl p-6 shadow-sm">
            <h3 className="text-green-600 text-xl font-bold text-center mb-4">
              🌱 STARTER PLAN
            </h3>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-green-600">Rp 0</h2>
              <p className="text-gray-500 text-sm">Selamanya gratis</p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  ✅
                </div>
                <div>
                  <p className="font-semibold">Akses Materi Dasar</p>
                  <p className="text-gray-500 text-sm">100+ video pembelajaran di YouTube</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  👥
                </div>
                <div>
                  <p className="font-semibold">Komunitas Publik</p>
                  <p className="text-gray-500 text-sm">Forum diskusi terbatas</p>
                </div>
              </li>

              {["Akses Video Premium", "Sesi Mentoring", "Dukungan Prioritas"].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="p-2 bg-red-100 rounded-full mr-3">🔒</div>
                  <div>
                    <p className="text-gray-400">{item}</p>
                    <p className="text-gray-400 text-sm">Tersedia di paket premium</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <button className="w-full border-2 border-green-600 text-green-600 py-3 font-bold rounded-lg hover:bg-green-600 hover:text-white transition">
                ▶️ MULAI SEKARANG
              </button>
              <p className="text-center text-gray-500 text-sm mt-3">
                👨‍👩‍👧‍👦 5,000+ member gratis
              </p>
            </div>
          </div>

          {/* PREMIUM PLAN */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-black">💎 PREMIUM ALL ACCESS</h3>
              <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">🔥 MOST POPULAR</span>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-blue-600">Rp 2.000.000</h2>
              <p className="text-gray-500 text-sm">/tahun (Rp 166.000/bulan)</p>
            </div>

            <ul className="space-y-4">
              {[
                ["Full Akses Video Premium", "500+ modul belajar teknologi lengkap"],
                ["Komunitas VIP Eksklusif", "Networking dengan profesional"],
                ["Alat Developer Profesional", "GitHub Pro, VS Code Extensions, dll"],
                ["Mentoring 1-on-1", "4 sesi privat dengan mentor ahli"],
                ["Bonus Eksklusif", "Workshop offline, template project, & sertifikat"]
              ].map(([title, desc], idx) => (
                <li key={idx} className="flex items-start">
                  <div className="p-2 bg-blue-100 rounded-full mr-3">✅</div>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-4">
              <button className="w-full bg-blue-600 text-white py-3 font-bold rounded-lg hover:bg-blue-700 transition">
                🚀 DAFTAR SEKARANG
              </button>

              <div className="text-center">
                <button
                  className="text-sm text-blue-600 hover:underline"
                  onClick={() => setShowPromo(!showPromo)}
                >
                  🎫 Punya Kode Promo?
                </button>
              </div>

              {showPromo && (
                <div className="mt-2 flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
                    placeholder="Masukkan kode promo"
                  />
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                    🚀 DAFTAR SEKARANG
                  </button>
                </div>
              )}
            </div>

            <p className="text-center text-gray-500 text-sm mt-3">
              ⚡ 1,200+ member aktif
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
