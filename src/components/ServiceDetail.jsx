import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Veriyi dinamik dosyadan id'ye göre filtreleyip çekiyoruz
  const service = servicesData.find((s) => s.id === id);

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Hizmet Bulunamadı</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">Aradığınız mühendislik hizmeti bulunamadı veya kaldırılmış olabilir.</p>
        <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
          Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 bg-[#f4f5f8] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb / Geri Dön */}
        <div>
          <Link to="/" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
            ← Ana Sayfaya Dön
          </Link>
        </div>

        {/* Başlık ve Kategori */}
        <div className="space-y-4">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full">
            {service.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {service.title}
          </h1>
        </div>

        {/* Büyük Kapak Görseli (Cloudinary CDN) */}
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-slate-900">
          <img 
            src={service.image} 
            alt={`${service.title} - Vision Mühendislik`} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* İçerik ve Özellikler Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Sol / Ana Açıklama */}
          <div className="lg:col-span-2 space-y-6 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Hizmet Detayları</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {service.detailDesc}
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Mühendislik ekibimiz, en son endüstriyel standartları ve teknolojik altyapıyı kullanarak projenizin başından sonuna kadar kusursuz bir süreç yürütür. Kalite kontrol ve güvenlik önlemleri en üst düzeyde tutulur.
            </p>
          </div>

          {/* Sağ / Teknik Avantajlar & Teklif Kutusu */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 space-y-4">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                Teknik Kapsam & Avantajlar
              </h4>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                    <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg space-y-4 text-center">
              <h4 className="text-lg font-bold">Bu Hizmet İçin Teklif Alın</h4>
              <p className="text-xs text-slate-200">Projeleriniz için uzman mühendislerimizle hemen görüşün.</p>
              <button 
                onClick={handleContactClick}
                className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow transition-colors text-center cursor-pointer"
              >
                İletişime Geç
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}