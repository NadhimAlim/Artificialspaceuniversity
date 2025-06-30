import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import emailjs from "@emailjs/browser";

// Komponen halaman
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import RoadmapSection from "./components/RoadmapSection";
import PricingSection from "./components/PricingSection";
import SupportedBySection from "./components/SupportedBySection";
import FAQSection from "./components/FAQSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

// === Notifikasi Pengunjung dengan Lokasi ===
const VisitorNotifier = () => {
  useEffect(() => {
    const sent = sessionStorage.getItem("emailSent");
    if (sent) return;

    // Ambil lokasi pengunjung
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const location = `${data.city}, ${data.region}, ${data.country_name}`;
        const ip = data.ip;

        // Kirim via EmailJS
        emailjs
          .send(
            "service_owekil9", // GANTI: SERVICE_ID kamu
            "template_cpvwstn", // GANTI: TEMPLATE_ID kamu
            {
              user_email: "anonymous@visitor.com",
              message: `📍 Lokasi: ${location}\n🌐 IP: ${ip}\n🚀 Mengunjungi portofolio sekarang.`,
            },
            "mSJCO_NsfdQ76e3Nn" // GANTI: PUBLIC_KEY kamu
          )
          .then(() => {
            console.log("📩 Notifikasi pengunjung berhasil dikirim!");
            sessionStorage.setItem("emailSent", "true");
          })
          .catch((err) => {
            console.error("❌ Gagal kirim email:", err);
          });
      });
  }, []);

  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <VisitorNotifier /> {/* 🔔 Trigger Notifikasi */}
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <BenefitsSection />
                <RoadmapSection />
                <PricingSection />
                <TestimonialsSection />
                <SupportedBySection />
                <FAQSection />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
