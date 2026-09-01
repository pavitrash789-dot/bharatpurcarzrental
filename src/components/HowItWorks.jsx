import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  CheckCircle2,
  Send,
  MessageSquare,
  HelpCircle,
  Users,
  ShieldCheck,
  CreditCard,
  Smile,
  ArrowRight
} from "lucide-react";
import { bookingSteps } from "../data/bookingSteps";
import { companyInfo } from "../data/companyInfo";

const stepIcons = [
  Search,
  CheckCircle2,
  Send,
  MessageSquare,
  HelpCircle,
  Users,
  ShieldCheck,
  CreditCard,
  Smile
];

export default function HowItWorks({ onOpenBooking }) {
  return (
    <section className="py-12 sm:py-20 px-3 sm:px-6 relative bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-3 uppercase tracking-wider">
            <span>Simple 9-Step Process</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            How to Book a Self-Drive Car in Kota
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base mt-2 sm:mt-3">
            Renting your favorite car with Kota Carz is fast, transparent, and completely hassle-free. Follow these easy steps to get on the road.
          </p>
        </div>

        {/* 9-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {bookingSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || CheckCircle2;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative glass-card p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-xl sm:text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-amber-500/60 transition-colors font-mono">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Fast Action Banner */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/15 via-white dark:via-slate-900 to-amber-500/15 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left shadow-lg">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Have questions before booking?</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Connect directly with our managing team on WhatsApp for instant guidance and custom quotes.
            </p>
          </div>
          <a
            href={companyInfo.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95 text-center"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>Chat on WhatsApp ({companyInfo.phoneDisplay})</span>
          </a>
        </div>
      </div>
    </section>
  );
}
