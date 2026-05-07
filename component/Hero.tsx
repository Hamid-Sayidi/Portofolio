"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Tambahkan tipe : Variants agar TypeScript tidak protes
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring", // Sekarang TS tahu ini tipe spring yang valid
      stiffness: 100,
    },
  },
};

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-10 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* === BAGIAN KIRI: PENJELASAN === */}
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Available for Freelance
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-950 dark:text-white leading-[1.1]"
          >
            Halo, Saya <br />
            <span className="text-blue-600 text-5xl">
              Hamid Sayidi Abdullah
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-xl"
          >
            Seorang Junior Web Developer yang ingin fokus membangun aplikasi web
            modern yang responsif, fungsional, dan ramah pengguna.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 pt-6"
          >
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
              >
                Lihat Project
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1wJmlqTHjB1-z-NlHlvHcaA3iABdcgHhq/view?usp=drive_link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition shadow-lg shadow-blue-500/20"
              >
                Lihat CV
              </motion.a>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit px-8 py-3.5 border border-slate-200 dark:border-slate-800 dark:text-white rounded-full font-semibold hover:bg-slate-100 dark:hover:bg-slate-900 transition"
            >
              Hubungi Saya
            </motion.a>
          </motion.div>
        </motion.div>

        {/* === BAGIAN KANAN: FOTO/GAMBAR === */}
        <motion.div
          className="relative flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
        >
          <div className="absolute inset-0 bg-blue-100 dark:bg-blue-950/50 rounded-full blur-3xl opacity-60 aspect-square scale-90" />

          <motion.div
            className="relative z-10 w-full max-w-md aspect-4/5 rounded-3xl overflow-hidden shadow-2xl shadow-slate-500/10 border-4 border-white dark:border-slate-800 bg-white dark:bg-slate-900"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=600&auto=format&fit=crop"
              alt="Hamid Sayidi Abdullah"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute top-10 right-10 z-20 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            🚀
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
