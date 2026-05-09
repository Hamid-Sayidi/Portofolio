"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/app/project/data/data";

const categories = ["Semua", "Web Dev", "UI/UX", "Mobile/AR"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Semua");

  const filteredProjects =
    activeTab === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section
      id="projek"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
            Portofolio
          </h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">
            Project Unggulan
          </h3>

          {/* Badge Filter Tabs */}
          <div className="flex flex-wrap gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${
                  activeTab === cat
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-transparent border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Wrapper */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-sm font-medium">
                    Lihat Detail →
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    className="text-sm font-bold text-slate-900 dark:text-white hover:underline underline-offset-4"
                  >
                    Kunjungi Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
