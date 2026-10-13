import React from 'react';
import { Award, CheckCircle2, Phone, HeartHandshake, MessageCircle, Wrench } from 'lucide-react';

export const AboutWorkshop: React.FC = () => {
  const handleCallRedirect = () => {
    window.location.href = 'tel:05522605666';
  };

  const masters = [
    {
      name: 'Engin Çalımlı',
      role: 'Kurucu Ortak & Baş Usta',
      spec: 'Mercedes-Benz Motor Mekanik, Eksantrik Zincir & Ağır Bakım Uzmanı',
      exp: '22+ Yıl Tecrübe',
      whatsappText: 'Merhaba Engin Usta, Mercedes aracımın motor/mekanik bakımı hakkında danışmak istiyorum.'
    },
    {
      name: 'Ercan Aycan',
      role: 'Kurucu Ortak & Mekatronik Uzmanı',
      spec: 'Xentry Star Diagnosis, Elektronik Beyin, Sensör & Kodlama Uzmanı',
      exp: '20+ Yıl Tecrübe',
      whatsappText: 'Merhaba Ercan Usta, Mercedes aracımın elektronik arıza tespiti hakkında danışmak istiyorum.'
    },
    {
      name: 'Uğur Gözoğlu',
      role: 'Kurucu Ortak & Şanzıman / Süspansiyon',
      spec: '7G/9G-Tronic Otomatik Şanzıman, Airmatic & Ön Takım Uzmanı',
      exp: '18+ Yıl Tecrübe',
      whatsappText: 'Merhaba Uğur Usta, Mercedes aracımın şanzıman / Airmatic sistemi hakkında danışmak istiyorum.'
    }
  ];

  return (
    <section id="hakkimizda" className="py-20 md:py-28 bg-[#090d14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-amber-300 uppercase tracking-widest mb-4">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Geleneksel Esnaflık, Alman Mühendisliği</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
              Samsun'da Mercedes Sahiplerinin <br />
              <span className="text-silver-shimmer">Güvendiği Adres: Doğuş Mercedes</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong className="text-white">Doğuş Mercedes Servis ve Yedek Parça</strong>, Samsun Tekkeköy 19 Mayıs Sanayi Sitesi'nde Mercedes-Benz marka binek ve hafif ticari araç sahiplerine fabrika standartlarında özel servis ve orijinal yedek parça hizmeti sunmak amacıyla kurulmuştur.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
              Kurucu ustalarımız <strong className="text-slate-200">Engin Çalımlı, Ercan Aycan ve Uğur Gözoğlu</strong> liderliğinde; yetkili servis donanımını Karadeniz esnafının samimiyeti ve dürüst fiyat politikasıyla birleştiriyoruz. Aracınız servisimize girdiği andan itibaren yapılan her kontrol ve değiştirilen her parça şeffaf biçimde size gösterilir.
            </p>

            {/* Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lisanslı Mercedes Xentry Teşhis</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>5.000+ Kalem Kendi Parça Depomuz</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Şeffaf Fiyatlandırma & Ön Onay</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Atölyeyi İzleyen Panoramik Ofis & Salon</span>
              </div>
            </div>

            {/* Call button */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={handleCallRedirect}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-slate-950 font-extrabold text-sm hover:bg-slate-100 shadow transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-950 fill-current" />
                <span>Hemen Bilgi Al: 0552 260 56 66</span>
              </button>

              <a
                href="#iletisim"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-sm font-semibold border border-slate-700 transition-colors"
              >
                <span>Konum & İletişim Bilgileri</span>
              </a>
            </div>
          </div>

          {/* Right Column: Master Technicians Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 sm:p-6 metallic-card border border-slate-800 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest font-bold text-cyan-300 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Kurucu Ustalarımız</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400">Doğrudan Danışın</span>
              </div>

              <div className="space-y-3.5">
                {masters.map((master, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#090d14] border border-slate-800 hover:border-cyan-500/40 transition-all"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-white font-extrabold font-display shrink-0">
                        {master.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-base font-extrabold text-white truncate font-display">
                            {master.name}
                          </h4>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 shrink-0">
                            {master.exp}
                          </span>
                        </div>
                        <p className="text-xs text-cyan-300 font-semibold mt-0.5">{master.role}</p>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{master.spec}</p>

                        <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                          <a
                            href={`https://wa.me/905522605666?text=${encodeURIComponent(master.whatsappText)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>WhatsApp'tan Ustaya Danış →</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Satisfaction Guarantee callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-[#090d14] border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white font-display">Samsun Esnaf Kültürü ve %100 Güven</h5>
                <p className="text-xs text-slate-400 mt-0.5">
                  Aracınız bize emanet edildiği andan itibaren kendi aracımız gibi titizlikle korunur, test edilir ve garantili teslim edilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
