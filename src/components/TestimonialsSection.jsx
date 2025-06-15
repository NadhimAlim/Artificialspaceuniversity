import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    name: "Andi Wijaya",
    role: "Frontend Developer di Tokopedia",
    text: "Program ini benar-benar mengubah karir saya. Dalam 3 bulan saya bisa menguasai teknologi yang selama ini saya takuti. Sekarang saya bekerja di perusahaan impian!",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "Fullstack Developer di Gojek",
    text: "Metode pembelajarannya sangat praktis dan langsung ke inti. Saya dari background non-IT tapi bisa paham semua materi berkat mentor yang sabar dan berpengalaman.",
    rating: 5,
  },
  {
    name: "Citra Dewi",
    role: "Backend Developer di Bukalapak",
    text: "Portfolio yang saya buat selama bootcamp ini menjadi nilai tambah saat interview. Saya diterima 2 minggu setelah lulus. Terima kasih untuk bimbingan karirnya!",
    rating: 4.5,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="text-yellow-400 flex">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {halfStar && <FaStarHalfAlt />}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Kata Alumni Kami</h2>
          <p className="text-lg text-gray-600 mt-2">
            Apa kata mereka yang sudah mengikuti program ini
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border-l-4 border-blue-600 h-full"
            >
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
                <p className="text-gray-700 mb-4 italic">"{item.text}"</p>
                {renderStars(item.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
