import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Award,
  ArrowRight,
  Clock,
  Car
} from "lucide-react";
import { companyInfo } from "../data/companyInfo";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 p-2 shadow-2xl">
                  <img
                    src="/assets/img/imag01.png"
                    alt="Kota Carz fleet"
                    className="w-full h-52 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="glass-card p-5 rounded-2xl border border-amber-500/30 text-center">
                  <div className="text-3xl font-black text-amber-600 dark:text-amber-400">10k+</div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold mt-1">Happy Drivers in Kota</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                  <div className="text-3xl font-black text-slate-900 dark:text-white">4.9 ★</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-1">Google & Passenger Rating</p>
                </div>
                <div className="rounded-2xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 p-2 shadow-2xl">
                  <img
                    src="/assets/img/image002.png"
                    alt="Self drive roadtrip"
                    className="w-full h-52 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
          </motion.div>

          {/* Right Column: Original Content & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-4 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Our Company</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Our goal is to provide clients with the finest possible car rental in Kota experience.
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              We’ll pick you up from the airport and self drive cars drive you directly to your car rental so that we can deliver a straightforward, quick, and stress-free service from the minute you arrive.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Clean & Sanitized Vehicles</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Every car is thoroughly cleaned, checked, and sanitized before handover.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Transparent Hourly & Daily Rates</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">No surprise kilometer fees or unexpected security deposit deductions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Flexible Pickup & Doorstep Delivery</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Delivered directly to Kota Railway Station, bus stands, or local residences.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white font-bold text-sm border border-slate-300 dark:border-slate-700 transition-colors"
              >
                {companyInfo.phoneDisplay}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
