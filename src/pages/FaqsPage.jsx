import React from "react";
import FaqAccordion from "../components/FaqAccordion";
import { HelpCircle, Sparkles, MessageSquare, PhoneCall } from "lucide-react";
import { companyInfo } from "../data/companyInfo";

export default function FaqsPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Help & FAQs!</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions!
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Everything your self-drive rental questions need is already here! Quick answers regarding booking, documentation, pricing, and returns.
          </p>
        </div>

        {/* Accordion */}
        <FaqAccordion showSearch={true} />

        {/* Direct WhatsApp Callout */}
        <div className="mt-16 glass-card p-8 rounded-3xl border border-amber-500/30 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-white">Still have questions?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Need more information about your self drive car in Kota? Please chat to our friendly team on WhatsApp or give us a quick call.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={companyInfo.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
