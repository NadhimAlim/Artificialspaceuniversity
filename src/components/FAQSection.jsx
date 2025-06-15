import React, { useState } from "react";

const faqs = [
  {
    id: "faq1",
    question: "Apakah saya perlu memiliki dasar coding sebelum bergabung?",
    answer:
      "Tidak wajib! Program ini dirancang untuk pemula absolut hingga mereka yang ingin memperdalam keahlian. Kami akan membimbing Anda dari nol hingga siap membangun aplikasi web lengkap.",
  },
  {
    id: "faq2",
    question:
      "Bagaimana bisa menjadi Fullstack Developer hanya dalam 3 bulan?",
    answer:
      "Kurikulum kami sangat intensif dan fokus pada teknologi yang paling relevan di industri. Dengan pendekatan berbasis proyek nyata dan mentor berpengalaman, Anda akan belajar dengan cepat dan efektif.",
  },
  {
    id: "faq3",
    question:
      "Bagaimana bisa menjadi Fullstack Developer hanya dalam 3 bulan?",
    answer:
      "Kurikulum kami sangat intensif dan fokus pada teknologi yang paling relevan di industri. Dengan pendekatan berbasis proyek nyata dan mentor berpengalaman, Anda akan belajar dengan cepat dan efektif.",
  },
  {
    id: "faq4",
    question: "Apakah ada jaminan pekerjaan setelah lulus?",
    answer:
      "Kami tidak memberikan jaminan pekerjaan langsung, namun kami menyediakan dukungan karir seperti sesi persiapan wawancara, pembuatan portofolio, dan koneksi dengan industri untuk meningkatkan peluang Anda mendapatkan pekerjaan.",
  },
  {
    id: "faq5",
    question: "Apa saja syarat untuk bergabung dengan program ini?",
    answer:
      "Syarat utamanya adalah komitmen tinggi untuk belajar, memiliki komputer dengan koneksi internet yang stabil, dan semangat untuk menjadi Fullstack Developer. Tidak ada batasan usia atau latar belakang pendidikan khusus.",
  },
  {
    id: "faq6",
    question:
      "Bisakah saya belajar secara fleksibel atau hanya di jam tertentu?",
    answer:
      "Program kami menawarkan berbagai jadwal, termasuk kelas reguler dan fleksibel (online/offline) untuk menyesuaikan dengan kesibukan Anda. Anda bisa memilih opsi yang paling cocok.",
  },
];

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-sm overflow-hidden"
            >
              <button
                className="flex items-center justify-between w-full p-3 text-left text-xs font-medium text-gray-700 hover:bg-gray-100 transition"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="pr-2">{faq.question}</span>
                <svg
                  className={`w-3 h-3 transform transition-transform duration-150 ${
                    openFaq === faq.id ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openFaq === faq.id && (
                <div className="px-3 pb-2 text-xs border-t border-gray-100 bg-white">
                  <p className="text-gray-600 pt-2">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
