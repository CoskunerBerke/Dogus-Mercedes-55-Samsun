import React from 'react';
import { reviewsList } from '../data/reviewsData';
import { Star } from 'lucide-react';

export const ReviewRiver: React.FC = () => {
  const riverStream = [...reviewsList, ...reviewsList];

  return (
    <section id="yorumlar" className="py-20 bg-[#0b0c0e] border-b border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-zinc-800">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-2">
              MÜŞTERİ & BAYİ YORUMLARI
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Google ve İş Ortaklarımızın Değerlendirmeleri
            </h2>
          </div>

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#14171c] border border-zinc-800 shrink-0">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white font-bold text-sm">Yüksek Müşteri & Bayi Memnuniyeti</span>
          </div>
        </div>
      </div>

      {/* Single Row Continuous River Flowing Right-to-Left (Never stops on hover) */}
      <div className="relative w-full overflow-hidden river-mask">
        <div className="flex gap-6 w-max animate-river-continuous py-2">
          {riverStream.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-[340px] sm:w-[400px] p-6 rounded-xl bg-[#14171c] border border-zinc-800 flex flex-col justify-between shrink-0 select-none"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-base font-bold text-white">{review.author}</h4>
                    <span className="text-xs text-zinc-400">{review.role}</span>
                  </div>
                  <div className="flex text-amber-400 shrink-0">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  "{review.content}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
                <span>Doğrulanmış Değerlendirme</span>
                <span>{review.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
