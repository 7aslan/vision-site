import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find((p) => p.id === id);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  // Sayfa açıldığında en üste kaydır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Proje Bulunamadı</h2>
        <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
          Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  const currentMedia = project.gallery[activeMediaIndex];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Geri Dön Butonu */}
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center space-x-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline mb-8 cursor-pointer"
        >
          <span>←</span>
          <span>Projelerimize Dön</span>
        </button>

        {/* Proje Başlığı ve Özet */}
        <div className="mb-8 space-y-2">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            {project.subtitle}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {project.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl pt-2">
            {project.description}
          </p>
        </div>

        {/* Ana Medya Sahnesi (Mobil ve Masaüstü Uyumlu Ekran) */}
        <div className="bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 relative mb-6">
          <div className="relative min-h-[320px] sm:min-h-[480px] max-h-[600px] flex items-center justify-center">
            
            {currentMedia.type === 'video' ? (
              <video 
                controls 
                autoPlay 
                key={currentMedia.url}
                className="w-full h-full max-h-[600px] object-contain"
              >
                <source src={currentMedia.url} type="video/mp4" />
                Tarayıcınız video oynatmayı desteklemiyor.
              </video>
            ) : (
              <img 
                src={currentMedia.url} 
                alt={currentMedia.caption} 
                className="w-full h-full max-h-[600px] object-contain"
              />
            )}

            {/* Sol - Sağ Ok Butonları */}
            {activeMediaIndex > 0 && (
              <button 
                onClick={() => setActiveMediaIndex((prev) => prev - 1)}
                className="absolute left-3 p-3 rounded-full bg-slate-900/80 text-white hover:bg-blue-600 transition-colors shadow-lg"
              >
                ◀
              </button>
            )}
            {activeMediaIndex < project.gallery.length - 1 && (
              <button 
                onClick={() => setActiveMediaIndex((prev) => prev + 1)}
                className="absolute right-3 p-3 rounded-full bg-slate-900/80 text-white hover:bg-blue-600 transition-colors shadow-lg"
              >
                ▶
              </button>
            )}
          </div>

          {/* Medya Açıklama Altlığı */}
          <div className="bg-slate-900 px-6 py-3 border-t border-slate-800 flex justify-between items-center text-xs sm:text-sm text-slate-300">
            <span>{currentMedia.caption}</span>
            <span className="font-semibold text-blue-400">
              {activeMediaIndex + 1} / {project.gallery.length}
            </span>
          </div>
        </div>

        {/* Küçük Görseller (Thumbnails) - Yatay Kaydırma */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
            Saha Görselleri & Videolar ({project.gallery.length})
          </h3>
          <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-600">
            {project.gallery.map((media, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMediaIndex(idx)}
                className={`relative flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  activeMediaIndex === idx 
                    ? 'border-blue-600 scale-105 shadow-lg ring-2 ring-blue-600/50' 
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={media.type === 'video' ? (media.poster || media.url) : media.url} 
                  alt={media.caption} 
                  className="w-full h-full object-cover"
                />
                {media.type === 'video' && (
                  <span className="absolute inset-0 bg-slate-950/50 flex items-center justify-center text-white text-xs font-bold">
                    ▶ Video
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Proje Künyesi / Bilgi Kartı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">Müşteri / Firma</span>
            <span className="text-base font-bold text-slate-900 dark:text-white mt-1 block">{project.client}</span>
          </div>
          <div>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">Konum</span>
            <span className="text-base font-bold text-slate-900 dark:text-white mt-1 block">{project.location}</span>
          </div>
          <div>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">Tamamlanma Yılı</span>
            <span className="text-base font-bold text-slate-900 dark:text-white mt-1 block">{project.date}</span>
          </div>
        </div>

      </div>
    </div>
  );
}