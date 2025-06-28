import React from "react";

const youtubeVideos = [
  {
    title: "Pengalaman Kuliah Informatika Semester 1–4 | Cerita Seru Kita di Dunia IT!",
    src: "https://www.youtube.com/embed/qVZ4IEgp34A?si=juRcjCZIK6CKV5nf", // panjang
  },
  {
    title: "Apa itu HTML CSS DAN JavaScript",
    src: "https://www.youtube.com/embed/1xlFbMg9de8", // short
  },
  {
    title: "Beda Website Dinamis dan Statis?",
    src: "https://www.youtube.com/embed/SWNtnw0FUfY",
  },
  {
    title: "Beda Array dan Linked List",
    src: "https://www.youtube.com/embed/4p8MrNQux2o",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">📺 Video Teknologi</h2>
          <p className="text-lg text-gray-600 mt-2">
            Video pilihan tentang teknologi, web development, dan AI.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex space-x-6 snap-x snap-mandatory pb-4 px-1">
            {youtubeVideos.map((video, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[360px] snap-center rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-video w-full">
                  <iframe
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="bg-gray-100 p-3 text-sm text-gray-800 font-semibold text-center">
                  {video.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

