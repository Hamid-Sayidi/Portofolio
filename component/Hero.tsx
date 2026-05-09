"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [router]);

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-10 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* === BAGIAN KIRI === */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Available for Freelance
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-950 dark:text-white leading-[1.1]">
            Halo, Saya <br />
            <span className="text-blue-600 text-5xl">
              Hamid Sayidi Abdullah
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-xl">
            Seorang Junior Web Developer yang memiliki background UI/UX dan
            ingin mulai fokus membangun aplikasi web modern yang responsif,
            fungsional, dan ramah pengguna.
          </p>

          <div className="flex flex-col gap-4 pt-6">
            <div className="flex flex-wrap gap-4">
              <a
                href="#projek"
                className="px-8 py-3.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-500/20"
              >
                Lihat Project
              </a>
              <a
                href="https://drive.google.com/file/d/1wJmlqTHjB1-z-NlHlvHcaA3iABdcgHhq/view?usp=drive_link"
                className="px-8 py-3.5 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 hover:scale-105 transition-all shadow-lg"
              >
                Lihat CV
              </a>
            </div>

            <a
              href="#kontak"
              className="w-fit px-8 py-3.5 border border-slate-200 dark:border-slate-800 dark:text-white rounded-full font-semibold hover:bg-slate-100 dark:hover:bg-slate-900 transition-all"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* === BAGIAN KANAN === */}
        <div className="relative flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-blue-100 dark:bg-blue-950/50 rounded-full blur-3xl opacity-60 aspect-square scale-90" />

          <div className="relative z-10 w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-white dark:bg-slate-900 hover:-translate-y-2 transition-transform duration-300">
            <Image
              src="/Profile.jpg"
              alt="Hamid Sayidi Abdullah"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw" // Menambahkan sizes prop untuk performa
            />
          </div>

          <div className="absolute top-10 right-10 z-20 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg animate-bounce">
            🚀
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
