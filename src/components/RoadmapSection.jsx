import React from "react";

const kelasData = [
  {
    nomor: 1,
    judul: "Pengantar Ilmu Komputer",
    topik: "Sejarah Komputer, Hardware, Software, Sistem Operasi",
    materi: "15 Materi",
    durasi: "1 Jam",
  },
  {
    nomor: 2,
    judul: "Logika dan Algoritma Dasar",
    topik:
      "Flowchart, Pseudocode, Struktur Kontrol, Percabangan, Perulangan, Array",
    materi: "25 Materi",
    durasi: "2 Jam",
  },
  {
    nomor: 3,
    judul: "Pengantar Pemrograman Python",
    topik: "Sintaks Dasar, Variabel, Tipe Data, Operator, Fungsi",
    materi: "30 Materi",
    durasi: "3 Jam",
  },
  {
    nomor: 4,
    judul: "Struktur Data & Algoritma Lanjutan",
    topik: "List, Stack, Queue, Tree, Graph, Searching & Sorting",
    materi: "40 Materi",
    durasi: "4 Jam",
  },
  {
    nomor: 5,
    judul: "Dasar Pemrograman Berorientasi Objek (OOP)",
    topik: "Konsep OOP: Class, Object, Inheritance, Polymorphism",
    materi: "20 Materi",
    durasi: "2 Jam",
  },
];

const RoadmapSection = () => {
  return (
    <section className="container mx-auto px-4 py-8 bg-white text-white font-sans antialiased">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-black">
          Roadmap Belajar Teknologi
        </h1>
        <p className="text-lg text-gray-400">
          Daftar kelas unggulan yang bisa kamu pelajari untuk membangun karier
          di dunia teknologi digital.
        </p>
      </header>

      <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="p-6">
          <div className="hidden md:grid grid-cols-10 gap-4 text-gray-400 font-semibold mb-4 pb-2 border-b border-gray-700">
            <div className="col-span-1">#</div>
            <div className="col-span-3">Judul Kelas</div>
            <div className="col-span-3">Topik Pembelajaran</div>
            <div className="col-span-2">Total Materi</div>
            <div className="col-span-1">Durasi</div>
          </div>

          {kelasData.map((kelas, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-10 gap-4 py-4 border-b border-gray-700"
            >
              <div className="md:col-span-1 text-gray-400">{kelas.nomor}</div>
              <div className="md:col-span-3 font-semibold">
                {kelas.judul}
              </div>
              <div className="md:col-span-3 text-gray-300 text-sm md:text-base">
                {kelas.topik}
              </div>
              <div className="md:col-span-2 text-gray-300">{kelas.materi}</div>
              <div className="md:col-span-1 text-gray-300">{kelas.durasi}</div>
            </div>
          ))}

          <div className="mt-8 text-center">
            <a
              href="#semua-materi"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-lg"
            >
              Dapatkan akses ke semua materi!
            </a>
            <p className="text-sm text-gray-500 mt-2">
              Awali langkahmu menuju dunia teknologi dengan percaya diri!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
