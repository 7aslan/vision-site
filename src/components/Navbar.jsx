import React, { useState } from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 transition-colors duration-300 bg-blue-900 text-white dark:bg-slate-900 dark:text-slate-100 border-b border-blue-800 dark:border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold tracking-tight text-white dark:text-blue-400">
              Mühendislik<span className="text-blue-400">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-sm font-medium text-slate-200 hover:text-white dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Ana Sayfa</a>
            <a href="#services" className="text-sm font-medium text-slate-200 hover:text-white dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Hizmetler</a>
            <a href="#contact" className="text-sm font-medium text-slate-200 hover:text-white dark:text-slate-300 dark:hover:text-blue-400 transition-colors">İletişim</a>
            
            {/* Dark Mode Toggle Button */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-blue-800 dark:bg-slate-800 text-yellow-300 dark:text-slate-200 hover:bg-blue-700 transition-colors"
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
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white dark:text-slate-200 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-950 dark:bg-slate-900 border-b border-blue-800 dark:border-slate-800 px-4 pt-2 pb-4 space-y-2">
          <a href="#hero" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-blue-900">Ana Sayfa</a>
          <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-blue-900">Hizmetler</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-blue-900">İletişim</a>
        </div>
      )}
    </nav>
  );
}