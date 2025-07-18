import React, { useState } from "react";
import { Link } from "react-router-dom";


const News = () => {
  const newsData = [
    {
      title: "RUU Keamanan Siber 2025 Resmi Disahkan",
      date: "14 Juli 2025",
      content:
        "Pemerintah bersama DPR RI resmi mengesahkan RUU Keamanan Siber 2025...",
    },
    {
      title: "Nadhim Alim Mengikuti Mini Class di Jogja Coding House",
      date: "8 Juli 2025",
      content:
        "Nadhim Alim mengikuti mini class Web3 & Blockchain di Jogja Coding House...",
    },
    {
      title: "Dimana Kah Pendidikan Nadhim Alim?",
      date: "5 Juli 2025",
      content:
        "Nadhim Alim adalah mahasiswa Informatika aktif di Universitas Ahmad Dahlan Yogyakarta...",
    },
    {
      title: "Kemkominfo dan DPR Bahas RUU AI",
      date: "2 Juli 2025",
      content:
        "Regulasi AI mulai dibahas menyusul peningkatan adopsi teknologi AI di sektor publik.",
    },
    {
      title: "Startup Blockchain Indonesia Raih Pendanaan",
      date: "30 Juni 2025",
      content:
        "Startup teknologi berbasis blockchain mendapat pendanaan dari investor global.",
    },
    {
      title: "Proyek Cloud Nasional Resmi Diluncurkan",
      date: "28 Juni 2025",
      content:
        "Pemerintah meluncurkan Cloud Nasional untuk mengamankan data strategis negara.",
    },
    {
      title: "Proyek Cloud Nasional Resmi Diluncurkan",
      date: "28 Juni 2025",
      content:
        "Pemerintah meluncurkan Cloud Nasional untuk mengamankan data strategis negara.",
    },
    {
      title: "Proyek Cloud Nasional Resmi Diluncurkan",
      date: "28 Juni 2025",
      content:
        "Pemerintah meluncurkan Cloud Nasional untuk mengamankan data strategis negara.",
    },
    {
      title: "Proyek Cloud Nasional Resmi Diluncurkan",
      date: "28 Juni 2025",
      content:
        "Pemerintah meluncurkan Cloud Nasional untuk mengamankan data strategis negara.",
    },
    {
      title: "Proyek Cloud Nasional Resmi Diluncurkan",
      date: "28 Juni 2025",
      content:
        "Pemerintah meluncurkan Cloud Nasional untuk mengamankan data strategis negara.",
    },
    {
      title: "Proyek Cloud Nasional Resmi Diluncurkan",
      date: "28 Juni 2025",
      content:
        "Pemerintah meluncurkan Cloud Nasional untuk mengamankan data strategis negara.",
    },
    {
      title: "Proyek Cloud Nasional Resmi Diluncurkan",
      date: "28 Juni 2025",
      content:
        "Pemerintah meluncurkan Cloud Nasional untuk mengamankan data strategis negara.",
    },
    {
      title: "Proyek Cloud Nasional Resmi Diluncurkan",
      date: "28 Juni 2025",
      content:
        "Pemerintah meluncurkan Cloud Nasional untuk mengamankan data strategis negara.",
    },
    {
      title: "Proyek Cloud Nasional Resmi Diluncurkan",
      date: "28 Juni 2025",
      content:
        "Pemerintah meluncurkan Cloud Nasional untuk mengamankan data strategis negara.",
    },
    // tambahkan lebih banyak berita jika mau
  ];

  const today = new Date();
  const tanggal = today.getDate();
  const bulan = today.toLocaleString("id-ID", { month: "long" });
  const tahun = today.getFullYear();
  const hari = today.toLocaleString("id-ID", { weekday: "long" });

  // === PAGINATION ===
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedNews = newsData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom Berita */}
        <div className="md:col-span-2 grid gap-6">
          <h1 className="text-3xl font-bold text-gray-800 pb-2">
            Berita Terbaru
          </h1>

          {selectedNews.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-blue-600"
            >
              <h2 className="text-2xl font-semibold text-blue-600">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 mb-3">{item.date}</p>
              <p className="text-gray-700 mb-4">{item.content}</p>
              {/* <button className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition duration-200">
                Baca Selengkapnya
              </button> */}
              <Link
                to={`/news/${startIndex + index}`} // ← kirim id berita berdasarkan index
                className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition duration-200"
              >
                Baca Selengkapnya
              </Link>

              
            </div>
            
          ))}

          {/* === Pagination Buttons === */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageClick(i + 1)}
                className={`px-3 py-1 rounded-md text-sm font-medium border ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 hover:bg-blue-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            
          </div>

          
        </div>

        {/* Sidebar Kalender + Trending + Newsletter */}
        {/* Sidebar Lengkap */}
        <div className="bg-white rounded-xl shadow p-6 border border-gray-200 space-y-6">
          {/* Quote Hari Ini */}
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <p className="text-sm text-gray-500 mb-1">💡 Quote Hari Ini</p>
            <p className="italic text-gray-700 font-medium">
              "jika masih diatas tanah maka masih diberi kesempatan oleh Allah
              Swt" – Nadhim Alim
            </p>
          </div>

          {/* Kalender */}
          <div className="text-center border-t pt-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Kalender
            </h3>
            <div className="text-6xl font-bold text-blue-600">{tanggal}</div>
            <div className="text-gray-600 text-xl capitalize">
              {bulan} {tahun}
            </div>
            <div className="mt-2 text-sm text-gray-500">{hari}</div>
          </div>

          {/* Trending Topik */}
          <div className="border-t pt-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">
              🔥 Trending Topik
            </h4>
            <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
              <li>Blockchain untuk Pemilu</li>
              <li>RUU Keamanan Siber</li>
              <li>AI dalam Pemerintahan</li>
              <li>Big Data & Transparansi</li>
            </ul>
          </div>

          

          {/* Newsletter */}
          <div className="border-t pt-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">
              📬 Berlangganan
            </h4>
            <p className="text-sm text-gray-500 mb-2">
              Dapatkan berita terbaru langsung ke email kamu.
            </p>
            <input
              type="email"
              placeholder="Email kamu"
              className="w-full px-3 py-2 border rounded-md text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="w-full px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/"
          className="inline-block px-5 py-3 bg-gray-100 text-blue-600 rounded-md hover:bg-gray-200 transition"
        >
          ← Kembali ke Halaman Utama
        </Link>
      </div>
    </div>
  );
};

export default News;
