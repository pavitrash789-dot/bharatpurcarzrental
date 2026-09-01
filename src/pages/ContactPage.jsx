import React from "react";
import ContactSection from "../components/ContactSection";
import { Sparkles, MapPin, Phone, Mail, Clock } from "lucide-react";
import { companyInfo } from "../data/companyInfo";

export default function ContactPage() {
  return (
    <div className="py-8 sm:py-12 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto mb-6 sm:mb-10 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-2 sm:mb-3 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Contact Kota Carz</span>
        </div>
        <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Get in Touch With Our Team
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base mt-2 sm:mt-3 max-w-2xl mx-auto">
          We are here to assist with car reservations, custom outstation quotes, and all self-drive inquiries across Rajasthan.
        </p>
      </div>

      <ContactSection showHeading={false} />
    </div>
  );
}
