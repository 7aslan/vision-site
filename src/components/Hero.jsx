import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sol Taraf: Ana Başlık ve CTA Butonları */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-block px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full">
              Profesyonel Mühendislik & Danışmanlık
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Geleceğin Enerjisi ve <span className="text-blue-600 dark:text-blue-400">Akıllı Çözümler</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Endüstriyel otomasyon, GES projeleri, AG-OG elektrik ve kablaj mühendisliğinde anahtar teslim, güvenilir ve yüksek verimli çözümler sunuyoruz.
            </p>

            {/* Butonlar: Mobilde direkt arama tetikler, masaüstünde forma yönlendirir */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 transition-all text-center"
              >
                Teklif Alın
              </a>
              
              {/* Mobil cihazlarda direkt telefon aramasını tetikler (tel:), masaüstünde normal link gibi davranır */}
              <a 
                href="tel:+905511262969" 
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-xl border border-slate-300 dark:border-slate-700 shadow-sm transition-all text-center flex items-center justify-center gap-2"
              >
                <span>📞</span> Hemen Ara
              </a>
            </div>
          </div>

          {/* Sağ Taraf: Görseldeki Kartın Düzenlenmiş ve Mobilde Kusursuz Duran Hali */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 space-y-6 relative overflow-hidden">
              
              {/* Üst Kısım İkon ve Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl">
                  ⚡
                </div>
                <span className="px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 rounded-full border border-emerald-200 dark:border-emerald-800">
                  Aktif Çözüm Ortaklığı
                </span>
              </div>

              {/* Kart Açıklaması */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Mühendislik Çözümleri
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Modern simülasyon araçları, optimize edilmiş tasarımlar ve tam zamanında teslimat garantisi.
                </p>
              </div>

              {/* Alt İstatistikler (Mobilde ve PC'de bozulmayan grid yapısı) */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl">
                  <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">%100</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Güvenilirlik</div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl">
                  <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">7/24</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Teknik Destek</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}