import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import emailjs from "@emailjs/browser";

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

// === Notifikasi Pengunjung ===
const VisitorNotifier = () => {
  useEffect(() => {
    emailjs
      .send(
        "service_owekil9", // ganti dengan SERVICE_ID dari EmailJS
        "template_cpvwstn", // ganti dengan TEMPLATE_ID dari EmailJS
        {
          user_email: "anonymous@visitor.com",
          message: "Seseorang baru saja mengunjungi portofolio!",
        },
        "mSJCO_NsfdQ76e3Nn" // ganti dengan PUBLIC_KEY dari EmailJS
      )
      .then(() => {
        console.log("📩 Notifikasi pengunjung berhasil dikirim!");
      })
      .catch((err) => {
        console.error("❌ Gagal kirim email:", err);
      });
  }, []);

  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <VisitorNotifier /> {/* Notifikasi langsung saat visitor membuka web */}
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

