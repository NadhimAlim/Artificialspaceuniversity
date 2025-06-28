import React from "react";
import { FaDownload, FaPaperPlane } from "react-icons/fa";
// import nadhimImg from "../assets/nadhimalim.jpg";
import profileVideo from "../assets/video.mp4";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-black text-white overflow-hidden">
      {/* Background overlay image */}
      <div className="absolute inset-0">
        {/* <img
          src="/img/nadhim-bg.jpg"
          alt="Nadhim Alim background"
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        /> */}
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Text content */}
        <div className="lg:w-1/2 order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Hi, I'm <span className="text-yellow-400">Nadhim Alim</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-6 opacity-90">
            Saya seorang{" "}
            <span className="text-yellow-400">Pengembang Aplikasi</span> dengan
            minat kuat pada Web Development, Teknologi Terkini, dan Kecerdasan
            Buatan.
          </p>
          <p className="opacity-80 mb-8">
            Saya senang membangun solusi digital yang elegan — dari antarmuka
            web hingga sistem cerdas berbasis AI.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/files/NadhimAlim-CV.pdf"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-semibold flex items-center shadow hover:shadow-lg transition"
              download
            >
              <FaDownload className="mr-2" /> Download&nbsp;CV
            </a>
            <a
              href="#contact"
              className="border border-yellow-400 text-white px-6 py-3 rounded-md font-semibold flex items-center hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              <FaPaperPlane className="mr-2" /> Hire&nbsp;Me
            </a>
          </div>
        </div>

        {/* Profile image */}
        {/* <div className="lg:w-1/2 order-1 lg:order-2 relative">
          <img
            src={nadhimImg}
            alt="Nadhim Alim"
            className="w-full max-w-2xl h-64 md:h-80 rounded-xl object-cover mx-auto shadow-xl ring-4 ring-yellow-400 transform hover:scale-105 transition"
          />
        </div> */}
        {/* Profile video */}
        <div className="lg:w-1/2 order-1 lg:order-2 relative">
          <video
            src={profileVideo}
            className="w-full max-w-2xl h-64 md:h-80 rounded-xl object-cover mx-auto shadow-xl ring-4 ring-yellow-400 transform hover:scale-105 transition"
            autoPlay
            loop
            controls
            playsInline
          ></video>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
