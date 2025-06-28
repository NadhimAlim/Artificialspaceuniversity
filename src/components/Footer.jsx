import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uakcgza",     // Ganti dengan service ID dari EmailJS
        "template_zd6xj4s",    // Ganti dengan template ID dari EmailJS
        formRef.current,
        "mSJCO_NsfdQ76e3Nn"      // Ganti dengan Public Key (bukan private key!)
      )
      .then(
        () => {
          setStatus("✅ Pesan berhasil dikirim!");
          formRef.current.reset();
        },
        (error) => {
          setStatus("❌ Gagal mengirim pesan. Coba lagi.");
          console.error(error);
        }
      );
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* === Informasi Kontak === */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nadhim Alim</h3>
            <p className="text-sm text-gray-400 mb-2">📍 Yogyakarta, Indonesia</p>
            <p className="text-sm text-gray-400 mb-2">✉️ nadhimalim@gmail.com</p>
            <p className="text-sm text-gray-400">
              Terbuka untuk kerja remote maupun onsite.
            </p>

            {/* Sosial Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Temukan Saya di:</h4>
              <div className="flex space-x-5 text-xl">
                <a
                  href="https://linkedin.com/in/nadhimalim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/nadhimalim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://instagram.com/nadhim.alim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* === Form Pesan === */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kirim Pesan</h3>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 mt-6 max-w-md"
            >
              <input
                type="email"
                name="user_email"
                placeholder="Alamat Email"
                required
                className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <textarea
                name="message"
                placeholder="Tulis pesan Anda..."
                rows="4"
                required
                className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <button
                type="submit"
                className="w-fit bg-blue-400 text-blue-900 font-semibold px-6 py-2 rounded hover:bg-blue-300 transition self-start"
              >
                Kirim Pesan
              </button>
              {status && (
                <p className="text-sm mt-2 text-green-400">{status}</p>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Nadhim Alim. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
