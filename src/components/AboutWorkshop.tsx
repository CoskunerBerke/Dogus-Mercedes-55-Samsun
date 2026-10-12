import React from 'react';
import { Award, Users, CheckCircle2, Phone, ShieldCheck, HeartHandshake } from 'lucide-react';

export const AboutWorkshop: React.FC = () => {
  const handleCallRedirect = () => {
    window.location.href = "tel:05522605666";
  };

  const masters = [
    {
      name: "Engin Çalımlı",
      role: "Kurucu & Baş Usta",
      spec: "Mercedes-Benz Mekanik & Motor Teşhis Uzmanı",
      exp: "22+ Yıl Tecrübe"
    },
    {
      name: "Ercan Aycan",
      role: "Kurucu & Mekatronik Uzmanı",
      spec: "Xentry Star Diagnosis & Elektronik Sistemler",
      exp: "20+ Yıl Tecrübe"
    },
    {
      name: "Uğur Gözoğlu",
      role: "Kurucu & Şanzıman / Süspansiyon",
      spec: "7G/9G-Tronic & Airmatic Sistem Uzmanı",
      exp: "18+ Yıl Tecrübe"
    }
  ];

  return (
    <section id="hakkimizda" className="py-20 md:py-28 bg-[#0c1017] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Geleneksel Esnaflık, Alman Mühendisliği</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Samsun'da Mercedes Sahiplerinin <br />
              <span className="text-silver-shimmer">Güvendiği Ortak Nokta: Doğuş Mercedes</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed">
              Doğuş Mercedes, Samsun Tekkeköy 19 Mayıs Sanayi Sitesi'nde Mercedes-Benz marka binek ve ticari araç sahiplerine fabrika standartlarında özel servis ve yedek parça hizmeti sunmak amacıyla kuruldu.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
              Yetkili servis kalitesini sanayi esnafının samimiyeti ve dürüst fiyat politikasıyla harmanlıyoruz. Aracınız servisimize girdiği andan itibaren yapılan her kontrol, değiştirilen her conta ve filtre müşterimize şeffaf olarak gösterilir.
            </p>

            {/* Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lisanslı Mercedes Xentry Teşhis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Garantili Orijinal Yedek Parça</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Şeffaf Fiyatlandırma ve Ön Bilgilendirme</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Konforlu Müşteri Bekleme Alanı</span>
              </div>
            </div>

            {/* Call button */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={handleCallRedirect}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 shadow transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-950 fill-current" />
                <span>Hemen Bilgi Al: 0552 260 56 66</span>
              </button>

              <a
                href="#iletisim"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700 transition-colors"
              >
                <span>Konum & İletişim Bilgileri</span>
              </a>
            </div>
          </div>

          {/* Right Column: Master Technicians Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl">
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-400 mb-3 block">
                Atölye Liderlerimiz & Ustalarımız
              </span>

              <div className="space-y-3">
                {masters.map((master, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0f141d] border border-slate-800/80 hover:border-slate-700 transition-colors flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 font-bold shrink-0">
                      {master.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white truncate">{master.name}</h4>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/30 text-emerald-400">
                          {master.exp}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 font-medium mt-0.5">{master.role}</p>
                      <p className="text-[11px] text-slate-400 mt-1">{master.spec}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Satisfaction Guarantee callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">Samsun Esnaf Kültürü ve Güven</h5>
                <p className="text-xs text-slate-400 mt-0.5">
                  Aracınız bize emanet edildiği andan itibaren kendi aracımız gibi titizlikle korunur ve onarılır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
