import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Pribadi */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nadhim Alim</h3>
            <address className="not-italic text-sm leading-relaxed">
              <p className="mb-2">Yogyakarta, Indonesia</p>
              <p className="mb-2">Email: nadhimalim@gmail.com</p>
              <p>Terbuka untuk kerja remote maupun onsite.</p>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Temukan Saya di</h3>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/nadhimalim"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/nadhimalim"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-xl"></i>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/nadhim.alim"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Nadhim Alim.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
