import React from "react";
import QuickBookingBar from "../components/QuickBookingBar";
import HowItWorks from "../components/HowItWorks";
import { Car, Sparkles, CheckCircle2, PhoneCall } from "lucide-react";
import { companyInfo } from "../data/companyInfo";

export default function BookRidePage() {
  return (
    <div className="py-8 sm:py-12 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto mb-6 sm:mb-10 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-2 sm:mb-3 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Online Booking</span>
        </div>
        <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Book Your Taxi / Self Drive Ride
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base mt-2 sm:mt-3 max-w-2xl mx-auto">
          Fast-track your reservation with our WhatsApp booking engine. Instant confirmation, clear terms, and zero hidden costs.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-10 sm:mb-16">
        <QuickBookingBar />
      </div>

      <HowItWorks />
    </div>
  );
}
