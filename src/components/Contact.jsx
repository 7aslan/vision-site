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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Sol Taraf: İletişim Bilgileri */}
          <div className="space-y-8 bg-[#f4f5f8] dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              İletişim Bilgilerimiz
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Adres</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Organize Sanayi Bölgesi, Mühendislik Cad. No:12, Gaziantep</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold shrink-0">
                  📞
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Telefon</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">+90 (5XX) XXX XX XX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold shrink-0">
                  ✉️
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">E-Posta</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">info@visionmuhendislik.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf: Form */}
          <div className="bg-[#f4f5f8] dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Web3Forms Access Key - Buraya kendi anahtarını yapıştıracaksın */}
                <input type="hidden" name="apikey" value="9ab027ab-4903-465e-a215-62a4868ffa9f" />

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

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 transition-all text-center disabled:opacity-50"
                >
                  {loading ? 'Gönderiliyor...' : 'Teklif İste / Gönder'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}