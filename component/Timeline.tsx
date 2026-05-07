import React from "react";

const journey = [
    {
    year: "2025",
    title: "Mencoba Menjadi Full Stack Developer",
    description:
      "Belajar dan mengeksplorasi teknologi web modern, terutama ekosistem React dan Next.js, untuk membangun aplikasi yang tidak hanya fungsional tetapi juga memberikan pengalaman pengguna yang menyenangkan.",
  },
  {
    year: "2024",
    title: "Fokus Skripsi",
    description:
      "Memfokuskan diri pada penyelesaian skripsi dengan topik pengembangan aplikasi pembelajaran berbasis Augmented Reality (AR) menggunakan Unity dan ARCore.",
  },
  {
    year: "2023",
    title: "Bangkit Academy",
    description:
      "terpilih menjadi salah satu peserta dalam program Bangkit Academy, umtuk mendalami pengembangan aplikasi Android",
  },
  {
    year: "2022",
    title: "Tertarik Ke UI/UX Desain",
    description:
      "Mulai tertarik dengan dunia desain UI/UX, mengikuti bootcamp profesional di Skillvul dan magang di TupaiTech Surakarta sebagai UI Designer.",
  },
  {
    year: "2019",
    title: "Awal Perjalanan IT",
    description:
      "Memulai perjalanan saya sebagai pemula di bidang IT secara umum di kampus.",
  },
];

const Timeline = () => {
  return (
    <section id="perjalanan" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
            Track Record
          </h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">
            Perjalanan IT Saya
          </h3>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-0">
          {journey.map((item, index) => (
            <div key={index} className="mb-12 ml-8 relative">
              {/* Dot Indikator */}
              <div className="absolute -left-10.25 top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-slate-950 shadow-sm" />

              <div className="flex flex-col md:flex-row md:gap-8">
                <span className="text-2xl font-bold text-blue-600 mb-2 md:mb-0 min-w-20">
                  {item.year}
                </span>
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
