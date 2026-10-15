import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleNavClick = (hash) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="sticky top-0 z-50 transition-colors duration-300 bg-blue-900 text-white dark:bg-slate-900 dark:text-slate-100 border-b border-blue-800 dark:border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Alanı - Görsel Logo ile Güncellendi */}
          {/* Logo Alanı */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="/" 
              onClick={handleLogoClick} 
              className="flex items-center cursor-pointer focus:outline-none"
            >
              <img 
                src="/logo_nav.png" 
                alt="Vision Mühendislik" 
                className="h-40 sm:h-40 w-auto object-contain mix-blend-screen"
              />
            </a>
          </div>
          {/* Desktop Menu - Yazılar text-lg yapılarak büyütüldü */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" onClick={() => handleNavClick('#hero')} className="text-lg font-medium text-slate-200 hover:text-white dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Ana Sayfa</a>
            <a href="#services" onClick={() => handleNavClick('#services')} className="text-lg font-medium text-slate-200 hover:text-white dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Hizmetler</a>
            <a href="#contact" onClick={() => handleNavClick('#contact')} className="text-lg font-medium text-slate-200 hover:text-white dark:text-slate-300 dark:hover:text-blue-400 transition-colors">İletişim</a>
            
            {/* Dark Mode Toggle Button */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-lg bg-blue-800 dark:bg-slate-800 text-yellow-300 dark:text-slate-200 hover:bg-blue-700 transition-colors"
              aria-label="Tema Değiştir"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-blue-800 dark:bg-slate-800 text-yellow-300 dark:text-slate-200"
              aria-label="Tema Değiştir"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white dark:text-slate-200 focus:outline-none"
              aria-label="Menüyü Aç/Kapat"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-950 dark:bg-slate-900 border-b border-blue-800 dark:border-slate-800 px-4 pt-3 pb-5 space-y-3">
          <a href="#hero" onClick={() => handleNavClick('#hero')} className="block px-3 py-2 rounded-md text-lg font-medium text-slate-200 hover:bg-blue-900">Ana Sayfa</a>
          <a href="#services" onClick={() => handleNavClick('#services')} className="block px-3 py-2 rounded-md text-lg font-medium text-slate-200 hover:bg-blue-900">Hizmetler</a>
          <a href="#contact" onClick={() => handleNavClick('#contact')} className="block px-3 py-2 rounded-md text-lg font-medium text-slate-200 hover:bg-blue-900">İletişim</a>
        </div>
      )}
    </nav>
  );
}