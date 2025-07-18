// src/pages/NewsDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import berita1 from "../../assets/berita1.jpg";
import dokumentasiweb3 from "../../assets/dokumentasiweb3.jpg";
import pendidikanNadhim from "../../assets/pendidikannadhim.jpeg";

const allNews = [
  {
    title: "RUU Keamanan Siber 2025 Resmi Disahkan",
    date: "14 Juli 2025",
    content: `Pemerintah Indonesia resmi mengesahkan Rancangan Undang-Undang Keamanan Siber 2025 pada rapat paripurna DPR RI yang digelar kemarin. Regulasi ini menjadi tonggak penting dalam menghadapi ancaman siber yang semakin kompleks dan terstruktur.
    Dalam UU tersebut, Badan Siber dan Sandi Negara (BSSN) mendapatkan mandat lebih luas untuk melakukan pemantauan, pencegahan, dan penanggulangan serangan siber yang menyasar infrastruktur kritis nasional. Tidak hanya lembaga pemerintah, sektor swasta yang menangani data masyarakat juga akan dikenakan standar keamanan baru.
    Menariknya, UU ini juga mengakomodasi peran teknologi kecerdasan buatan (AI) sebagai bagian dari sistem keamanan nasional. Pemerintah mendorong integrasi AI dalam sistem monitoring untuk mendeteksi pola serangan lebih dini dan secara otomatis mengaktifkan respon pertahanan.
    Sejumlah pakar keamanan digital menyambut baik pengesahan ini. Menurut mereka, Indonesia selama ini belum memiliki payung hukum yang jelas dalam menangani kejahatan siber lintas negara. “UU ini menjadi jawaban atas serangan yang terus meningkat, terutama pada sektor keuangan dan pemerintahan,” ujar Riko Ahmad, analis dari CyberTech ID.
    Namun, kritik datang dari sejumlah aktivis privasi digital. Mereka menilai beberapa pasal terlalu luas dan berpotensi digunakan untuk memata-matai warga. Pemerintah menyatakan akan memastikan implementasi UU tetap sesuai dengan prinsip keterbukaan dan perlindungan data pribadi.
    RUU Keamanan Siber 2025 ini akan mulai diberlakukan pada Januari 2026 mendatang. Selama enam bulan ke depan, seluruh lembaga publik dan pelaku industri digital diwajibkan melakukan penyesuaian terhadap standar sistem keamanannya.`,
    image: berita1,
    author: "Nadhim Alim",
    tags: ["Keamanan Siber", "RUU", "BSSN", "AI", "Pemerintah"],
  },
  {
    title: "Nadhim Alim Mengikuti Mini Class di Jogja Coding House",
    date: "8 Juli 2025",
    content: `Pada tanggal 28 Juni hingga 6 Juli 2025, Nadhim Alim mengikuti program Mini Class bertema "Web3 & Blockchain Fundamentals" yang diselenggarakan oleh Jogja Coding House. Acara ini dihadiri oleh puluhan peserta dari berbagai daerah yang antusias mempelajari teknologi desentralisasi dan pengembangan berbasis smart contract.
  Selama pelatihan berlangsung, peserta dibimbing langsung oleh mentor-mentor berpengalaman yang berasal dari komunitas blockchain lokal maupun startup teknologi. Materi yang diberikan meliputi dasar-dasar Web3, pengenalan wallet, konsep NFT, hingga pengembangan aplikasi menggunakan Solidity dan React.
  Nadhim menyampaikan bahwa pengalaman mengikuti Mini Class ini sangat berharga karena memberikan wawasan praktis dan langsung terkait dunia blockchain. “Ini bukan sekadar teori, tapi kami benar-benar membuat aplikasi dan deploy ke testnet,” ungkapnya.
  Selain sesi coding, peserta juga mendapatkan sesi diskusi terbuka tentang regulasi teknologi blockchain di Indonesia, serta bagaimana potensi teknologi ini dapat diterapkan dalam sistem pemerintahan dan keuangan digital.
  Pihak Jogja Coding House berharap bahwa kegiatan ini dapat mencetak lebih banyak talenta muda yang siap bersaing dalam ekosistem Web3 yang sedang berkembang pesat. Mereka juga berencana untuk mengadakan batch lanjutan di kota-kota lain di Indonesia.
  Mini Class ini diakhiri dengan sesi presentasi proyek dari peserta dan pemberian sertifikat sebagai bukti kelulusan. Nadhim Alim termasuk salah satu peserta yang dinilai aktif dan produktif selama pelatihan.`,
    image: dokumentasiweb3,
    author: "Nadhim Alim",
    tags: [
      "Blockchain",
      "Web3",
      "Jogja Coding House",
      "Mini Class",
      "Solidity",
      "React",
    ],
  },
  {
    title: "Jejak Pendidikan Nadhim Alim",
    date: "8 Juli 2025",
    content: `Pendidikan SD – SDIT Baitussalam Prambanan Muhammad Nadhim Alim mengawali pendidikan formalnya di SDIT Baitussalam Prambanan, sebuah sekolah dasar Islam terpadu yang dikenal dengan pendekatan holistik antara akademik dan pembentukan karakter Islami. Di sini, Nadhim tidak hanya belajar membaca, menulis, dan berhitung, tetapi juga dibiasakan dengan nilai-nilai spiritual seperti disiplin, tanggung jawab, dan kepedulian sosial sejak dini. Lingkungan belajar yang kondusif dan pendekatan pendidikan yang menyentuh sisi emosional serta spiritual, menjadi pondasi kuat bagi tumbuhnya semangat belajar dalam diri Nadhim.
    Setelah lulus dari sekolah dasar, Nadhim melanjutkan ke SMP Negeri 2 Piyungan, sekolah menengah pertama negeri di wilayah Kabupaten Bantul. Di lingkungan sekolah ini, ia mulai membentuk jati diri remaja yang mandiri dan aktif. Ia dikenal sebagai siswa yang tenang namun memiliki rasa ingin tahu yang besar, terutama dalam pelajaran IPA dan Matematika. Nadhim juga aktif mengikuti kegiatan organisasi sekolah dan berbagai lomba akademik yang mengasah kemampuan logika dan analisisnya. Pengalaman sosial dan akademik selama SMP menjadi bekal penting dalam membentuk pola pikir kritis dan rasa percaya diri.
    Pendidikan SMA – MAN 3 Bantul  Jenjang pendidikan menengah atas ditempuh oleh Nadhim di MAN 3 Bantul, salah satu madrasah unggulan di Yogyakarta. Pada tahun-tahun awal, ia aktif dalam kegiatan keagamaan, organisasi sekolah, serta pengembangan akademik di bidang eksakta. Namun, titik balik penting dalam perjalanan minatnya terjadi saat memasuki kelas 11.
    Di kelas tersebut, temannya yang bernama Hanif memperkenalkannya pada dunia pemrograman website. Dari percakapan ringan hingga melihat langsung hasil karya Hanif, Nadhim mulai tertarik dan penasaran. Ia kemudian mulai belajar secara otodidak melalui YouTube, salah satu channel favoritnya adalah Dea Afrizal, yang membahas pemrograman dengan cara sederhana dan praktis. Sejak saat itu, minatnya terhadap teknologi digital terus berkembang.
    Memasuki kelas 12, minat tersebut berubah menjadi keputusan yang serius. Nadhim memutuskan untuk melanjutkan pendidikan ke jurusan Informatika di Universitas Ahmad Dahlan (UAD). Ia percaya bahwa dunia teknologi informasi memiliki potensi besar untuk membangun masa depan yang lebih efisien dan berdampak luas bagi masyarakat.
    Setelah lulus dari MAN 3 Bantul, Muhammad Nadhim Alim resmi melanjutkan studinya ke jenjang Strata 1 (S1) di Program Studi Informatika, Universitas Ahmad Dahlan (UAD), Yogyakarta, pada angkatan 2023. Pilihan ini bukan tanpa alasan — sejak duduk di bangku SMA, ketertarikannya terhadap dunia pengembangan web dan teknologi informasi terus tumbuh dan menguat.
    Di UAD, Nadhim mulai mendalami berbagai mata kuliah dasar informatika seperti pemrograman, basis data, dan struktur data. Meski awalnya sempat merasa tantangan dunia kuliah cukup berbeda dibandingkan sekolah, ia cepat beradaptasi. Dukungan dari dosen, komunitas kampus, serta akses ke sumber belajar online membuatnya lebih percaya diri dalam mengembangkan potensi.
    Ia juga aktif mengikuti kelas tambahan, seminar, dan proyek kecil-kecilan untuk mengasah keterampilan teknis. Di luar kelas, Nadhim kerap mencoba membuat proyek aplikasi sederhana dan belajar langsung dari dokumentasi serta tutorial daring.
    Bagi Nadhim, kuliah di UAD bukan sekadar menuntut ilmu, tetapi juga menjadi wadah untuk membangun masa depan di dunia teknologi — dengan harapan bisa memberi kontribusi nyata bagi masyarakat dan negara.`,
    image: pendidikanNadhim, // ganti sesuai gambar profil yang relevan
    author: "Nadhim Alim",
    tags: ["Pendidikan", "Nadhim Alim", "Yogyakarta", "UAD", "Inspiratif"],
  },
];

const NewsDetail = () => {
  const { id } = useParams();
  const index = parseInt(id, 10);
  const news = allNews[index];

  if (!news) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <p className="text-red-600 font-semibold">Berita tidak ditemukan.</p>
        <Link to="/news" className="text-blue-600 underline">
          ← Kembali ke Daftar Berita
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-85 object-cover rounded-lg mb-6 shadow"
      />

      <h1 className="text-3xl font-bold text-blue-700 mb-2">{news.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {news.date} • Ditulis oleh{" "}
        <span className="font-medium">{news.author}</span>
      </p>
      <article className="text-gray-800 leading-relaxed whitespace-pre-line mb-6">
        {news.content}
      </article>

      {/* Tags */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-600 mb-1">Tags:</h4>
        <div className="flex flex-wrap gap-2">
          {news.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Back Link */}
      <Link
        to="/news"
        className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
      >
        ← Kembali ke Berita
      </Link>
    </div>
  );
};

export default NewsDetail;
