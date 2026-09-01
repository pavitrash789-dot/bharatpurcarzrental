import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, MessageSquarePlus } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function TestimonialsSection({ onOpenFeedback }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 relative bg-slate-100/50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-3 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clients Testimonial</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              KotaCarzSelfDrive Passenger Reviews...
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master technologies.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenFeedback}
              className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-slate-950 font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write a Review</span>
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-amber-500/40 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-amber-500/40 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars and quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < t.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-300 dark:text-slate-700"
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-500/30" />
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                    {t.company || t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
