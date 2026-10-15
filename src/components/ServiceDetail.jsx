import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

// Tüm hizmetlerin detaylı verileri
const servicesDetailsData = {
  'endustriyel-otomasyon': {
    title: 'Endüstriyel Otomasyon Sistemleri',
    category: 'Otomasyon',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    description: 'Üretim süreçlerinizi dijitalleştiriyor; PLC, SCADA ve robotik sistem entegrasyonlarıyla hat duruş sürelerini minimuma indirip operasyonel verimliliği artırıyoruz.',
    features: [
      'Siemens, Schneider ve Allen-Bradley PLC programlama',
      'Endüstriyel SCADA ve HMI arayüz tasarımı',
      'Üretim hattı optimizasyonu ve hatasızlık kontrolü',
      '7/24 uzaktan izleme ve arıza destek altyapısı'
    ]
  },
  'gunes-enerji-sistemleri': {
    title: 'Güneş Enerji Sistemleri (GES)',
    category: 'Enerji',
    image: 'https://images.unsplash.com/photo-1509391365360-804d21f7c32e?auto=format&fit=crop&q=80&w=1200',
    description: 'Endüstriyel tesisleriniz ve işletmeleriniz için yüksek verimli fotovoltaik güneş enerjisi sistemleri tasarlıyor, fizibilite ve anahtar teslim kurulum yapıyoruz.',
    features: [
      'Çatı ve arazi tipi GES projelerinde anahtar teslim çözüm',
      'Detaylı gölgeleme analizi ve üretim simülasyonları',
      'TEDAŞ ve EDAŞ onay süreçleri, proje yönetimi',
      'Yüksek kaliteli inverter ve panel optimizasyonu'
    ]
  },
  'ag-og-elektrik-projeleri': {
    title: 'AG-OG Elektrik Projeleri',
    category: 'Elektrik Altyapı',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    description: 'Tesislerinizin enerji altyapısını ulusal ve uluslararası standartlara uygun tasarlıyor; AG-OG dağıtım panoları, trafo ve şalt merkezleri projelerini hayata geçiriyoruz.',
    features: [
      'Orta gerilim hücre ve trafo merkezi tasarımı',
      'Kablo kesit hesapları ve gerilim düşümü analizleri',
      'Kompanzasyon ve reaktif güç yönetimi projeleri',
      'Güç dağıtım şebekesi simülasyonları'
    ]
  },
  'proje-yonetimi': {
    title: 'Proje Yönetimi & Danışmanlık',
    category: 'Danışmanlık',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f7645?auto=format&fit=crop&q=80&w=1200',
    description: 'Karmaşık mühendislik projelerini bütçe, zaman ve kalite kısıtları içerisinde başarıyla yönetiyor; teknik müşavirlik ve kapsamlı risk analizi hizmetleri sunuyoruz.',
    features: [
      'İş programı (Gantt) ve bütçe planlaması',
      'Taşeron koordinasyonu ve kalite kontrol denetimleri',
      'Mevzuat uygunluk ve teknik şartname hazırlama',
      'Risk yönetimi ve maliyet optimizasyonu'
    ]
  },
  'bina-elektrik-tesisati': {
    title: 'Bina Elektrik Tesisatı',
    category: 'Zayıf & Kuvvetli Akım',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200',
    description: 'Modern yapılar ve endüstriyel binalar için güçlü zayıf akım, aydınlatma otomasyonu, yangın ihbar ve komple anahtar teslim bina elektrik tesisat çözümleri.',
    features: [
      'Aydınlatma ve priz tesisat projeleri',
      'Yangın algılama ve acil anons sistemleri',
      'CCTV güvenlik ve geçiş kontrol sistemleri',
      'Zayıf akım ve yapısal kablolama'
    ]
  },
  'kablaj-muhendisligi': {
    title: 'Kablaj Mühendisliği',
    category: 'Pano & Kablolama',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    description: 'Endüstriyel makineler ve kontrol panoları için yüksek kaliteli kablaj, harness tasarımı, elektromanyetik uyumluluk (EMC) ve düzenli kablo rotalama mühendisliği.',
    features: [
      'Özel endüstriyel kablo demeti (harness) tasarımı',
      'Pano içi düzen ve elektromanyetik uyumluluk (EMC)',
      'Kablo rotalama optimizasyonu ve etiketleme',
      'Yüksek akım ve sinyal iletim testleri'
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesDetailsData[id];

  // İletişime geç butonuna tıklandığında ana sayfaya gidip #contact bölümüne yumuşak kaydırma yapar
  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Hizmet Bulunamadı</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">Aradığınız mühendislik hizmeti bulunamadı veya kaldırılmış olabilir.</p>
        <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
          Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 bg-[#f4f5f8] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb / Geri Dön */}
        <div>
          <Link to="/" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
            ← Ana Sayfaya Dön
          </Link>
        </div>

        {/* Başlık ve Kategori */}
        <div className="space-y-4">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full">
            {service.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {service.title}
          </h1>
        </div>

        {/* Büyük Kapak Görseli (SEO Uyumlu Alt Etiketi ile) */}
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
          <img src={service.image} alt={`${service.title} - Vision Mühendislik`} className="w-full h-full object-cover" />
        </div>

        {/* İçerik ve Özellikler Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Sol / Ana Açıklama (2 Sütun) */}
          <div className="lg:col-span-2 space-y-6 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Hizmet Detayları</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {service.description}
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Mühendislik ekibimiz, en son endüstriyel standartları ve teknolojik altyapıyı kullanarak projenizin başından sonuna kadar kusursuz bir süreç yürütür. Kalite kontrol ve güvenlik önlemleri en üst düzeyde tutulur.
            </p>
          </div>

          {/* Sağ / Teknik Avantajlar & Teklif Kutusu (1 Sütun) */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 space-y-4">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                Teknik Kapsam & Avantajlar
              </h4>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                    <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg space-y-4 text-center">
              <h4 className="text-lg font-bold">Bu Hizmet İçin Teklif Alın</h4>
              <p className="text-xs text-slate-200">Projeleriniz için uzman mühendislerimizle hemen görüşün.</p>
              <button 
                onClick={handleContactClick}
                className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow transition-colors text-center cursor-pointer"
              >
                İletişime Geç
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}