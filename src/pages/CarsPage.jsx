import React from "react";
import CarFleet from "../components/CarFleet";
import { Car, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { companyInfo } from "../data/companyInfo";

export default function CarsPage({ onOpenBooking }) {
  return (
    <div className="py-8 sm:py-12 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto mb-6 sm:mb-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-2 sm:mb-3 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Fleet Collection</span>
        </div>
        <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Explore Our Self-Drive Cars in Kota
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base mt-2 sm:mt-3 max-w-2xl mx-auto">
          Choose from fuel-efficient city sedans, comfortable family hatchbacks, and rugged 4x4 SUVs. All cars are fully sanitized and maintained.
        </p>

        {/* Highlight Trust Bar */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto text-[11px] sm:text-xs text-slate-700 dark:text-slate-300">
          <div className="glass-card p-2.5 sm:p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-1.5 sm:gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
            <span className="truncate">100% Insured Fleet</span>
          </div>
          <div className="glass-card p-2.5 sm:p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-1.5 sm:gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
            <span className="truncate">Doorstep Delivery</span>
          </div>
          <div className="glass-card p-2.5 sm:p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-1.5 sm:gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
            <span className="truncate">Flexible KM Limits</span>
          </div>
          <div className="glass-card p-2.5 sm:p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-1.5 sm:gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
            <span className="truncate">24/7 Road Support</span>
          </div>
        </div>
      </div>

      <CarFleet showHeading={false} />
    </div>
  );
}
