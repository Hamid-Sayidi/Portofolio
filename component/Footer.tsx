import {
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* SISI KIRI: LOGO & AJAKAN FOOTER */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
              Portofolio<span className="text-blue-500">.</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Membangun aplikasi web modern di lingkungan JavaScript. Terbuka
              untuk peluang baru di tahun {currentYear + 1}.
            </p>
          </div>

          {/* SISI KANAN: SOSIAL MEDIA & KONTAK */}
          <div className="flex flex-col md:items-end gap-5">
            <span className="font-semibold text-slate-900 dark:text-white">
              Ayo Ngobrol
            </span>
            <div className="flex items-center gap-6">
              {/* Tautan Sosial */}

              <a
                href="https://wa.me/6281327748100"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-[#25D366] transition-colors duration-300"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://linkedin.com/in/hamid-sayidi-abdullah-72a821290/"
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-blue-600 transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/uHamid-Sayidi/"
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.instagram.com/hamid.sayidi/"
                className="text-slate-500 dark:text-slate-400 hover:text-[#E1306C] dark:hover:text-[#E1306C]  transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="mailto:hamidsayidi123@email.com"
                className="text-slate-500 dark:text-slate-400 hover:text-[#4285F4] dark:hover:text-white transition-colors duration-300"
              >
                <FaGoogle size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER: COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800/50 text-center">
          <p className="text-slate-500 dark:text-slate-500 text-xs">
            © {currentYear} Hamid Sayidi Abdullah. All rights reserved.
          </p>
          <p className="mt-1 text-slate-400 dark:text-slate-600 text-xs">
            Built with Next.js v16 & Tailwind CSS v4.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
