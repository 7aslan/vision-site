import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full">
            Referanslarımız
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Saha Çalışmalarımız & Projeler
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Mühendislik kalitemizi yansıtan saha uygulamalarımızı ve detaylı proje galerilerimizi inceleyebilirsiniz. 
            İleride eklenecek onlarca proje için mobilde yatay kaydırma ile kolayca gezilebilir.
          </p>
        </div>

        {/* 
          DÜZENLEME: 
          - Mobilde (sm ve altı): Yatay kaydırma (flex, overflow-x-auto, snap-x) yaptık. 100 tane proje olsa bile alt alta yığılıp elini kırmaz, sağa sola kaydırarak bakarsın.
          - Tablet ve Masaüstünde (md ve üstü): Normal şık Grid (3'lü yan yana) yapısına devam eder.
        */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-blue-600">
          {projectsData.map((project) => (
            <Link 
              key={project.id}
              to={`/projeler/${project.id}`}
              className="group relative bg-white dark:bg-slate-950 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-[0_0_50px_10px_rgba(37,99,235,0.5)] dark:hover:shadow-[0_0_60px_15px_rgba(59,130,246,0.7)] border-2 border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 flex flex-col overflow-hidden flex-shrink-0 w-[85%] sm:w-[380px] md:w-auto snap-center"
            >
              {/* Kapak Görseli */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img 
                  src={project.coverImage} 
                  alt={`${project.title} - Vision Mühendislik`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                <span className="absolute bottom-3 left-4 text-white text-xs font-semibold px-2.5 py-1 bg-blue-600/90 backdrop-blur-md rounded-md shadow-sm">
                  {project.gallery.length} Medya (Foto & Video)
                </span>
              </div>

              {/* İçerik */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4 relative">
                <div>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm font-semibold text-blue-600 dark:text-blue-400">
                  <span className="group-hover:underline">Proje Detaylarını Gör</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobilde kaydırma ipucu */}
        <div className="text-center mt-4 md:hidden text-xs text-slate-500 dark:text-slate-400">
          👉 Projeleri görmek için sağa sola kaydırın
        </div>

      </div>
    </section>
  );
}