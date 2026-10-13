export interface ReviewItem {
  id: number;
  author: string;
  role: string;
  rating: number;
  timeAgo: string;
  content: string;
}

export const reviewsList: ReviewItem[] = [
  {
    id: 1,
    author: "Mustafa Karahan",
    role: "Toptan Ayakkabı & Çizme Bayii • Karadeniz",
    rating: 5,
    timeAgo: "2 hafta önce",
    content: "Yıllardır Samsun OSB'deki Emek Lastik fabrikasından toptan Ulaş çizme ve Emek lastik ayakkabı alıyoruz. Kalıpları tam standart, kauçuk ve PVC kalitesi piyasada rakipsiz. Sevkiyatları her zaman dakik ve kurumsal bir fabrika."
  },
  {
    id: 2,
    author: "İbrahim Çelik",
    role: "İnşaat & Şantiye Satınalma Müdürü",
    rating: 5,
    timeAgo: "1 ay önce",
    content: "Şantiyelerimizdeki personeller için EMEX serisi çelik burunlu iş güvenliği botlarını ve Ulaş PVC çizmeleri tercih ediyoruz. Zorlu saha şartlarında taban dayanımı ve su geçirmezliği çok başarılı. Yerli üretim olması büyük gurur."
  },
  {
    id: 3,
    author: "Hasan Özdemir",
    role: "Tarım & Ziraat Ekipmanları Tedarikçisi",
    rating: 5,
    timeAgo: "1 ay önce",
    content: "Çiftçilerimizin ve çay/fındık üreticilerimizin en çok aradığı marka Emek ve Kurşun lastik ayakkabılar. Babamızdan beri bildiğimiz 1961 kuruluşlu köklü Samsun fabrikası, kalitesini hiç bozmadan devam ettiriyor."
  },
  {
    id: 4,
    author: "Kadir Yılmaz",
    role: "İş Güvenliği Ekipmanları Firması • Ankara",
    rating: 5,
    timeAgo: "2 ay önce",
    content: "EMEX Madrid ve Milano serisi süet/deri iş ayakkabılarının toptan siparişini geçtik. Hem görünümü çok şık hem de işçilerin gün boyu ayağını yormayan rahat bir tabana sahip. Fabrika yönetimi çok ilgili."
  },
  {
    id: 5,
    author: "Ahmet Aydın",
    role: "Güneydoğu Toptan Dağıtım",
    rating: 5,
    timeAgo: "3 ay önce",
    content: "Eldi ve Emek EVA çocuk/yetişkin terlik grubunda fiyat-performans olarak Türkiye'nin en güçlü üreticilerinden biri. Yüksek adetli siparişlerimizde bile termin sürelerine birebir uyuyorlar."
  },
  {
    id: 6,
    author: "Süleyman Koç",
    role: "Kauçuk & Sanayi Hammadde Alıcısı",
    rating: 5,
    timeAgo: "3 ay önce",
    content: "Rejenere kauçuk ve granül hammadde tedariğinde Emek Kauçuk Sanayi ile çalışıyoruz. Üretim tesisleri 20.000 m² üzerinde çok modern ve standartları yüksek. Samsun sanayisinin yüz akı bir kuruluş."
  },
  {
    id: 7,
    author: "Osman Yıldız",
    role: "Bölge Bayii • Doğu Anadolu",
    rating: 5,
    timeAgo: "4 ay önce",
    content: "Kış sezonunda Meykers fermuarlı kar botları ve içi peluşlu Ulaş çizmeler yok satıyor. Soğuk iklim şartlarına tam uyumlu, sağlam ve ekonomik ürünler. Emek ailesine teşekkür ederiz."
  },
  {
    id: 8,
    author: "Murat Demir",
    role: "Belediye Fen İşleri Tedarik",
    rating: 5,
    timeAgo: "5 ay önce",
    content: "Saha çalışanlarımız için aldığımız Ulaş 305-P ve 307-P çizmeler ile Emex iş botları uzun ömürlü çıktı. Yerli ve milli üreticimiz Emek Lastik'i gönül rahatlığıyla tavsiye ederim."
  }
];
