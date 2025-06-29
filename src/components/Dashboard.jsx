import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// ─── MOCK DATA (bisa diganti API) ────────────────────────────────────────────
const ARTICLES = [
  {
    title: "Teknologi & Masa Depan",
    snippet: "Refleksi tentang peran teknologi dalam membentuk generasi muda...",
    date: "25 Juni 2025",
  },
  {
    title: "Belajar React Lebih Seru",
    snippet: "Tips & trik membuat komponen reusable dan performa tinggi...",
    date: "21 Juni 2025",
  },
  {
    title: "Belajar React Lebih Seru",
    snippet: "Tips & trik membuat komponen reusable dan performa tinggi...",
    date: "21 Juni 2025",
  },
  {
    title: "Belajar React Lebih Seru",
    snippet: "Tips & trik membuat komponen reusable dan performa tinggi...",
    date: "21 Juni 2025",
  },
];

const VIDEOS = [
  {
    src: "video/nadhim-video1.mp4",
    title: "Vlog: Belajar Bareng Komunitas",
  },
];

const ACTIVITIES = [
  {
    title: "Sharing Session: React & AI",
    desc: "Berbagi pengalaman tentang penerapan AI dalam aplikasi web.",
    date: "20 Juni 2025",
  },
];

const PHOTOS = [
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/301",
  "https://via.placeholder.com/302",
  "https://via.placeholder.com/303",
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
const Dashboard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // sidebar toggle for mobile

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) navigate("/login");
  }, [navigate]);

  const NavLink = ({ href, icon, label }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-800"
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{label}</span>
    </a>
  );

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      {/* ─── SIDEBAR ─────────────────────────────────────────────── */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-20 w-64 shrink-0 bg-gray-900 text-white p-6 transform ${
              open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            } transition-transform duration-300`}
      >
        {/* Close (mobile) */}
        <button
          aria-label="Close sidebar"
          className="md:hidden mb-4 text-xl"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <div className="mb-10">
          <p className="text-lg font-bold leading-tight">Nadhim Alim</p>
          <p className="text-sm text-gray-400">@nadhimalim</p>
        </div>

        <nav className="space-y-1">
  <NavLink href="#artikel" icon="📰" label="Artikel" />
  <NavLink href="#video" icon="🎥" label="Video" />
  
  <button
    onClick={() => {
      sessionStorage.clear();
      navigate("/login");
    }}
    className="flex items-center gap-2 py-2 px-3 w-full bg-red-600 hover:bg-red-700 rounded mt-4 text-sm justify-center"
  >
    Logout
  </button>
</nav>

      </aside>

      {/* ─── OVERLAY (mobile) ───────────────────────────────────── */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* ─── MAIN ──────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow px-4 py-3 flex items-center gap-4">
          <button
            aria-label="Open sidebar"
            className="md:hidden text-xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
          <h1 className="text-lg font-bold">Dashboard Member</h1>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-10">
          {/* Greeting */}
          <section className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-600 text-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-1">Selamat Datang, Nadhim 👋</h2>
            <p className="text-sm text-indigo-200">Halaman eksklusif berisi aktivitas dan karya pribadi kamu.</p>
          </section>

          {/* Articles */}
          <section id="artikel">
            <h3 className="text-xl font-bold mb-4">📰 Artikel Terbaru</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ARTICLES.map((a, idx) => (
                <article key={idx} className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-1">{a.title}</h4>
                  <p className="text-sm text-gray-600 line-clamp-2">{a.snippet}</p>
                  <span className="text-xs text-gray-400 block mt-2">Diposting: {a.date}</span>
                </article>
              ))}
            </div>
          </section>

          {/* Videos */}
          <section id="video">
            <h3 className="text-xl font-bold mb-4">🎥 Video Pribadi</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VIDEOS.map((v, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-md">
                  <video controls className="w-full rounded">
                    <source src={v.src} type="video/mp4" />
                  </video>
                  <p className="mt-2 text-sm font-medium text-gray-700">{v.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Activities */}
          <section id="kegiatan">
            <h3 className="text-xl font-bold mb-4">📅 Kegiatan Nadhim</h3>
            <div className="space-y-4">
              {ACTIVITIES.map((act, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800">{act.title}</h4>
                  <p className="text-sm text-gray-600">{act.desc}</p>
                  <span className="text-xs text-gray-400">Tanggal: {act.date}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Photos */}
          <section id="dokumentasi">
            <h3 className="text-xl font-bold mb-4">📸 Dokumentasi Kegiatan</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {PHOTOS.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt={`Dokumentasi ${idx + 1}`}
                  className="rounded-lg shadow w-full object-cover aspect-square"
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
