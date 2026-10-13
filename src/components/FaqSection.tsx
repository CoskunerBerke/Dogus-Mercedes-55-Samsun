import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, MessageCircle, ShieldCheck } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  tag: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    tag: 'Yedek Parça & Garanti',
    question: 'Bakım ve onarımlarda orijinal Mercedes-Benz yedek parçası mı kullanıyorsunuz?',
    answer:
      'Evet. Tekkeköy 19 Mayıs Sanayi Sitesindeki kendi bünyemizde bulunan geniş yedek parça depomuzda Mercedes-Benz Yıldızlı Orijinal parçaların yanı sıra Mercedes fabrikasına üretim yapan Alman OEM markaları (Mann-Filter, Mahle, Lemförder, Hella Pagid, Bilstein, BorgWarner, Bosch, Wunder) hazır stokta tutulmaktadır. Aracınıza takılan her parçanın kutusunu şeffaf biçimde görebilirsiniz.'
  },
  {
    tag: 'Bilgisayarlı Teşhis',
    question: 'Arıza tespitini hangi cihazla yapıyorsunuz? Deneme-yanılma parça değişimi olur mu?',
    answer:
      'Kesinlikle deneme-yanılma yöntemiyle çalışmıyoruz. Mercedes-Benz araçların orijinal fabrika teşhis sistemi olan Xentry / Star Diagnosis cihazı ve Ercan Aycan ustamızın mekatronik uzmanlığı ile arızalı sensörü veya modülü nokta atışı tespit ediyoruz. Gereksiz hiçbir parça değişimi yapılmaz.'
  },
  {
    tag: 'Şanzıman Bakımı',
    question: '7G-Tronic ve 9G-Tronic otomatik şanzıman yağı kaç kilometrede bir değişmeli?',
    answer:
      'Mercedes-Benz 7G-Tronic (722.9) ve 9G-Tronic (725.0) şanzımanlarda her 60.000 km’de (veya 4 yılda bir) şanzıman karter filtresi ve MB-Approval onaylı ATF yağının türbin (tork konvertörü) dahil tam kapasite değiştirilmesi gerekir. Servisimizde değişim sonrası Xentry ile vites geçiş adaptasyonu da uygulanır.'
  },
  {
    tag: 'Süre & Şehir Dışı Misafirler',
    question: 'Ordu, Sinop, Amasya veya Çorum’dan geliyorum; aracım aynı gün teslim edilir mi?',
    answer:
      'Evet! Karadeniz bölgesinin pek çok ilinden gelen müşterilerimiz için randevulu işlemlerde öncelik sağlıyoruz. Kendi yedek parça depomuz olduğu için parça bekleme süresi yaşanmaz; periyodik bakım, fren, ön takım ve şanzıman bakımları aynı gün içinde tamamlanıp aracınız teslim edilir. Bu sırada VIP bekleme salonumuzda çayınızı/kahvenizi içip aracınızı izleyebilirsiniz.'
  },
  {
    tag: 'Acil Durum & Yol Yardım',
    question: 'Gece veya hafta sonu yolda kaldığımda 7/24 yol yardım desteğiniz var mı?',
    answer:
      'Evet. Samsun merkez, Tekkeköy, Atakum, İlkadım, Bafra, Çarşamba ve çevre karayollarında yolda kalan Mercedes-Benz binek ve ticari (Vito, Sprinter) araç sahiplerine 0552 260 56 66 numaralı hattımızdan 7/24 acil mobil müdahale ve çekici yönlendirme desteği sunuyoruz.'
  },
  {
    tag: 'Fiyat & Şeffaflık',
    question: 'İşleme başlamadan önce net fiyat bilgisi veriyor musunuz?',
    answer:
      'Doğuş Mercedes’in en temel ilkesi dürüst esnaflıktır. Aracınız liftimize alınıp kontrolleri yapıldıktan sonra yapılacak işlemler ve parça alternatifleri kalem kalem size sunulur. Sizin onayınız olmadan hiçbir ek işlem yapılmaz ve teslimatta sürpriz maliyetlerle karşılaşmazsınız.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="py-20 md:py-28 bg-[#070a10] border-b border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Merak Edilenler & Mercedes Bakım Rehberi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Mercedes-Benz sahiplerinin periyodik bakım, şanzıman, yedek parça ve servis süreçlerimiz hakkında en çok sorduğu sorular.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0e1522] border-cyan-500/40 shadow-lg'
                    : 'bg-[#0b0f18] border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 border border-slate-700/80 text-cyan-300">
                      {item.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300 rotate-180'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Question Banner */}
        <div className="mt-10 p-6 rounded-2xl metallic-card border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 hidden sm:flex">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Aracınızla İlgili Farklı Bir Sorunuz veya Arıza Belirtisi mi Var?
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Engin Çalımlı, Ercan Aycan ve Uğur Gözoğlu ustalarımıza doğrudan danışabilirsiniz.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href="tel:05522605666"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Ustaya Sor: 0552 260 56 66</span>
            </a>
            <a
              href="https://wa.me/905522605666?text=Merhaba,%20Mercedes%20aracımla%20ilgili%20ustamıza%20bir%20konu%20danışmak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-semibold text-xs sm:text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
