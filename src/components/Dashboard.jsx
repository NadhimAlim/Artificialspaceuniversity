import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white p-6 min-h-screen">
          <div className="mb-10">
            <div className="flex items-center space-x-3">
              <div>
                <p className="text-lg font-bold">Nadhim Alim</p>
                <p className="text-sm text-gray-400">@nadhimalim</p>
              </div>
            </div>
          </div>
          <nav className="space-y-4 text-sm">
            <a href="#artikel" className="block py-2 px-3 rounded hover:bg-gray-800">Artikel</a>
            <a href="#video" className="block py-2 px-3 rounded hover:bg-gray-800">Video</a>
            <a href="#kegiatan" className="block py-2 px-3 rounded hover:bg-gray-800">Kegiatan</a>
            <a href="#dokumentasi" className="block py-2 px-3 rounded hover:bg-gray-800">Dokumentasi</a>
            <a href="/login" onClick={() => sessionStorage.clear()} className="block py-2 px-3 rounded hover:bg-red-600">Logout</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10 space-y-10">
          {/* Header Welcome */}
          <section className="bg-black text-white rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold">Selamat Datang, Nadhim 👋</h2>
            <p className="text-sm text-gray-300">Ini adalah halaman eksklusif yang berisi semua aktivitas dan karya pribadimu.</p>
          </section>

          {/* Artikel */}
          <section id="artikel">
            <h3 className="text-xl font-bold mb-4">📰 Artikel Terbaru</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow">
                <h4 className="text-lg font-semibold">Teknologi & Masa Depan</h4>
                <p className="text-sm text-gray-600">Tulisan refleksi tentang bagaimana teknologi membentuk kehidupan generasi muda...</p>
                <span className="text-xs text-gray-400">Diposting: 25 Juni 2025</span>
              </div>
            </div>
          </section>

          {/* Video */}
          <section id="video">
            <h3 className="text-xl font-bold mb-4">🎥 Video Pribadi</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded shadow">
                <video controls className="w-full rounded">
                  <source src="video/nadhim-video1.mp4" type="video/mp4" />
                </video>
                <p className="mt-2 text-sm font-medium text-gray-700">Vlog: Belajar Bareng Komunitas</p>
              </div>
            </div>
          </section>

          {/* Kegiatan */}
          <section id="kegiatan">
            <h3 className="text-xl font-bold mb-4">📅 Kegiatan Nadhim</h3>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold text-gray-800">Sharing Session: React & AI</h4>
                <p className="text-sm text-gray-600">Berbagi pengalaman tentang penerapan AI dalam pengembangan aplikasi web modern.</p>
                <span className="text-xs text-gray-400">Tanggal: 20 Juni 2025</span>
              </li>
            </ul>
          </section>

          {/* Dokumentasi */}
          <section id="dokumentasi">
            <h3 className="text-xl font-bold mb-4">📸 Dokumentasi Kegiatan</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src="https://via.placeholder.com/150" alt="Dokumentasi 1" className="rounded shadow" />
              <img src="https://via.placeholder.com/150" alt="Dokumentasi 2" className="rounded shadow" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;