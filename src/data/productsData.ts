export interface ProductItem {
  id: string;
  category: 'is-guvenligi' | 'cizme' | 'lastik-pvc' | 'keten-deniz' | 'bot-terlik';
  categoryLabel: string;
  brand: string;
  code: string;
  name: string;
  sizes: string;
  color: string;
  image: string;
}

export const PRODUCTS_LIST: ProductItem[] = [
  // EMEX İŞ GÜVENLİĞİ AYAKKABILARI
  {
    id: 'emex-ca10',
    category: 'is-guvenligi',
    categoryLabel: 'İş Güvenliği Ayakkabıları',
    brand: 'EMEX',
    code: 'ITALYAN CA10',
    name: 'Emex Deri İş Güvenliği Ayakkabısı',
    sizes: '40 - 45 Numara',
    color: 'Siyah',
    image: '/emek/products/emex-italyan-ca10.jpg'
  },
  {
    id: 'emex-yb107',
    category: 'is-guvenligi',
    categoryLabel: 'İş Güvenliği Ayakkabıları',
    brand: 'EMEX',
    code: 'MILANO YB107',
    name: 'Emex Deri İş Ayakkabısı',
    sizes: '40 - 45 Numara',
    color: 'Siyah / Reflektörlü',
    image: '/emek/products/emex-milano-yb107.jpg'
  },
  {
    id: 'emex-m1090',
    category: 'is-guvenligi',
    categoryLabel: 'İş Güvenliği Ayakkabıları',
    brand: 'EMEX',
    code: 'M 1090-S2',
    name: 'Emex S2 İş Güvenlik Botu',
    sizes: '40 - 45 Numara',
    color: 'Siyah',
    image: '/emek/products/emex-bot-m1090.jpg'
  },
  {
    id: 'emex-s1030',
    category: 'is-guvenligi',
    categoryLabel: 'İş Güvenliği Ayakkabıları',
    brand: 'EMEX',
    code: 'MADRID S1030',
    name: 'Emex Süet İş Güvenliği Ayakkabısı',
    sizes: '40 - 45 Numara',
    color: 'Gri / Lacivert',
    image: '/emek/products/emex-madrid-s1030.jpg'
  },

  // ULAŞ PVC & KAUÇUK ÇİZMELER
  {
    id: 'ulas-305p',
    category: 'cizme',
    categoryLabel: 'PVC & Kauçuk Çizmeler',
    brand: 'ULAŞ',
    code: '305-P',
    name: 'Ulaş Uzun PVC İş Çizmesi',
    sizes: '41 - 45 Numara',
    color: 'Siyah / Krep Taban',
    image: '/emek/products/ulas-305p-siyah.jpg'
  },
  {
    id: 'ulas-307p',
    category: 'cizme',
    categoryLabel: 'PVC & Kauçuk Çizmeler',
    brand: 'ULAŞ',
    code: '307-P',
    name: 'Ulaş Uzun Sarı İş Güvenliği Çizmesi',
    sizes: '41 - 45 Numara',
    color: 'Sarı / Siyah Taban',
    image: '/emek/products/ulas-307p-sari.jpg'
  },
  {
    id: 'ulas-207k',
    category: 'cizme',
    categoryLabel: 'PVC & Kauçuk Çizmeler',
    brand: 'ULAŞ',
    code: '207-K',
    name: 'Ulaş Uzun Krep / Kauçuk Çizme',
    sizes: '41 - 45 Numara',
    color: 'Haki Yeşili',
    image: '/emek/products/ulas-207k-haki.jpg'
  },
  {
    id: 'ulas-320p',
    category: 'cizme',
    categoryLabel: 'PVC & Kauçuk Çizmeler',
    brand: 'ULAŞ',
    code: '320-P',
    name: 'Ulaş İçi Peluşlu Kışlık Çizme',
    sizes: '36 - 45 Numara',
    color: 'Haki',
    image: '/emek/products/ulas-320p-peluslu.jpg'
  },

  // EMEK LASTİK & PVC AYAKKABILAR
  {
    id: 'emek-101a2',
    category: 'lastik-pvc',
    categoryLabel: 'Lastik & PVC Ayakkabılar',
    brand: 'EMEK',
    code: '101-A2',
    name: 'Emek Ökçeli Düz Lastik Ayakkabı',
    sizes: '26 - 43 Numara',
    color: 'Siyah',
    image: '/emek/products/emek-101-a2.jpg'
  },
  {
    id: 'emek-101a4',
    category: 'lastik-pvc',
    categoryLabel: 'Lastik & PVC Ayakkabılar',
    brand: 'EMEK',
    code: '101-A4',
    name: 'Emek Kar Tipi Dişli Lastik Ayakkabı',
    sizes: '21 - 46 Numara',
    color: 'Siyah',
    image: '/emek/products/emek-101-a4.jpg'
  },
  {
    id: 'kursun-101b1',
    category: 'lastik-pvc',
    categoryLabel: 'Lastik & PVC Ayakkabılar',
    brand: 'KURŞUN',
    code: '101-B1',
    name: 'Kurşun Düz Tip Lastik Ayakkabı',
    sizes: '21 - 47 Numara',
    color: 'Siyah',
    image: '/emek/products/kursun-101-b1.jpg'
  },
  {
    id: 'ugur-101c4',
    category: 'lastik-pvc',
    categoryLabel: 'Lastik & PVC Ayakkabılar',
    brand: 'UĞUR',
    code: '101-C4',
    name: 'Uğur Bağlı Tip Lastik Ayakkabı',
    sizes: '26 - 47 Numara',
    color: 'Siyah',
    image: '/emek/products/ugur-101-c4.jpg'
  },

  // KETEN & DENİZ AYAKKABILARI
  {
    id: 'emeks-106b12',
    category: 'keten-deniz',
    categoryLabel: 'Keten & Deniz Ayakkabıları',
    brand: "EMEK'S",
    code: '106-B12',
    name: "Emek's Bağlı Keten Ayakkabı",
    sizes: '40 - 45 Numara',
    color: 'Siyah',
    image: '/emek/products/emeks-keten-106b12.jpg'
  },
  {
    id: 'emeks-106c3',
    category: 'keten-deniz',
    categoryLabel: 'Keten & Deniz Ayakkabıları',
    brand: "EMEK'S",
    code: '106-C3',
    name: "Emek's Zenne Keten Ayakkabı",
    sizes: '36 - 40 Numara',
    color: 'Lacivert',
    image: '/emek/products/emeks-keten-106c3.jpg'
  },
  {
    id: 'seaworld-114a1',
    category: 'keten-deniz',
    categoryLabel: 'Keten & Deniz Ayakkabıları',
    brand: 'SEA WORLD',
    code: '114-A1',
    name: 'Sea World Kaymaz Deniz Ayakkabısı',
    sizes: '26 - 46 Numara',
    color: 'Mavi / Şeffaf / Siyah',
    image: '/emek/products/seaworld-deniz-114a1.jpg'
  },
  {
    id: 'efe-104a2',
    category: 'keten-deniz',
    categoryLabel: 'Keten & Deniz Ayakkabıları',
    brand: 'EFE',
    code: '104-A2',
    name: 'Efe Klasik PVC Ayakkabı',
    sizes: '38 - 45 Numara',
    color: 'Siyah',
    image: '/emek/products/efe-pvc-104a2.jpg'
  },

  // MEYKERS BOT & EMEK EVA TERLİK
  {
    id: 'meykers-bot-1',
    category: 'bot-terlik',
    categoryLabel: 'Spor Bot & EVA Terlik',
    brand: 'MEYKERS',
    code: 'KAR BOTU',
    name: 'Meykers Fermuarlı Kışlık Kar Botu',
    sizes: '36 - 45 Numara',
    color: 'Siyah / Kahve',
    image: '/emek/products/meykers-bot-1.jpg'
  },
  {
    id: 'meykers-bot-2',
    category: 'bot-terlik',
    categoryLabel: 'Spor Bot & EVA Terlik',
    brand: 'MEYKERS',
    code: 'KIŞLIK BOT',
    name: 'Meykers Su Geçirmez Kışlık Bot',
    sizes: '36 - 45 Numara',
    color: 'Siyah',
    image: '/emek/products/meykers-bot-2.jpg'
  },
  {
    id: 'eva-1808',
    category: 'bot-terlik',
    categoryLabel: 'Spor Bot & EVA Terlik',
    brand: 'EMEK EVA',
    code: '18-08',
    name: 'Emek EVA Hafif Taban Terlik',
    sizes: '24 - 35 Numara',
    color: 'Çok Renkli',
    image: '/emek/products/eva-18-08.jpg'
  },
  {
    id: 'eva-1820',
    category: 'bot-terlik',
    categoryLabel: 'Spor Bot & EVA Terlik',
    brand: 'EMEK EVA',
    code: '18-20',
    name: 'Emek EVA Konfor Terlik Grubu',
    sizes: '24 - 29 Numara',
    color: 'Çok Renkli',
    image: '/emek/products/eva-18-20.jpg'
  }
];
