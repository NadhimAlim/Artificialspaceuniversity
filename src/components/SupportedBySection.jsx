import React from "react";

const logos = [
  { src: "./img/logo1.png", alt: "Logo 1", width: 110, height: 33, pt: "pt-2" },
  { src: "./img/logo2.png", alt: "Logo 2", width: 138, height: 31 },
  { src: "./img/logo3.png", alt: "Logo 3", width: 150, height: 31 },
  { src: "./img/logo4.png", alt: "Logo 4", width: 108, height: 29, pt: "pt-1" },
  { src: "./img/logo5.png", alt: "Logo 5", width: 136, height: 24, pt: "pt-2" },
  { src: "./img/logo6.png", alt: "Logo 6", width: 136, height: 24, pt: "pt-2" },
  { src: "./img/logo7.png", alt: "Logo 7", width: 136, height: 24, pt: "pt-2" },
  { src: "./img/logo7.png", alt: "Logo 8", width: 136, height: 24, pt: "pt-2" },
  { src: "./img/logo7.png", alt: "Logo 9", width: 136, height: 24, pt: "pt-2" },
  { src: "./img/logo7.png", alt: "Logo 10", width: 136, height: 24, pt: "pt-2" },
  { src: "./img/logo7.png", alt: "Logo 11", width: 136, height: 24, pt: "pt-2" },
  { src: "./img/logo7.png", alt: "Logo 12", width: 136, height: 24, pt: "pt-2" },
];

const SupportedBySection = () => {
  return (
    <section className="container p-8 mx-auto w-full max-w-2xl xl:px-0">
      <div className="flex flex-col justify-center">
        <div className="text-xl text-center font-semibold text-gray-700">
          Supported by{" "}
          <span className="text-indigo-600 font-bold">100+</span> industry
          leaders
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`text-gray-400 ${logo.pt ? logo.pt : ""}`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedBySection;
