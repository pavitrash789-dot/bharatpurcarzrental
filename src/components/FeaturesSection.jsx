import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Car,
  BadgePercent,
  Headphones,
  Globe,
  ThumbsUp,
  Sparkles,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import { features } from "../data/features";
import { companyInfo } from "../data/companyInfo";

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose Us!</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Why Ride with Kota Carz Self Drive?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master technologies.
          </p>
        </div>

        {/* 3 Major Pillars Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ y: -6 }}
            className="glass-card p-8 rounded-2xl border border-amber-500/40 relative overflow-hidden group shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">Safe Guarantee</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We successfully cope with tasks of varying complexity! Sanitized vehicles, complete insurance, and 24/7 roadside assistance across Kota.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="glass-card p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 relative overflow-hidden group shadow-xl transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">Fast Pickups</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We successfully cope with tasks of varying complexity! Quick pickups to save time with convenient doorstep drop-off across Kota city.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="glass-card p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 relative overflow-hidden group shadow-xl transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
              <Car className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">Quick Ride</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We successfully cope with tasks of varying complexity! Transparent inclusive rates so you can enjoy your ride with total peace of mind.
            </p>
          </motion.div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <BadgePercent className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Best-price Guarantee</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Honest & competitive self drive rates in Kota</p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">24x7 Customer Care</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Round-the-clock call & WhatsApp support</p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">International License</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Accepted for overseas visitors in Rajasthan</p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Customer Satisfaction</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">10,000+ happy self-drive customers</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 p-8 sm:p-12 shadow-2xl relative overflow-hidden text-slate-950">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="px-3.5 py-1 rounded-full bg-slate-950/10 font-bold text-xs uppercase tracking-wider inline-block mb-3">
                Call Us Now
              </span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">
                Call Us Now <span className="underline decoration-slate-950/30">Book Your Car</span> For Your Next Ride!
              </h3>
              <p className="text-slate-900/80 text-sm sm:text-base mt-2 font-medium">
                We successfully cope with tasks of varying complexity, guarantees and regularly master new technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="px-8 py-4 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white font-black text-base shadow-2xl transition-all flex items-center gap-3 active:scale-95"
              >
                <PhoneCall className="w-5 h-5 text-amber-400" />
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block font-normal uppercase">Call For Self Drive Car</span>
                  <span className="font-mono text-amber-400">{companyInfo.phoneDisplay}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
