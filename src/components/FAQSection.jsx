import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa";

/* ─── Semua pertanyaan & jawaban ─── */
const faqs = [
  /* ── PERSONAL ── */
  {
    id: "faq1",
    question: "Siapa Nadhim Alim?",
    answer:
      "Saya mahasiswa Informatika yang aktif dalam Web Development, UI/UX, dan AI. Juga terlibat di HIPMI PT UAD sebagai Divisi Media & Digital.",
  },
  {
    id: "faq2",
    question: "Apa motivasi utama terjun ke dunia teknologi?",
    answer:
      "Teknologi mampu mengubah kehidupan sehari-hari. Saya ingin menciptakan solusi digital yang bermanfaat, khususnya di bidang edukasi dan efisiensi kerja.",
  },
  {
    id: "faq3",
    question: "Apa minat utama dalam dunia IT?",
    answer:
      "Frontend Development, UI/UX Design, AI, Web3, serta membangun proyek React & Tailwind CSS.",
  },
  {
    id: "faq4",
    question: "Pengalaman organisasi atau komunitas?",
    answer:
      "Aktif di HIPMI PT UAD, proyek freelance, dan komunitas open-source. Belajar manajemen tim serta komunikasi lintas-disiplin.",
  },
  {
    id: "faq5",
    question: "Mimpi besar ke depan?",
    answer:
      "Mendirikan startup teknologi berdampak dan menjadi mentor bagi pemula di bidang IT.",
  },

  /* ── HRD / INTERVIEW ── */
  {
    id: "faq6",
    question: "Apa kelebihan utama yang Anda miliki?",
    answer:
      "Adaptif, komunikatif, serta nyaman bekerja dalam tim Agile. Penguasaan Frontend & UI/UX membantu saya menjembatani developer–designer.",
  },
  {
    id: "faq7",
    question: "Sebutkan satu kelemahan dan cara mengatasinya.",
    answer:
      "Cenderung terlalu detail-oriented. Saya atasi dengan menetapkan batas waktu review dan memprioritaskan tugas krusial terlebih dahulu.",
  },
  {
    id: "faq8",
    question: "Mengapa perusahaan harus merekrut Anda?",
    answer:
      "Saya membawa kombinasi skill teknis (React, Tailwind, Laravel) dan soft-skill (leadership, problem-solving). Siap memberi dampak cepat melalui pengalaman proyek nyata.",
  },
  {
    id: "faq9",
    question: "Berapa ekspektasi gaji Anda?",
    answer:
      "Gaji saya fleksibel—menyesuaikan range yang ditawarkan perusahaan dan tanggung jawab posisi. Saya terbuka untuk berdiskusi lebih lanjut.",
  },
];

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (id) => setOpenFaq(openFaq === id ? null : id);

  return (
    <section id="faq" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Pertanyaan Seputar Saya <FaUserTie className="inline ml-1 text-blue-600" />
        </h2>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-md overflow-hidden">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="flex items-center justify-between w-full p-4 text-left text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-4 h-4 transform transition ${
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
                <div className="px-4 pb-4 pt-2 text-sm border-t border-gray-100 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
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
