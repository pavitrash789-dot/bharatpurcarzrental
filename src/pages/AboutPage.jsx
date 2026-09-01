import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Award,
  Users,
  Car,
  MapPin,
  Clock,
  PhoneCall,
  Heart
} from "lucide-react";
import { companyInfo } from "../data/companyInfo";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function AboutPage({ onOpenBooking, onOpenFeedback }) {
  return (
    <div className="py-8 sm:py-12 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-2 sm:mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KotaCarzSelfDrive</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            About Our Company
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base mt-2 sm:mt-3">
            {companyInfo.aboutHeading}
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-5 text-xs sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              {companyInfo.aboutDescription}
            </p>
            <p>
              Whether you are an aspiring student traveling with parents for coaching admissions, a tourist discovering the magnificent palaces and Chambal riverfront, or an executive on a business tour, Kota Carz offers the perfect self-drive vehicle for every journey.
            </p>
            <p>
              We believe in customer experience and our service speaks for it. Rent your next self drive car with us with 100% price transparency and zero hidden surprises.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 sm:py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/25 transition-all text-center"
              >
                Book Your Self Drive Car
              </button>
              <Link
                to="/contact"
                className="px-6 py-3 sm:py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-bold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 transition-colors text-center shadow-sm"
              >
                Find Us in Kota
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 p-1.5 sm:p-2 shadow-2xl">
                <img
                  src="/assets/img/about-1.png"
                  alt="Car rental experience"
                  className="w-full h-36 sm:h-56 object-cover rounded-xl"
                  onError={(e) => { e.currentTarget.src = "/assets/img/imag01.png"; }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 p-1.5 sm:p-2 shadow-2xl">
                <img
                  src="/assets/img/about-2.png"
                  alt="Happy traveler"
                  className="w-full h-36 sm:h-56 object-cover rounded-xl"
                  onError={(e) => { e.currentTarget.src = "/assets/img/image002.png"; }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-12 sm:mb-20">
          {companyInfo.stats.map((st, idx) => (
            <div key={idx} className="glass-panel p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
              <div className="text-2xl sm:text-4xl font-black text-amber-600 dark:text-amber-400">{st.value}</div>
              <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-1 font-semibold">{st.label}</div>
            </div>
          ))}
        </div>

        {/* Features and Testimonials */}
        <FeaturesSection />
        <TestimonialsSection onOpenFeedback={onOpenFeedback} />
      </div>
    </div>
  );
}
