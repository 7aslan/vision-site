import React from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 'organize-sanayi-ges',
    title: 'OSB Çatı GES Projesi (1.2 MW)',
    category: 'Güneş Enerji Sistemleri',
    description: 'Endüstriyel bir üretim tesisinin çatısına kurulan, yıllık 1.800 MWh elektrik üretimi sağlayan anahtar teslim GES projesi.',
    image: 'https://images.unsplash.com/photo-1509391365360-804d21f7c32e?auto=format&fit=crop&q=80&w=800',
    stats: '1.2 MW Güç • 2.400+ Panel'
  },
  {
    id: 'endustriyel-kompanzasyon-panosu',
    title: 'Endüstriyel Dağıtım ve Kompanzasyon Panoları',
    category: 'Pano & Otomasyon',
    description: 'Büyük ölçekli tesisler için uluslararası standartlara uygun, uzaktan izlenebilir akıllı güç ve kompanzasyon panosu tasarımı ve devreye alımı.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    stats: 'Özel Tasarım • IEC Standartları'
  },
  {
    id: 'kompleks-ag-og-altyapi',
    title: 'Ticari Kompleks AG-OG Altyapı ve Kablaj',
    category: 'Elektrik Altyapı',
    description: 'Çok katlı ticari ve endüstriyel yapılar için orta gerilim trafo merkezi, dağıtım hatları ve profesyonel kablaj mühendisliği.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    stats: 'Kesintisiz Enerji • Anahtar Teslim'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full">
            Referanslar & Başarı Hikayeleri
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Tamamlanan Projelerimiz
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Endüstriyel tesislerden enerji sistemlerine kadar uzanan uzmanlık alanlarımızda başarıyla hayata geçirdiğimiz projelerden bazıları.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="group bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {project.category}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Footer Stats / Details */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1 rounded-md">
                    {project.stats}
                  </span>
                  
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-blue-600 transition-colors">
                    Detaylar →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}