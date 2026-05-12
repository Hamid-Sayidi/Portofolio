import React from "react";
import { Rocket, GraduationCap, Layout, Smartphone, Box } from "lucide-react";

const About = () => {
  return (
    <section
      id="tentang"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* BAGIAN KIRI: VISI & VALUES */}
          <div className="grid grid-cols-1 gap-4">
            <div className="p-8 bg-blue-50 dark:bg-slate-900/50 rounded-3xl border border-blue-100 dark:border-slate-800 transition-colors">
              <Rocket
                className="text-blue-600 dark:text-blue-400 mb-4"
                size={32}
              />
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Misi Saya
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Membangun solusi digital yang tidak hanya berfungsi secara
                teknis, tetapi juga memberikan pengalaman pengguna yang bermakna
                dan estetik.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                <Layout className="text-blue-600 mb-3" size={24} />
                <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                  Design Aware
                </h5>
                <p className="text-xs text-slate-500 mt-1">
                  Paham alur desain UI/UX profesional.
                </p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                <Box className="text-blue-600 mb-3" size={24} />
                <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                  Modern Stack
                </h5>
                <p className="text-xs text-slate-500 mt-1">
                  Fokus pada ekosistem React & Next.js.
                </p>
              </div>
            </div>
          </div>

          {/* BAGIAN KANAN: STORYTELLING */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">
                Tentang Saya
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Eksplorasi Multidisiplin untuk Solusi Digital.
              </h3>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              <p>
                Halo! Saya Hamid Sayidi Abdullah Seorang Fresh Gradute dari
                Universitas Muhammadiyah Surakarta. Perjalanan saya di dunia IT
                adalah sebuah eksplorasi panjang untuk menemukan harmoni antara
                desain dan fungsionalitas.
              </p>
              <p>
                Saya pernah mendalami dunia UI/UX Design melalui program
                profesional bootcamp dari Skillvul dan lanjut magang di
                TupaiTech Surakarta sebagai UI Desain, hingga mengeksplorasi
                pengembangan aplikasi Android melalui program Bangkit Academy
                serta riset skripsi berbasis Augmented Reality (AR).
              </p>
              <p>
                Pengalaman lintas disiplin ini memberikan saya perspektif unik
                sebagai pengembang: saya memahami bagaimana sebuah ide
                dirancang, bagaimana sistem mobile bekerja, dan kini saya
                menyatukan semua itu ke dalam pengembangan Web Modern (React &
                TypeScript).
              </p>
            </div>

            {/* Info Badge Pengalaman */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                <GraduationCap className="text-blue-600 shrink-0" size={20} />
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white text-xs uppercase">
                    Alumni Bangkit
                  </h5>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Android Developer Path
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                <Smartphone className="text-blue-600 shrink-0" size={20} />
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white text-xs uppercase">
                    Ex-UI/UX Intern
                  </h5>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    TupaiTech Surakarta
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "React.js",
                "UI/UX Design",
                "Firebase",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
