import React from 'react';
import { reviewsList } from '../data/reviewsData';
import { Star, ExternalLink } from 'lucide-react';

export const ReviewRiver: React.FC = () => {
  const featuredReviews = reviewsList.slice(0, 6);

  return (
    <section id="yorumlar" className="py-20 bg-[#0e1014] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-zinc-800">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">
              MÜŞTERİ YORUMLARI
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Google Haritalar Değerlendirmeleri
            </h2>
          </div>

          <a
            href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#14171c] border border-zinc-800 hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white font-bold text-sm">4.8 / 5.0 Google Puanı</span>
            <ExternalLink className="w-4 h-4 text-zinc-400" />
          </a>
        </div>

        {/* Clean 6-Card Grid (No dizzying marquee) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-xl bg-[#14171c] border border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-base font-bold text-white">{review.author}</h4>
                    <span className="text-xs text-zinc-400">{review.carModel}</span>
                  </div>
                  <div className="flex text-amber-400">
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
                <span>Google Haritalar Yorumu</span>
                <span>{review.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
