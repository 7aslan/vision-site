import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import ServiceDetail from './components/ServiceDetail';
import ScrollToTop from './components/ScrollToTop'; // 1. İçe aktar

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#f4f5f8] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <ScrollToTop /> {/* 2. Buraya ekle */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Routes>
        {/* Ana Sayfa */}
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Contact />
          </>
        } />

        {/* Hizmet Detay Sayfası */}
        <Route path="/hizmetler/:id" element={<ServiceDetail />} />
      </Routes>
    </div>
  );
}