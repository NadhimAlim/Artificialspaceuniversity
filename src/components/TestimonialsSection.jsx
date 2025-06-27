import React from "react";

const newsData = [
  {
    title: "AI dan Masa Depan Dunia Kerja",
    source: "Kompas Tekno",
    date: "27 Juni 2025",
    summary:
      "AI diprediksi akan menggantikan banyak pekerjaan rutin, namun juga membuka peluang baru di bidang kreatif dan analitik.",
    link: "https://tekno.kompas.com/read/ai-dan-masa-depan",
  },
  {
    title: "Tailwind CSS Kian Mendominasi",
    source: "DetikINET",
    date: "26 Juni 2025",
    summary:
      "Tailwind CSS semakin populer karena fleksibilitas tinggi dan integrasi yang mudah dengan framework modern.",
    link: "https://inet.detik.com/read/tailwind-populer",
  },
  {
    title: "Web3: Masa Depan Internet",
    source: "Tech in Asia",
    date: "25 Juni 2025",
    summary:
      "Web3 membawa konsep kepemilikan digital dan desentralisasi sebagai fondasi internet generasi berikutnya.",
    link: "https://www.techinasia.com/web3-revolusi-internet",
  },
  {
    title: "Python Masih Raja Pemrograman",
    source: "Stack Overflow",
    date: "24 Juni 2025",
    summary:
      "Python tetap jadi bahasa favorit developer global karena kesederhanaan dan dukungan ekosistem AI.",
    link: "https://stackoverflow.com/read/python-2025",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">📰 Berita Teknologi</h2>
          <p className="text-lg text-gray-600 mt-2">
            Update terkini dunia teknologi, pemrograman, dan inovasi digital.
          </p>
        </div>

        {/* Scrollable container */}
        <div className="overflow-x-auto">
          <div className="flex space-x-6 snap-x snap-mandatory pb-4 px-1">
            {newsData.map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-[340px] lg:min-w-[380px] snap-center bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {item.source} • {item.date}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 font-semibold hover:underline"
                  >
                    Baca Selengkapnya →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
