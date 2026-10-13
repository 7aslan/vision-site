import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Endüstriyel Otomasyon',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz!');
    // İleride burayı EmailJS veya kendi backend servisinize bağlayabiliriz.
  };

  return (
    <section id="contact" className="py-24 bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sol Kolon: İletişim Bilgileri ve Güven Detayları */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full">
                Bize Ulaşın
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
                Projeniz İçin Teklif Alın
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Mühendislik ve otomasyon çözümlerimiz hakkında bilgi almak, ücretsiz keşif veya teknik teklif talep etmek için formumuzu doldurabilir ya da doğrudan bize ulaşabilirsiniz.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Adres</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Organize Sanayi Bölgesi, Mühendislik Cad. No:12</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Telefon</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">+90 (5XX) XXX XX XX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">E-Posta</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">info@muhendislik.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Teklif Formu */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Ad Soyad / Firma</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Ahmet Yılmaz"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">E-Posta Adresi</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="ahmet@firma.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Telefon Numarası</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="05XX XXX XX XX"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">İlgilendiğiniz Hizmet</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option>Endüstriyel Otomasyon</option>
                    <option>Güneş Enerji Sistemleri (GES)</option>
                    <option>AG-OG Elektrik Projeleri</option>
                    <option>Proje Yönetimi & Danışmanlık</option>
                    <option>Bina Elektrik Tesisatı</option>
                    <option>Kablaj Mühendisliği</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Proje Detayları & Mesajınız</label>
                <textarea 
                  rows="4" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Projeniz hakkında kısa bilgi verin..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all text-center"
              >
                Teklif Talebi Gönder
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}