import React from "react";
import FaqAccordion from "../components/FaqAccordion";
import { HelpCircle, Sparkles, MessageSquare, PhoneCall } from "lucide-react";
import { companyInfo } from "../data/companyInfo";

export default function FaqsPage() {
  return (
    <div className="py-8 sm:py-12 px-3 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-2 sm:mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Help & FAQs!</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions!
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base mt-2 sm:mt-3">
            Everything your self-drive rental questions need is already here! Quick answers regarding booking, documentation, pricing, and returns.
          </p>
        </div>

        {/* Accordion */}
        <FaqAccordion showSearch={true} />

        {/* Direct WhatsApp Callout */}
        <div className="mt-10 sm:mt-16 glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-amber-500/30 text-center space-y-3 sm:space-y-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
            <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">Still have questions?</h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            Need more information about your self drive car in Kota? Please chat to our friendly team on WhatsApp or give us a quick call.
          </p>
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 pt-2">
            <a
              href={companyInfo.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 text-center"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-bold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
            >
              <PhoneCall className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
