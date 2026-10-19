import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-slate-300 dark:bg-slate-900 dark:text-slate-400 border-t border-blue-900 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Kolon 1: Logo & Şirket Özet Bilgisi */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center">
              <img 
                src="/logo_nav.png" 
                alt="Vision Mühendislik" 
                className="h-36 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-300 dark:text-slate-400 leading-relaxed max-w-sm">
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
                <a href="/#projects" className="hover:text-white dark:hover:text-blue-400 transition-colors">
                  Projelerimiz
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
                <span>SAM MAH. 66056 NOLU SK. NO: 31 ŞEHİTKAMİL/GAZİANTEP</span>
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

        {/* Alt Çizgi, Telif Hakkı & Designed By İmzası */}
        <div className="mt-12 pt-8 border-t border-blue-900/60 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-4">
          <p>© {currentYear} Vision Mühendislik. Tüm hakları saklıdır.</p>
          
          {/* GitHub Imzası */}
          <div className="flex items-center space-x-1.5">
            <span>Designed & Developed by</span>
            <a 
              href="https://github.com/7aslan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold text-blue-400 hover:text-blue-300 dark:hover:text-blue-300 hover:underline transition-colors flex items-center space-x-1"
            >
              <span>Samet Aslan</span>
              <svg className="w-3.5 h-3.5 fill-current inline-block ml-0.5" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}