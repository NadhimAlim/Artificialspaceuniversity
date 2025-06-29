import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// ─── DATA KELAS VIDEO & EVENT ─────────────────────────────────────────────
const CLASSES = [
  {
    title: "Full-Stack Web Development",
    description: "Bangun aplikasi web modern dengan HTML, CSS, React & Node.js.",
    video: "classes/fullstack-web.mp4",
    date: "Update: 25 Juni 2025",
  },
  {
    title: "Pemrograman Android Kotlin",
    description: "Pelajari Kotlin dan buat aplikasi yang siap rilis di Play Store.",
    video: "classes/android-kotlin.mp4",
    date: "Update: 18 Juni 2025",
  },
  {
    title: "Dasar-Dasar AI & Machine Learning",
    description: "Konsep supervised learning dan implementasi model ML.",
    video: "classes/ai-ml-fundamentals.mp4",
    date: "Update: 10 Juni 2025",
  },
];

const EVENTS = [
  {
    title: "Bootcamp Full-Stack 7 Hari",
    desc: "Intensif membangun aplikasi web produksi. Sertifikat & mentoring.",
    date: "12 – 18 Juli 2025",
  },
  {
    title: "Workshop UI/UX untuk Developer",
    desc: "Memahami prinsip desain antarmuka fungsional.",
    date: "24 Agustus 2025",
  },
];

// ─── DASHBOARD COMPONENT ───────────────────────────────────────────────────
const Dashboard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // sidebar toggle mobile

  useEffect(() => {
    if (!sessionStorage.getItem("isLoggedIn")) navigate("/login");
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
      {/* ── SIDEBAR ─────────────────────────────────────────────── */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-20 w-64 shrink-0 bg-gray-900 text-white p-6 transform ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"} transition-transform duration-300`}
      >
        {/* Close button (mobile) */}
        <button
          aria-label="Close sidebar"
          className="md:hidden mb-4 text-xl"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <div className="mb-10">
          <p className="text-lg font-bold leading-tight">Nadhim Alim</p>
          <p className="text-sm text-gray-400">Kelas Teknologi & Informatika</p>
        </div>

        <nav className="space-y-1">
          <NavLink href="#kelas" icon="🎓" label="Kelas Video" />
          <NavLink href="#event" icon="🎫" label="Event & Workshop" />
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

      {/* Overlay when sidebar open on mobile */}
      {open && <div className="fixed inset-0 bg-black/50 z-10 md:hidden" onClick={() => setOpen(false)} />}

      {/* ── MAIN ──────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow px-4 py-3 flex items-center gap-4">
          <button aria-label="Open sidebar" className="md:hidden text-xl" onClick={() => setOpen(true)}>
            ☰
          </button>
          <h1 className="text-lg font-bold">Dashboard Kelas</h1>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-10">
          {/* Greeting */}
          <section className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-600 text-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-1">Selamat Datang, Nadhim 👋</h2>
            <p className="text-sm text-indigo-200">Kelola kelas video & event teknologi kamu dengan mudah.</p>
          </section>

          {/* Video Classes */}
          <section id="kelas">
            <h3 className="text-xl font-bold mb-4">🎓 Kelas Video Teknologi</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CLASSES.map((cls, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-md flex flex-col">
                  <video controls className="w-full rounded mb-3 aspect-video bg-black">
                    <source src={cls.video} type="video/mp4" />
                  </video>
                  <h4 className="text-lg font-semibold leading-tight mb-1">{cls.title}</h4>
                  <p className="text-sm text-gray-600 flex-1">{cls.description}</p>
                  <span className="text-xs text-gray-400 mt-2">{cls.date}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Events */}
          <section id="event">
            <h3 className="text-xl font-bold mb-4">🎫 Event & Workshop</h3>
            <div className="space-y-4">
              {EVENTS.map((ev, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-1">{ev.title}</h4>
                  <p className="text-sm text-gray-600">{ev.desc}</p>
                  <span className="text-xs text-gray-400">{ev.date}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;