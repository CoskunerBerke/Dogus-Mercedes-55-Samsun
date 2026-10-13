export interface ReviewItem {
  id: number;
  author: string;
  avatarText: string;
  avatarBg: string;
  rating: number;
  timeAgo: string;
  carModel: string;
  content: string;
  verified: boolean;
  highlight?: string;
}

export const reviewsList: ReviewItem[] = [
  {
    id: 1,
    author: "Murat Yıldırım",
    avatarText: "MY",
    avatarBg: "bg-slate-700",
    rating: 5,
    timeAgo: "2 hafta önce",
    carModel: "Mercedes W205 C200d",
    content: "Samsun'da Mercedes aracınızı gözünüz kapalı teslim edebileceğiniz tek adres. Engin usta ve Ercan usta arıza tespitinde tam nokta atışı yaptılar. Yetkili servisin günlerce bulamadığı sorunu aynı gün orijinal parça ile çözdüler. İlgi, alaka ve dürüstlükleri muazzam. Kesinlikle tavsiye ederim.",
    verified: true,
    highlight: "Nokta Atışı Arıza Tespiti"
  },
  {
    id: 2,
    author: "Serkan Aydın",
    avatarText: "SA",
    avatarBg: "bg-zinc-800",
    rating: 5,
    timeAgo: "1 ay önce",
    carModel: "Mercedes W212 E250 CGI",
    content: "Periyodik bakım ve 7G-Tronic şanzıman yağı değişimi için Tekkeköy servisine gittim. Tüm filtreler orijinal kutusunda gözümün önünde takıldı. Fiyatlar yetkili servise kıyasla çok makul, işçilik ise kat kat daha titiz. Bekleme salonu tertemiz, kahvemizi içerken aracın bakımını rahatça takip ettik.",
    verified: true,
    highlight: "Şeffaf & Orijinal Parça"
  },
  {
    id: 3,
    author: "Hakan Demirtaş",
    avatarText: "HD",
    avatarBg: "bg-slate-800",
    rating: 5,
    timeAgo: "1 ay önce",
    carModel: "Mercedes W213 E220d",
    content: "Ordu'dan sadece Mercedes bakımım için Samsun'a geliyorum. Yıllardır aracımın tüm mekanik ve elektronik işlerini Engin Usta yapar. Güvenilir esnaflık, şeffaf fiyat ve kaliteli işçilik. Karadeniz bölgesinin tartışmasız en iyi Mercedes özel servisi.",
    verified: true,
    highlight: "Ordu'dan Özel Ziyaret"
  },
  {
    id: 4,
    author: "Bülent Keskin",
    avatarText: "BK",
    avatarBg: "bg-zinc-700",
    rating: 5,
    timeAgo: "2 ay önce",
    carModel: "Mercedes CLA 200 AMG",
    content: "Ekranda yanan motor ikaz lambası için gittim. Lisanslı Xentry cihazıyla hemen bağlandılar. Gereksiz hiçbir parça değiştirmeden arızalı sensörü tespit edip değişimini yaptılar. Uğur Usta ve ekibine dürüst yaklaşımlarından ötürü çok teşekkür ederim.",
    verified: true,
    highlight: "Xentry Bilgisayarlı Teşhis"
  },
  {
    id: 5,
    author: "Cemal Özkan",
    avatarText: "CÖ",
    avatarBg: "bg-neutral-800",
    rating: 5,
    timeAgo: "3 ay önce",
    carModel: "Mercedes W221 S350 Long",
    content: "Gece Tekkeköy mevkiinde yolda kaldık. 0552 260 56 66 numarasını aradım, 25 dakika içinde yol yardım aracı ve ustamız yanımıza ulaştı. Gece saatinde bu kadar profesyonel, süratli ve kaliteli müdahale takdire şayan. Allah razı olsun.",
    verified: true,
    highlight: "7/24 Hızlı Yol Yardım"
  },
  {
    id: 6,
    author: "Oğuzhan Çelik",
    avatarText: "OÇ",
    avatarBg: "bg-slate-700",
    rating: 5,
    timeAgo: "3 ay önce",
    carModel: "Mercedes Vito Tourer 119",
    content: "Turizm filomuzdaki Mercedes Vito araçlarımızın periyodik ve ağır bakımlarını Doğuş Mercedes'e yaptırıyoruz. Kendi depolarında geniş bir orijinal yedek parça stoğu olduğu için araçlarımız günlerce yatmıyor, aynı gün teslim alıyoruz. Sanayide böylesi zor bulunur.",
    verified: true,
    highlight: "Geniş Yedek Parça Stoğu"
  },
  {
    id: 7,
    author: "Tolga Aksoy",
    avatarText: "TA",
    avatarBg: "bg-zinc-800",
    rating: 5,
    timeAgo: "4 ay önce",
    carModel: "Mercedes W204 C180 Kompressor",
    content: "Ön takım, salıncak ve Airmatic süspansiyon sistemindeki lokurtu sesini çözdüler. Araç fabrikadan yeni çıkmış gibi sessiz ve konforlu oldu. İşini severek yapan, Mercedes'in dilinden anlayan gerçek ustalar.",
    verified: true,
    highlight: "Airmatic & Ön Takım Uzmanı"
  },
  {
    id: 8,
    author: "Emre Karadeniz",
    avatarText: "EK",
    avatarBg: "bg-slate-800",
    rating: 5,
    timeAgo: "5 ay önce",
    carModel: "Mercedes GLC 250 4MATIC",
    content: "Samsun'da Mercedes kullanıcılarının neden hep Doğuş Mercedes'i tavsiye ettiğini gidince anladım. Şanzıman geçişlerindeki vuruntuyu kalibrasyon ve doğru yağ ile tamamen sıfırladılar. Hem esnaf hem teknik uzmanlar.",
    verified: true,
    highlight: "Şanzıman Kalibrasyonu"
  },
  {
    id: 9,
    author: "Ahmet Vural",
    avatarText: "AV",
    avatarBg: "bg-neutral-700",
    rating: 5,
    timeAgo: "6 ay önce",
    carModel: "Mercedes E200 Kompressor",
    content: "Engin Çalımlı ustam ve ekibi işinin ehli. Motor mekaniğini ezbere biliyorlar. Hem parça temini çok hızlı hem de fiyat konusunda oldukça adil ve dürüstler. Hayırlı bol kazançlar dilerim.",
    verified: true,
    highlight: "Usta Ellerde Bakım"
  },
  {
    id: 10,
    author: "Mehmet Ali Şahin",
    avatarText: "MŞ",
    avatarBg: "bg-slate-700",
    rating: 5,
    timeAgo: "7 ay önce",
    carModel: "Mercedes GLA 200",
    content: "İlkadım Sanayi'de Mercedes için başka bir yer aramanıza gerek yok. Gerek parça kalitesi gerekse ustaların tecrübesi birinci sınıf. Bekleme salonunda otururken aracınızı cam bölmeden izleyebiliyorsunuz.",
    verified: true,
    highlight: "Kurumsal & Temiz Servis"
  },
  {
    id: 11,
    author: "Kadir Yılmaz",
    avatarText: "KY",
    avatarBg: "bg-zinc-800",
    rating: 5,
    timeAgo: "8 ay önce",
    carModel: "Mercedes Sprinter 316 CDI",
    content: "Ticari aracımın turbo ve enjektör revizyonunu yaptılar. Yakıt sarfiyatı belirgin şekilde düştü, çekiş gücü yerine geldi. Verilen saatte teslim ettiler, sözlerinin eri esnaflar.",
    verified: true,
    highlight: "Zamanında Teslimat"
  },
  {
    id: 12,
    author: "Burak Eren",
    avatarText: "BE",
    avatarBg: "bg-slate-800",
    rating: 5,
    timeAgo: "9 ay önce",
    carModel: "Mercedes C200 Coupe",
    content: "Fren balataları ve disk değişimi için uğradım. Orijinal Hella Pagid ve Mercedes damgalı parçaları tercih ettiler. Titiz işçilik ve samimi yaklaşımları için teşekkürler.",
    verified: true,
    highlight: "Garantili Fren Servisi"
  }
];
