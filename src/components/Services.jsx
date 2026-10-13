import React from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 'endustriyel-otomasyon',
    title: 'Endüstriyel Otomasyon',
    description: 'PLC, SCADA ve fabrika otomasyon sistemleri ile üretim hatlarınızda maksimum verimlilik ve kontrol.',
    image: 'image_agent_tag_6009994608536901501',
    icon: '⚙️'
  },
  {
    id: 'gunes-enerji-sistemleri',
    title: 'Güneş Enerji Sistemleri (GES)',
    description: 'Çatı ve arazi GES projelerinde anahtar teslim mühendislik, fizibilite ve kurulum çözümleri.',
    image: 'image_agent_tag_6009994608536902414',
    icon: '☀️'
  },
  {
    id: 'ag-og-elektrik-projeleri',
    title: 'AG-OG Elektrik Projeleri',
    description: 'Alçak ve orta gerilim dağıtım sistemleri, trafo merkezleri ve enerji nakil hatları tasarımı.',
    image: 'image_agent_tag_6009994608536903327',
    icon: '⚡'
  },
  {
    id: 'proje-yonetimi',
    title: 'Proje Yönetimi & Danışmanlık',
    description: 'Mühendislik projelerinizde süreç optimizasyonu, maliyet yönetimi ve teknik müşavirlik.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f7645?auto=format&fit=crop&q=80&w=800',
    icon: '📊'
  },
  {
    id: 'bina-elektrik-tesisati',
    title: 'Bina Elektrik Tesisatı',
    description: 'Endüstriyel ve ticari binalar için akıllı bina, aydınlık, zayıf akım ve anahtar teslim elektrik tesisatları.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
    icon: '🏢'
  },
  {
    id: 'kablaj-muhendisligi',
    title: 'Kablaj Mühendisliği',
    description: 'Özel endüstriyel panolar, kablo rotalama optimizasyonu, harness tasarımı ve elektromanyetik uyumluluk.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    icon: '🔌'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full">
            Uzmanlık Alanlarımız
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Mühendislik ve Enerji Çözümlerimiz
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Endüstrinin ve modern yapıların ihtiyaç duyduğu tüm elektrik ve otomasyon süreçlerinde profesyonel yaklaşım.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link 
              key={service.id}
              to={`/hizmetler/${service.id}`}
              className="group relative bg-white dark:bg-slate-950 rounded-2xl p-6 shadow-md hover:shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div>
                {/* Header with Icon & Image Preview Container */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  
                  {/* Small Image Preview that pops up/zooms on hover */}
                  <div className="w-16 h-12 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500" 
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card Footer / Action Link Indicator */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm font-semibold text-blue-600 dark:text-blue-400">
                <span>Detaylı İncele</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}