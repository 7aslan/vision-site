import React from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 'endustriyel-otomasyon',
    title: 'Endüstriyel Otomasyon',
    shortDesc: 'PLC, SCADA ve fabrika otomasyon sistemleri ile üretim hatlarınızda maksimum verimlilik.',
    detailDesc: 'Üretim süreçlerinizi dijitalleştiriyor; PLC, SCADA ve robotik sistem entegrasyonlarıyla hat duruş sürelerini minimuma indirip operasyonel verimliliği artırıyoruz.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gunes-enerji-sistemleri',
    title: 'Güneş Enerji Sistemleri (GES)',
    shortDesc: 'Çatı ve arazi GES projelerinde anahtar teslim mühendislik ve kurulum çözümleri.',
    detailDesc: 'Endüstriyel tesisleriniz ve işletmeleriniz için yüksek verimli fotovoltaik güneş enerjisi sistemleri tasarlıyor, fizibilite ve anahtar teslim kurulum yapıyoruz.',
    image: 'https://images.unsplash.com/photo-1509391365360-804d21f7c32e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ag-og-elektrik-projeleri',
    title: 'AG-OG Elektrik Projeleri',
    shortDesc: 'Alçak ve orta gerilim dağıtım sistemleri, trafo merkezleri ve enerji nakil hatları.',
    detailDesc: 'Tesislerinizin enerji altyapısını ulusal ve uluslararası standartlara uygun tasarlıyor; AG-OG dağıtım panoları, trafo ve şalt merkezleri projelerini hayata geçiriyoruz.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'proje-yonetimi',
    title: 'Proje Yönetimi & Danışmanlık',
    shortDesc: 'Mühendislik projelerinizde süreç optimizasyonu ve maliyet yönetimi.',
    detailDesc: 'Karmaşık mühendislik projelerini bütçe, zaman ve kalite kısıtları içerisinde başarıyla yönetiyor; teknik müşavirlik ve kapsamlı risk analizi hizmetleri sunuyoruz.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f7645?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bina-elektrik-tesisati',
    title: 'Bina Elektrik Tesisatı',
    shortDesc: 'Ticari ve endüstriyel binalar için akıllı bina ve aydınlatma sistemleri.',
    detailDesc: 'Modern yapılar ve endüstriyel binalar için güçlü zayıf akım, aydınlatma otomasyonu, yangın ihbar ve komple anahtar teslim bina elektrik tesisat çözümleri.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'kablaj-muhendisligi',
    title: 'Kablaj Mühendisliği',
    shortDesc: 'Özel endüstriyel panolar ve kablo rotalama optimizasyonu.',
    detailDesc: 'Endüstriyel makineler ve kontrol panoları için yüksek kaliteli kablaj, harness tasarımı, elektromanyetik uyumluluk (EMC) ve düzenli kablo rotalama mühendisliği.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
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
              className="group relative bg-white dark:bg-slate-950 rounded-2xl shadow-md hover:shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Container strictly bounded inside card */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity"></div>
                <span className="absolute bottom-3 left-4 text-white text-xs font-semibold px-2.5 py-1 bg-blue-600/80 backdrop-blur-sm rounded-md">
                  Mühendislik Çözümü
                </span>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Hover-aware dynamic description */}
                  <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed min-h-[4.5rem]">
                    <p className="group-hover:hidden transition-opacity duration-200">
                      {service.shortDesc}
                    </p>
                    <p className="hidden group-hover:block text-blue-900 dark:text-blue-200 font-medium transition-opacity duration-200 animate-fadeIn">
                      {service.detailDesc}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm font-semibold text-blue-600 dark:text-blue-400">
                  <span>Detaylı İncele</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}