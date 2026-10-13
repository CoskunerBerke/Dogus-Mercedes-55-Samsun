import React from 'react';
import { Star, ExternalLink, CheckCircle2 } from 'lucide-react';
import { reviewsList, ReviewItem } from '../data/reviewsData';

const ReviewCard: React.FC<{ review: ReviewItem }> = ({ review }) => (
  <div className="w-[340px] sm:w-[400px] shrink-0 bg-white border border-slate-200 rounded-xl p-5 mx-2.5 flex flex-col justify-between select-none shadow-sm">
    <div>
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-0.5">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-[11px] font-bold text-blue-800 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-md">
          {review.carModel}
        </span>
      </div>

      <p className="text-slate-700 text-sm leading-relaxed mb-4">
        &ldquo;{review.content}&rdquo;
      </p>
    </div>

    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center">
          {review.avatarText}
        </div>
        <div>
          <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
            {review.author}
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          </div>
          <div className="text-[11px] text-slate-500">{review.timeAgo} • Google Yorumu</div>
        </div>
      </div>
      {review.highlight && (
        <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
          {review.highlight}
        </span>
      )}
    </div>
  </div>
);

export const ReviewRiver: React.FC = () => {
  const loopReviews = [...reviewsList, ...reviewsList];

  return (
    <section id="yorumlar" className="py-14 md:py-18 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-900 font-bold text-sm">4.8 / 5 Google İşletme Puanı</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Mercedes Sahiplerinin ve Filoların Yorumları
            </h2>
          </div>

          <a
            href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 bg-white hover:bg-blue-50 px-4 py-2.5 rounded-lg border border-slate-300 shadow-2xs transition-colors self-start md:self-auto"
          >
            <span>Google Haritalar&apos;da Tüm Yorumları Gör</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Single Row Continuous River Flow (Right to Left, never stops on hover) */}
      <div className="relative w-full overflow-hidden py-2">
        <div className="flex w-max animate-river-continuous">
          {loopReviews.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};
