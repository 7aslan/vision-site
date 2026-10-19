// src/data/projectsData.js
export const projectsData = [
  {
    id: "maden-sahasi",
    title: "Maden Sahası Otomasyonu",
    subtitle: "Endüstriyel Altyapı & Saha Uygulamaları",
    description: "Maden sahası için gerçekleştirilen komple otomasyon, PLC/SCADA yazılımı, pano imalatı ve saha kablaj mühendisliği çalışmaları.",
    coverImage: "https://res.cloudinary.com/dkup33xp3/image/upload/v1792412243/kablaj_ie3l1c.jpg", // Gerçek Cloudinary URL'in gelecek
    client: "Maden A.Ş.",
    location: "Gaziantep",
    date: "2024",
    gallery: [
      { type: 'image', url: 'https://res.cloudinary.com/dkup33xp3/image/upload/v1792412221/elektrik2_xldkgr.jpg', caption: '' },
      { type: 'image', url: 'https://res.cloudinary.com/dkup33xp3/image/upload/v1792412221/elektrik3_ywct3o.jpg', caption: '' },
      { type: 'image', url: 'https://res.cloudinary.com/dkup33xp3/image/upload/v1792412221/elektrik1_nm7sjf.jpg', caption: '' },
      { type: 'video', url: 'https://res.cloudinary.com/dkup33xp3/video/upload/v1792412233/og-ag_elektrik_bwrkhk.mp4', poster: 'https://res.cloudinary.com/dkup33xp3/video/upload/v1792412233/og-ag_elektrik_bwrkhk.mp4', caption: 'Saha Test Videosu' }
    ]
  },
  {
    id: "bedir-un-fabrikasi",
    title: "Bedir Un Fabrikası Projesi",
    subtitle: "Kablaj Mühendisliği & Elektrik Panoları",
    description: "BEDİR Un Fabrikası bünyesinde bulunan elevatör, vals (öğütme), aspiratör ve fan, helezon konveyör, rotary valf, plansifter (elek), kompresör, pnömatik taşıma, paketleme ve paletleme sistemlerine ait elektrik motorlarının enerji beslemelerini sağlamak amacıyla yeni elektrik kumanda ve dağıtım panolarının imalatı gerçekleştirilmiştir. ",
    coverImage: "https://res.cloudinary.com/dkup33xp3/image/upload/v1792412239/elektrik-pano_hvzvws.jpg",
    client: "Bedir Un Sanayi",
    location: "Gaziantep OSB",
    date: "2024",
    gallery: [
      { type: 'image', url: 'https://res.cloudinary.com/dkup33xp3/image/upload/v1792412239/elektrik-pano_hvzvws.jpg', caption: 'Kablo Kanal Düzeni' },
      { type: 'image', url: 'https://res.cloudinary.com/dkup33xp3/image/upload/v1792412243/kablaj_ie3l1c.jpg', caption: 'Devreye Alma Ölçümleri' },
      { type: 'video', url: 'https://res.cloudinary.com/dkup33xp3/video/upload/v1792412275/WhatsApp_Video_2026-10-15_at_20.55.44_v6hx5v.mp4', poster: 'https://res.cloudinary.com/dkup33xp3/video/upload/v1792412275/WhatsApp_Video_2026-10-15_at_20.55.44_v6hx5v.mp4', caption: 'Fabrika Otomasyon Test Videosu' }
    ]
  }
];