"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-slate-950/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">
          PORTOFOLIO <span className="text-blue-500">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#tentang" className=" hover:text-blue-500 transition">
            Tentang
          </a>
          <a href="#projek" className=" hover:text-blue-500 transition">
            Projek
          </a>
          <a href="#sertifikat" className=" hover:text-blue-500 transition">
            Sertifikat
          </a>
          <a href="#perjalanan" className=" hover:text-blue-500 transition">
            Perjalanan
          </a>
          <a href="#kontak" className=" hover:text-blue-500 transition">
            Kontak
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-slate-100 border-slate-400 dark:bg-slate-800 hover:ring-2 ring-blue-400 transition-all"
            aria-label="Toggle Theme"
          >
            {mounted && (
              <div className="text-slate-900 dark:text-yellow-400">
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </div>
            )}
            {!mounted && <div className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
