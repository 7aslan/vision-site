import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-slate-300 dark:bg-slate-900 dark:text-slate-400 border-t border-blue-900 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Kolon 1: Logo & Şirket Özet Bilgisi */}
          <div className="space-y-4">
            <span className="text-2xl font-extrabold tracking-tight text-white dark:text-blue-400">
              Mühendislik<span className="text-blue-500">.</span>
            </span>
            <p className="text-sm text-slate-300 dark:text-slate-400 leading-relaxed">
              Endüstriyel otomasyon, GES, AG-OG elektrik projeleri ve bina tesisat çözümlerinde güvenilir, yüksek standartlı mühendislik hizmetleri.
            </p>
          </div>

          {/* Kolon 2: Hızlı Bağlantılar */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white dark:text-slate-200 uppercase tracking-wider text-xs">
              Hızlı Menü
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white dark:hover:text-blue-400 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-white dark:hover:text-blue-400 transition-colors">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white dark:hover:text-blue-400 transition-colors">
                  Teklif Al / İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Kolon 3: Uzmanlık Alanlarımız */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white dark:text-slate-200 uppercase tracking-wider text-xs">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/hizmetler/endustriyel-otomasyon" className="hover:text-white dark:hover:text-blue-400 transition-colors">
                  Endüstriyel Otomasyon
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/gunes-enerji-sistemleri" className="hover:text-white dark:hover:text-blue-400 transition-colors">
                  Güneş Enerji Sistemleri (GES)
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/ag-og-elektrik-projeleri" className="hover:text-white dark:hover:text-blue-400 transition-colors">
                  AG-OG Elektrik Projeleri
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/kablaj-muhendisligi" className="hover:text-white dark:hover:text-blue-400 transition-colors">
                  Kablaj Mühendisliği
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolon 4: İletişim Bilgileri */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white dark:text-slate-200 uppercase tracking-wider text-xs">
              Bize Ulaşın
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2.5">
                <span className="text-blue-400 font-bold">📍</span>
                <span>Organize Sanayi Bölgesi, Mühendislik Cad. No:12</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="text-blue-400 font-bold">📞</span>
                <span>+90 (551) 126 29 69</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="text-blue-400 font-bold">✉️</span>
                <span>info@visionmuhendislik.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Alt Çizgi & Telif Hakkı (Copyright) */}
        <div className="mt-12 pt-8 border-t border-blue-900/60 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-4">
          <p>© {currentYear} Mühendislik A.Ş. Tüm hakları saklıdır.</p>
          <p className="text-slate-400 dark:text-slate-500">
            Güvenilir & Yenilikçi Mühendislik Çözümleri
          </p>
        </div>
      </div>
    </footer>
  );
}