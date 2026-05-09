import React from "react";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { sertifikat } from "@/app/project/data/data";

const Sertificate = () => {
  return (
    <section id="sertifikat" className="py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
            Kredibilitas
          </h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">
            Sertifikasi & Lisensi
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sertifikat.map((cert, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-4 hover:border-blue-500 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>

              <div>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">
                  {cert.issuer} • {cert.date}
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {cert.title}
                </h4>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {cert.description}
              </p>

              <div className="mt-auto pt-4 border-t border-slate-50 dark:border-slate-800">
                <a
                  href={cert.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Lihat Sertifikat <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sertificate;
