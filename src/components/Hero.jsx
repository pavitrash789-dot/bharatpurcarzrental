import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Car,
  ShieldCheck,
  Zap,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Award
} from "lucide-react";
import { companyInfo } from "../data/companyInfo";
import QuickBookingBar from "./QuickBookingBar";

export default function Hero({ onOpenBooking }) {
  return (

<section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden pt-4 sm:pt-8 pb-12 sm:pb-16 px-3 sm:px-6">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[900px] h-[250px] sm:h-[350px] bg-amber-500/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Main 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-8 sm:mb-10">
          {/* Left Column: Headlines & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-[11px] sm:text-xs font-semibold mb-4 sm:mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{companyInfo.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-4 sm:mb-6">
              Premier <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 dark:from-amber-400 dark:via-amber-300 dark:to-amber-500">Self Drive Car</span> Rental in Kota
            </h1>

            {/* Subtext with original content */}
            <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal">
              {companyInfo.aboutHeading} We deliver a straightforward, quick, and stress-free service from the minute you arrive.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full xs:w-auto">
              <button
                onClick={onOpenBooking}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-xl shadow-amber-500/25 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
              >
                <Car className="w-4 h-4" />
                <span>Book Your Ride</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/cars"
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white font-bold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Explore 25+ Cars</span>
              </Link>
            </div>

            {/* Trust points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-lg text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>Doorstep Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>Sanitized & Insured</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Car Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative z-10">
              <img
                src="/assets/img/Rent-1.png"
                alt="Kota Carz Self Drive Fleet"
                className="w-full h-auto max-h-[300px] sm:max-h-[380px] object-contain drop-shadow-[0_20px_35px_rgba(245,158,11,0.25)] hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Trust Card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 sm:-bottom-4 sm:left-4 z-20 glass-card p-2.5 sm:p-4 rounded-xl border border-amber-500/30 flex items-center gap-2.5 sm:gap-3 shadow-xl max-w-[190px] sm:max-w-none"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black shrink-0">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white block truncate">#1 Choice in Kota</span>
                <span className="text-[9px] sm:text-[11px] text-slate-500 dark:text-slate-400 block truncate">10k+ Journeys</span>
              </div>
            </motion.div>

            {/* Floating Support Card */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-0 right-0 sm:-top-4 sm:right-4 z-20 glass-card p-2.5 sm:p-3 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2 shadow-xl max-w-[170px] sm:max-w-none"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-900 dark:text-white block truncate">Instant WhatsApp</span>
                <span className="text-[9px] sm:text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block truncate">24/7 on call</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Quick Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-4 sm:mt-6"
        >
          <QuickBookingBar />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-8">
          {companyInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-3 sm:p-4 text-center border border-slate-200 dark:border-slate-800 hover:border-amber-500/30 transition-colors"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-amber-500 dark:text-amber-400">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
