import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import RoadmapSection from './components/RoadmapSection';
import PricingSection from './components/PricingSection';
import SupportedBySection from './components/SupportedBySection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Halaman Utama */}
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

          {/* Halaman Login */}
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
