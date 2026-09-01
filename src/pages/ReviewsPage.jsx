import React from "react";
import TestimonialsSection from "../components/TestimonialsSection";
import { Sparkles, Star, Award, ThumbsUp, MessageSquarePlus } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function ReviewsPage({ onOpenFeedback }) {
  return (
    <div className="py-8 sm:py-12 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto mb-8 sm:mb-12 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-2 sm:mb-3 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Clients Says</span>
        </div>
        <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Customer Reviews & Testimonials
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base mt-2 sm:mt-3 max-w-2xl mx-auto">
          See what passengers and road-trippers have to say about their self-drive experience with Kota Carz Self Drive.
        </p>

        {/* Overall Rating Banner */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl sm:rounded-3xl glass-panel border border-amber-500/30 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-400">4.9</span>
              <div className="flex text-amber-500 dark:text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">Based on 10,000+ verified customer trips in Kota</p>
          </div>

          <button
            onClick={onOpenFeedback}
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 shrink-0 text-center"
          >
            <MessageSquarePlus className="w-4 h-4 shrink-0" />
            <span>Leave a Review</span>
          </button>
        </div>
      </div>

      <TestimonialsSection onOpenFeedback={onOpenFeedback} />
    </div>
  );
}
