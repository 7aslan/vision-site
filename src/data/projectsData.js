// src/data/projectsData.js
export const projectsData = [
  {
    id: "maden-sahasi",
    title: "Maden Sahası Otomasyonu",
    subtitle: "Endüstriyel Altyapı",
    description: "Maden sahası için gerçekleştirilen komple otomasyon, pano imalatı ve saha kablaj mühendisliği çalışmaları.",
    coverImage: "https://res.cloudinary.com/senin-cloud-adin/image/upload/v1/vision/maden/kapak.jpg", // Cloudinary kapak linki
    gallery: [
      { type: 'image', url: 'https://res.cloudinary.com/.../maden/foto1.jpg', caption: 'Saha Genel Görünüm' },
      { type: 'image', url: 'https://res.cloudinary.com/.../maden/foto2.jpg', caption: 'Pano Montajı' },
      { type: 'image', url: 'https://res.cloudinary.com/.../maden/foto3.jpg', caption: 'Kablaj Detayı' },
      { type: 'image', url: 'https://res.cloudinary.com/.../maden/foto4.jpg', caption: 'Test Aşaması' },
      { type: 'image', url: 'https://res.cloudinary.com/.../maden/foto5.jpg', caption: 'Kontrol Odası' },
      { type: 'video', url: 'https://res.cloudinary.com/.../maden/video1.mp4', poster: 'https://res.cloudinary.com/.../maden/kapak.jpg', caption: 'Sistem Çalışma Videosu' }
    ]
  },
  {
    id: "bedir-un-fabrikasi",
    title: "Bedir Un Fabrikası Projesi",
    subtitle: "Üretim Hattı Modernizasyonu",
    description: "Bedir Un Fabrikası için yapılan PLC tabanlı otomasyon, güç dağılımı ve anahtar teslim elektrik tesisat işleri.",
    coverImage: "https://res.cloudinary.com/senin-cloud-adin/image/upload/v1/vision/bedir/kapak.jpg",
    gallery: [
      { type: 'image', url: 'https://res.cloudinary.com/.../bedir/foto1.jpg', caption: 'Fabrika Dış Plan' },
      { type: 'image', url: 'https://res.cloudinary.com/.../bedir/foto2.jpg', caption: 'AG Dağıtım Panosu' },
      { type: 'image', url: 'https://res.cloudinary.com/.../bedir/foto3.jpg', caption: 'Sensör Entegrasyonu' },
      { type: 'image', url: 'https://res.cloudinary.com/.../bedir/foto4.jpg', caption: 'Kablo Kanal Düzeni' },
      { type: 'image', url: 'https://res.cloudinary.com/.../bedir/foto5.jpg', caption: 'Devreye Alma' },
      { type: 'video', url: 'https://res.cloudinary.com/.../bedir/video1.mp4', poster: 'https://res.cloudinary.com/.../bedir/kapak.jpg', caption: 'Fabrika Test Videosu' }
    ]
  }
  // Yarın 3. bir proje geldiğinde sadece buraya bir süslü parantez ({...}) daha ekleyeceksin!
];  