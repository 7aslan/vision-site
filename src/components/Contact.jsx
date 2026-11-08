import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    
    // Web3Forms API'ye gönderim
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setLoading(false);
        e.target.reset();
      } else {
        setLoading(false);
        alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      setLoading(false);
      alert("Bağlantı hatası oluştu.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full">
            İletişim & Teklif
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Projeleriniz İçin Bize Ulaşın
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Endüstriyel otomasyon, GES ve mühendislik projelerinizde profesyonel destek almak için formu doldurun, en kısa sürede dönüş yapalım.
          </p>
        </div>

        {/* İki kutuyu aynı boyutta tutmak için items-stretch kullandık */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Sol Taraf: İletişim Bilgileri (h-full ile tam boy) */}
          <div className="h-full flex flex-col justify-between space-y-8 bg-[#f4f5f8] dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              İletişim Bilgilerimiz
            </h3>
            
            <div className="space-y-6 flex-grow">
              
              {/* Adres - Google Maps Linki */}
              <a 
                href="https://www.google.com/maps/place/AutoSecVision+End%C3%BCstriyel+Otomasyon+ve+Enerji+Sistemleri/@37.1512921,37.3014362,17z/data=!4m6!3m5!1s0x1531e39a385358c9:0xebe9888093f2746e!8m2!3d37.1512921!4d37.3014362!16s%2Fg%2F11mzcjf74j" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-3 -mx-3 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-900/60 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold shrink-0 group-hover:scale-105 transition-transform">
                  📍
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Adres</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">SAM MAH. 66056 NOLU SK. NO: 31 A ŞEHİTKAMİL/GAZİANTEP</p>
                </div>
              </a>

              {/* Telefon 1 (GSM) */}
              <a 
                href="tel:+905511262969" 
                className="flex items-start space-x-4 p-3 -mx-3 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-900/60 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold shrink-0 group-hover:scale-105 transition-transform">
                  📞
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Telefon</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">+90 (551) 126 29 69</p>
                </div>
              </a>

              {/* Sabit Hat - Mobilde Tüm Kutu Tıklanabilir (tel:), Altı Çizili Değil */}
              <a 
                href="tel:+905413373815" 
                className="md:hidden flex items-start space-x-4 p-3 -mx-3 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-900/60 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold shrink-0 group-hover:scale-105 transition-transform">
                  ☎️
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Sabit Hat / Diğer</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">+90 (541) 337 3815</p>
                </div>
              </a>

              {/* Sabit Hat - PC'de Tıklanamaz / Sayfada Kalır */}
              <div className="hidden md:flex items-start space-x-4 p-3 -mx-3 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-900/60 transition-all group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold shrink-0 group-hover:scale-105 transition-transform">
                  ☎️
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Sabit Hat / Diğer</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">+90 (541) 337 3815</p>
                </div>
              </div>

              {/* E-Posta */}
              <a 
                href="mailto:info@visionmuhendislik.com" 
                className="flex items-start space-x-4 p-3 -mx-3 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-900/60 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold shrink-0 group-hover:scale-105 transition-transform">
                  ✉️
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">E-Posta</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">info@visionmuhendislik.com</p>
                </div>
              </a>

            </div>
          </div>

          {/* Sağ Taraf: Form (h-full ile sol kutuyla tam eşit boy) */}
          <div className="h-full flex flex-col justify-between bg-[#f4f5f8] dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
            {submitted ? (
              <div className="py-12 text-center space-y-4 my-auto">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Mesajınız Alındı!</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Teklif talebiniz başarıyla bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col justify-between">
                
                <div className="space-y-6">
                  
                  {/* Web3Forms Access Key */}
                  <input type="hidden" name="apikey" value={import.meta.env.VITE_WEB3FORMS_KEY} />  

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Ad Soyad / Firma</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Adınız veya Şirket Adı"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">E-Posta Adresiniz</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="ornek@sirket.com"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Mesajınız / Proje Detayı</label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder="Projenizden kısaca bahsedin..."
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 transition-all text-center disabled:opacity-50 mt-6"
                >
                  {loading ? 'Gönderiliyor...' : 'Teklif İste / Gönder'}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Google Maps Harita Konumu */}
        <div className="w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
          <div className="p-4 bg-[#f4f5f8] dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <span>🗺️</span>
              <span>Konum:</span>
            </h4>
            <a 
              href="https://www.google.com/maps/place/AutoSecVision+End%C3%BCstriyel+Otomasyon+ve+Enerji+Sistemleri/@37.1512921,37.3014362,17z/data=!4m6!3m5!1s0x1531e39a385358c9:0xebe9888093f2746e!8m2!3d37.1512921!4d37.3014362!16s%2Fg%2F11mzcjf74j" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Büyük Haritada Aç →
            </a>
          </div>
          <div className="w-full h-80 sm:h-96">
            <iframe
              title="AutoSecVision Konum"
              src="https://maps.google.com/maps?q=AutoSecVision+End%C3%BCstriyel+Otomasyon+ve+Enerji+Sistemleri&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter dark:contrast-125 dark:opacity-90"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}