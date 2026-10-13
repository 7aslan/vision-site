import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-100 dark:bg-slate-950 py-24 lg:py-32 transition-colors duration-300">
      {/* Background Decorative Gradient Shape */}
      <div className="absolute top-0 right-0 -z-10 transform translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <span>Yenilikçi Mühendislik & Danışmanlık</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-tight">
              Geleceği Sağlam Temeller Üzerine <span className="text-blue-600 dark:text-blue-400">İnşa Ediyoruz</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
              Endüstriyel ve yapısal mühendislik projelerinizde yüksek standartlar, hassas tasarım çözümleri ve güvenilir altyapı hizmetleri sunuyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all"
              >
                Teklif Alın
              </a>
              <a 
                href="#services" 
                className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-xl text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                Hizmetlerimizi İnceleyin
              </a>
            </div>
          </div>

          {/* Right Column: Visual / Engineering Badge Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
                  ⚡
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full">
                  Aktif Projeler
                </span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Mühendislik Çözümleri</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Modern simülasyon araçları, optimize edilmiş tasarımlar ve tam zamanında teslimat garantisi.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">%100</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Güvenilirlik</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">7/24</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Teknik Destek</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}