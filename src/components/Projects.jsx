import React, { useState } from 'react';

// Örnek Proje Yapısı (Yarın gerçek foto & videolar geldiğinde sadece burayı güncelleyeceğiz)
const projectsData = [
  {
    id: 1,
    title: "1.2 MW Çatı GES Projesi",
    subtitle: "Gaziantep OSB",
    description: "Gaziantep Organize Sanayi Bölgesi'nde yer alan endüstriyel tesis için anahtar teslim çatı Güneş Enerji Santrali kurulumu, panel montajı ve devreye alınması.",
    coverImage: "/assets/projects/ges-1.webp",
    gallery: [
      { type: 'image', url: '/assets/projects/ges-1.webp', caption: 'Saha Üst Bakış' },
      { type: 'image', url: '/assets/projects/ges-2.webp', caption: 'Panel Dizilimi' },
      { type: 'image', url: '/assets/projects/ges-3.webp', caption: 'Inverter & Pano Bağlantıları' },
      { type: 'image', url: '/assets/projects/ges-4.webp', caption: 'Kablaj & Taşıyıcı Hatlar' },
      { type: 'image', url: '/assets/projects/ges-5.webp', caption: 'Test ve Ölçüm Çalışmaları' },
      { type: 'video', url: '/assets/projects/ges-video.mp4', poster: '/assets/projects/ges-1.webp', caption: 'Devreye Alma Videosu' }
    ]
  },
  {
    id: 2,
    title: "Endüstriyel Tesis Otomasyonu & SCADA",
    subtitle: "Üretim Hattı Modernizasyonu",
    description: "Siemens S7-1500 PLC yazılımı, SCADA izleme ekranları, pano imalatı ve saha sensör/aktüatör entegrasyonu.",
    coverImage: "/assets/projects/otomasyon-1.webp",
    gallery: [
      { type: 'image', url: '/assets/projects/otomasyon-1.webp', caption: 'Otomasyon Panosu İç Görünüm' },
      { type: 'image', url: '/assets/projects/otomasyon-2.webp', caption: 'PLC & Sürücü Modülleri' },
      { type: 'image', url: '/assets/projects/otomasyon-3.webp', caption: 'SCADA Arayüz Tasarımı' },
      { type: 'image', url: '/assets/projects/otomasyon-4.webp', caption: 'Saha Sensör Bağlantıları' },
      { type: 'image', url: '/assets/projects/otomasyon-5.webp', caption: 'Kablo Etiketleme ve Düzenleme' },
      { type: 'video', url: '/assets/projects/otomasyon-video.mp4', poster: '/assets/projects/otomasyon-1.webp', caption: 'Sistem Test Videosu' }
    ]
  },
  {
    id: 3,
    title: "AG-OG Trafo Merkezi & Kablaj",
    subtitle: "Yüksek Gerilim Tesisatı",
    description: "33 kV Yüksek Gerilim trafo merkezi montajı, hücre kurulumları, OG kablo başlıkları ve tesis içi AG dağıtım panoları.",
    coverImage: "/assets/projects/elektrik-1.webp",
    gallery: [
      { type: 'image', url: '/assets/projects/elektrik-1.webp', caption: 'Trafo Merkezi Dış Görünüm' },
      { type: 'image', url: '/assets/projects/elektrik-2.webp', caption: 'OG Hücre Montajı' },
      { type: 'image', url: '/assets/projects/elektrik-3.webp', caption: 'Ana Dağıtım Panosu' },
      { type: 'image', url: '/assets/projects/elektrik-4.webp', caption: 'Kablo Kanalı ve Tavalar' },
      { type: 'image', url: '/assets/projects/elektrik-5.webp', caption: 'Topraklama ve Yalıtım Testleri' },
      { type: 'video', url: '/assets/projects/elektrik-video.mp4', poster: '/assets/projects/elektrik-1.webp', caption: 'Saha İnceleme Videosu' }
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setActiveMediaIndex(0);
  };

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
          </p>
        </div>

        {/* Projects Grid with Services Neon & Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              onClick={() => openProjectModal(project)}
              className="group relative bg-white dark:bg-slate-950 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-[0_0_50px_10px_rgba(37,99,235,0.5)] dark:hover:shadow-[0_0_60px_15px_rgba(59,130,246,0.7)] border-2 border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                <span className="absolute bottom-3 left-4 text-white text-xs font-semibold px-2.5 py-1 bg-blue-600/90 backdrop-blur-md rounded-md shadow-sm">
                  {project.gallery.length} Medya (Foto & Video)
                </span>
              </div>

              {/* Content Area */}
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

                {/* Footer Link with Slide Animation */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm font-semibold text-blue-600 dark:text-blue-400">
                  <span className="group-hover:underline">Galeriyi İncele</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Proje Galeri Modalı (Pop-up) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
          <div className="bg-white dark:bg-slate-900 max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {selectedProject.subtitle} • {activeMediaIndex + 1} / {selectedProject.gallery.length}
                </p>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Büyük Medya Ekranı */}
            <div className="relative bg-black flex-1 min-h-[320px] max-h-[480px] flex items-center justify-center overflow-hidden">
              {selectedProject.gallery[activeMediaIndex].type === 'video' ? (
                <video 
                  controls 
                  autoPlay 
                  key={selectedProject.gallery[activeMediaIndex].url}
                  className="w-full h-full max-h-[480px] object-contain"
                >
                  <source src={selectedProject.gallery[activeMediaIndex].url} type="video/mp4" />
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>
              ) : (
                <img 
                  src={selectedProject.gallery[activeMediaIndex].url} 
                  alt={selectedProject.gallery[activeMediaIndex].caption} 
                  className="w-full h-full max-h-[480px] object-contain"
                />
              )}

              {/* Sağ-Sol Navigasyon Okları */}
              {activeMediaIndex > 0 && (
                <button 
                  onClick={() => setActiveMediaIndex(prev => prev - 1)}
                  className="absolute left-3 p-2 rounded-full bg-black/60 text-white hover:bg-blue-600 transition-colors"
                >
                  ◀
                </button>
              )}
              {activeMediaIndex < selectedProject.gallery.length - 1 && (
                <button 
                  onClick={() => setActiveMediaIndex(prev => prev + 1)}
                  className="absolute right-3 p-2 rounded-full bg-black/60 text-white hover:bg-blue-600 transition-colors"
                >
                  ▶
                </button>
              )}

              {/* Medya Açıklaması */}
              <div className="absolute bottom-0 inset-x-0 bg-slate-950/70 text-white text-xs px-4 py-2 text-center backdrop-blur-sm">
                {selectedProject.gallery[activeMediaIndex].caption}
              </div>
            </div>

            {/* Küçük Resimler (Thumbnails) Şeridi */}
            <div className="p-4 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-x-auto flex space-x-3">
              {selectedProject.gallery.map((media, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMediaIndex(idx)}
                  className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    activeMediaIndex === idx 
                      ? 'border-blue-600 scale-105 shadow-md' 
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={media.type === 'video' ? (media.poster || media.url) : media.url} 
                    alt={media.caption} 
                    className="w-full h-full object-cover"
                  />
                  {media.type === 'video' && (
                    <span className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-bold">
                      ▶
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Modal Açıklama Metni */}
            <div className="p-5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-200 dark:border-slate-800">
              {selectedProject.description}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}