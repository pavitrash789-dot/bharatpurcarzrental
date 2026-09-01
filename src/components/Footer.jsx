import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Car,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Heart
} from "lucide-react";
import { companyInfo } from "../data/companyInfo";

export default function Footer({ onOpenBooking }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 text-slate-300 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 overflow-hidden pt-16 transition-colors">
      {/* Top Banner Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-800 dark:via-slate-900 to-slate-800 dark:to-slate-900 border border-amber-500/30 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-slate-950 font-black shrink-0 shadow-lg shadow-amber-500/30">
              <Car className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white">
                Ready to explore Kota & Rajasthan?
              </div>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">
                {companyInfo.shortDescription}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/30 transition-all active:scale-95"
            >
              Rent Your Next Car
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-800/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black">
              <Car className="w-5 h-5" />
            </div>
            <span className="text-xl font-black text-white">
              KOTA<span className="text-amber-400">CARZ</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            Leading self-drive car rental agency in Kota, Rajasthan. Well-maintained cars, verified documents, transparent pricing, and 24/7 roadside assistance.
          </p>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-semibold text-amber-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified & Insured Fleet</span>
            </div>
          </div>
        </div>

        {/* Col 2: Working Hours */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Working Hours</span>
          </h3>
          <ul className="space-y-3 text-sm text-slate-400">
            {companyInfo.workingHours.map((wh, idx) => (
              <li key={idx} className="flex flex-col border-b border-slate-800 pb-2 last:border-0">
                <span className="font-semibold text-slate-200">{wh.days}:</span>
                <span className="text-amber-400/90 text-xs mt-0.5">{wh.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Quick Navigation */}
        <div>
          <h3 className="text-white font-bold text-base mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>
              <Link to="/cars" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> All Cars & Pricing
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> About Kota Carz
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Help Center & FAQs
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Travel Blogs & Guides
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Customer Testimonials
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Contact & Location Map
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Head Office & Newsletter */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Head Office</span>
          </h3>
          <div className="text-sm text-slate-400 space-y-2 mb-4">
            <p>{companyInfo.address}</p>
            <p className="text-xs text-amber-400 font-mono">
              <Mail className="w-3.5 h-3.5 inline mr-1" /> {companyInfo.email}
            </p>
          </div>

          <form onSubmit={handleNewsletter} className="mt-4">
            <div className="relative">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 pr-24"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </div>
            {subscribed && (
              <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed successfully!
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Running Taxi Animation Track */}
      <div className="relative w-full h-8 border-t border-b border-slate-800 bg-slate-950/80 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-dashed border-t border-dashed border-slate-700"></div>
        <div className="animate-taxi-slow absolute top-1 flex items-center gap-1 text-amber-400 text-xs font-bold whitespace-nowrap">
          <span>🚕 Kota Carz</span>
        </div>
        <div className="animate-taxi-fast absolute top-1 flex items-center gap-1 text-slate-400 text-xs font-bold whitespace-nowrap">
          <span>🚗 Self Drive</span>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950 py-6 border-t border-slate-900 text-center text-xs text-slate-400 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {currentYear} {companyInfo.fullName} All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span>Indraprastha Industrial Area, Kota</span>
            <span>•</span>
            <a href={`tel:${companyInfo.phoneRaw}`} className="hover:text-amber-400">
              {companyInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
