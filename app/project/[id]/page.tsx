import Link from "next/dist/client/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/app/project/data/data";
import { notFound } from "next/navigation";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 md:py-20">
      {/* --- TOMBOL KEMBALI --- */}
      <Link
        href="/#projek"
        className="inline-flex items-center gap-2 mb-8 text-slate-500 hover:text-blue-500 transition-colors group"
      >
        <ArrowLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span className="font-medium">Kembali ke Beranda</span>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* --- KOLOM KIRI (Info Ringkas & Tombol) --- */}
        <div className="md:col-span-4 space-y-6">
          {/* Gambar Utama (1:1) */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Card Info */}
          <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                Role
              </h3>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                {project.role}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Tombol Action (GitHub & Showcase) */}
            <div className="grid grid-cols-1 gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <a
                href={project.linkGithub !== "-" ? project.linkGithub : "#"}
                target={project.linkGithub !== "-" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold transition-all ${
                  project.linkGithub === "-"
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "bg-slate-900 dark:bg-white text-white dark:text-black hover:opacity-80" // Tampilan normal
                }`}
              >
                <FaGithub size={18} />
                Repository
              </a>
              <a
                href={project.linkshowcase !== "-" ? project.linkshowcase : "#"}
                target={project.linkshowcase !== "-" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold transition-all ${
                  project.linkshowcase === "-"
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <ExternalLink size={18} />
                Live Showcase
              </a>
            </div>
          </div>
        </div>

        {/* --- KOLOM KANAN (Konten Detail) --- */}
        <div className="md:col-span-8 space-y-10">
          {/* Judul & Deskripsi */}
          <section className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Grid Kelebihan & Kekurangan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-y border-slate-100 dark:border-slate-800">
            {/* Kelebihan */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />{" "}
                Kelebihan
              </h2>
              <ul className="space-y-3">
                {project.kelebihan?.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm"
                  >
                    <span className="text-emerald-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Kekurangan */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-rose-500 rounded-full" /> Kekurangan
              </h2>
              <ul className="space-y-3">
                {project.kekurangan?.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm"
                  >
                    <span className="text-rose-500 font-bold">○</span> {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Cara Penggunaan */}
          <section className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900/30 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Cara Penggunaan
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              {project.penggunaan}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
