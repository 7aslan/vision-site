import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import ServiceDetail from './components/ServiceDetail';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer'; // 1. Import et
import Projects from './components/Projects'; 

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
    <div className="min-h-screen bg-[#f4f5f8] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col justify-between">
      <div>
        <ScrollToTop />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Routes>
          {/* Ana Sayfa */}
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Projects/>
              <Contact />
            </>
          } />

          {/* Hizmet Detay Sayfası */}
          <Route path="/hizmetler/:id" element={<ServiceDetail />} />
        </Routes>
      </div>

      {/* 2. En alta Footer ekle */}
      <Footer />
    </div>
  );
}