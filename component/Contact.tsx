import React from "react";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="kontak"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* BAGIAN KIRI: AJAKAN & DETAIL KONTAK */}
          <div>
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
              Mari Terhubung
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Mulai Project Bersama
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              Saya selalu terbuka untuk kolaborasi baru, peluang kerja, atau
              sekadar berdiskusi tentang Next.js dan Tailwind. Hubungi saya
              langsung atau isi formulir.
            </p>

            <div className="flex flex-col gap-8">
              {/* Detail Kontak dengan Icon */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Email Utama
                  </span>
                  <a
                    href="mailto:hamid.sayidi@email.com"
                    className="font-semibold text-slate-900 dark:text-white hover:text-blue-600 transition"
                  >
                    hamidsayidi123@email.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                  <MapPin size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Lokasi
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Indonesia
                  </span>
                </div>
              </div>
              {/* TAMBAHKAN DI SINI (Di bawah Lokasi) */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://linkedin.com/in/hamid-sayidi-abdullah-72a821290/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition shadow-sm"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/uHamid-Sayidi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition shadow-sm"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* BAGIAN KANAN: FORMULIR KONTAK */}
          <div className="p-10 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-blue-500/5">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-900 dark:text-white"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Cth: Jane Doe"
                  className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Cth: jane.doe@email.com"
                  className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-900 dark:text-white"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  placeholder="Katakan sesuatu..."
                  rows={4}
                  className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex gap-2 items-center justify-center px-8 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
              >
                Kirim Pesan <MessageSquare size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
