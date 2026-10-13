import React from 'react';
import { reviewsList } from '../data/reviewsData';
import { Star } from 'lucide-react';

export const ReviewRiver: React.FC = () => {
  const riverStream = [...reviewsList, ...reviewsList];

  return (
    <section id="yorumlar" className="py-16 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-5 border-b border-slate-200">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-red-600 mb-1">
              MÜŞTERİ & BAYİ YORUMLARI
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Google ve Toptan İş Ortaklarımızın Değerlendirmeleri
            </h2>
          </div>

          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm shrink-0">
            <div className="flex items-center gap-0.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-slate-900 font-bold text-xs sm:text-sm">
              4.8 / 5.0 Kurumsal Memnuniyet
            </span>
          </div>
        </div>
      </div>

      {/* Single Row Continuous River Flowing Right-to-Left (Never stops on hover) */}
      <div className="relative w-full overflow-hidden river-mask">
        <div className="flex gap-5 w-max animate-river-continuous py-2">
          {riverStream.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-[340px] sm:w-[400px] p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between shrink-0 select-none"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{review.author}</h4>
                    <span className="text-xs font-medium text-slate-500">{review.role}</span>
                  </div>
                  <div className="flex text-amber-500 shrink-0">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  "{review.content}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-500">Google & Bayi Değerlendirmesi</span>
                <span>{review.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
