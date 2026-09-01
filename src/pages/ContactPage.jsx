import React from "react";
import ContactSection from "../components/ContactSection";
import { Sparkles, MapPin, Phone, Mail, Clock } from "lucide-react";
import { companyInfo } from "../data/companyInfo";

export default function ContactPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Contact Kota Carz</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Get in Touch With Our Team
        </h1>
        <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
          We are here to assist with car reservations, custom outstation quotes, and all self-drive inquiries across Rajasthan.
        </p>
      </div>

      <ContactSection showHeading={false} />
    </div>
  );
}
