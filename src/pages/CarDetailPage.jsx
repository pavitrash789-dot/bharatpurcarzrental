import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Fuel,
  Gauge,
  Shield,
  CheckCircle2,
  Calendar,
  Phone,
  MessageSquare,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Info,
  Car,
  Settings,
  Quote
} from "lucide-react";
import { cars } from "../data/cars";
import { companyInfo } from "../data/companyInfo";
import { createWhatsAppBookingUrl } from "../utils/whatsapp";
import CarCard from "../components/CarCard";

export default function CarDetailPage({ onOpenBooking }) {
  const { carId } = useParams();
  const navigate = useNavigate();

  const car = cars.find((c) => c.id === carId) || cars[0];
  const [selectedImg, setSelectedImg] = useState(car.gallery[0] || car.image);

  const whatsappUrl = createWhatsAppBookingUrl({ carName: car.name });

  const similarCars = cars.filter((c) => c.id !== car.id).slice(0, 3);

  return (
    <div className="py-6 sm:py-10 px-3 sm:px-6 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mb-4 sm:mb-6">
        <Link to="/" className="hover:text-amber-600 dark:hover:text-amber-400">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/cars" className="hover:text-amber-600 dark:hover:text-amber-400">Fleet</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-amber-600 dark:text-amber-400 font-bold">{car.name}</span>
      </div>

      {/* Main Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start mb-12 sm:mb-16">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-7 space-y-3 sm:space-y-4">
          <div className="relative w-full h-60 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 p-4 sm:p-6 flex items-center justify-center overflow-hidden shadow-2xl">
            <img
              src={selectedImg}
              alt={car.name}
              className="max-h-52 sm:max-h-72 max-w-full object-contain transition-transform duration-500 hover:scale-105 drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-amber-600 dark:text-amber-400 text-[10px] sm:text-xs font-bold shadow-sm">
              {car.category}
            </div>
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] sm:text-xs font-black">
              {car.rentalRate}
            </div>
          </div>

          {/* Thumbnails */}
          {car.gallery && car.gallery.length > 1 && (
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-1">
              {car.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(img)}
                  className={`w-18 h-16 sm:w-24 sm:h-20 rounded-xl glass-card p-1.5 sm:p-2 border transition-all flex items-center justify-center shrink-0 ${
                    selectedImg === img
                      ? "border-amber-500 shadow-md shadow-amber-500/20"
                      : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${car.name} view ${idx+1}`}
                    className="max-h-12 sm:max-h-16 max-w-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Quote Banner */}
          <blockquote className="glass-card p-4 sm:p-5 rounded-2xl border-l-4 border-amber-500 text-xs sm:text-sm text-slate-700 dark:text-slate-200 italic flex items-start gap-2.5 sm:gap-3">
            <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 dark:text-white block mb-0.5 sm:mb-1">{car.tagline}</span>
              <span>Available for self-drive across Kota, Jaipur, Udaipur, Bundi, and all Rajasthan tours.</span>
            </div>
          </blockquote>
        </div>

        {/* Right Column: Car Details & Booking Card */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          <div className="glass-panel p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-amber-500/30 shadow-2xl space-y-4 sm:space-y-6">
            <div>
              <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                {car.brand}
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mt-1">
                {car.name}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Ex-Showroom Reference: {car.priceRange}
              </p>
              {car.includedKm && (
                <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                  {car.includedKm}
                </p>
              )}
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-2xl bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-center">
              <div className="p-1 sm:p-2">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 dark:text-amber-400 mx-auto mb-1" />
                <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 block uppercase font-medium">Seats</span>
                <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white">{car.seats} Seater</span>
              </div>
              <div className="p-1 sm:p-2 border-x border-slate-200 dark:border-slate-800">
                <Gauge className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 dark:text-amber-400 mx-auto mb-1" />
                <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 block uppercase font-medium">Mileage</span>
                <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white">{car.mileage.split(" ")[0]} Kmpl</span>
              </div>
              <div className="p-1 sm:p-2">
                <Fuel className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 dark:text-amber-400 mx-auto mb-1" />
                <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 block uppercase font-medium">Gear</span>
                <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white truncate block">{car.transmission.split("/")[0]}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {car.overview}
            </p>

            {car.includedKm && (
              <div className="px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-600 dark:text-emerald-400 text-center">
                Rental rate: {car.includedKm}
              </div>
            )}

            {/* Booking Actions */}
            <div className="space-y-2.5 sm:space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 sm:py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 active:scale-95 text-center"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Book on WhatsApp Now ({car.rentalRate})</span>
              </a>

              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="w-full py-3 px-6 rounded-2xl bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs border border-slate-300 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <Phone className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
                <span>Call: {companyInfo.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications and Feature List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mb-12 sm:mb-16">
        {/* Full Technical Specs Table */}
        <div className="lg:col-span-7">
          <div className="glass-card p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 dark:text-amber-400" />
              <span>Technical Specifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Engine Displ.</span>
                <span className="font-bold text-slate-900 dark:text-white">{car.engine}</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Max Power</span>
                <span className="font-bold text-slate-900 dark:text-white">{car.power}</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Max Torque</span>
                <span className="font-bold text-slate-900 dark:text-white">{car.torque}</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Fuel Tank</span>
                <span className="font-bold text-slate-900 dark:text-white">{car.fuelCapacity}</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Boot Space</span>
                <span className="font-bold text-slate-900 dark:text-white">{car.bootSpace}</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Ground Clearance</span>
                <span className="font-bold text-slate-900 dark:text-white">{car.groundClearance}</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Dimensions</span>
                <span className="font-bold text-slate-900 dark:text-white">{car.dimensions}</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Wheelbase</span>
                <span className="font-bold text-slate-900 dark:text-white">{car.wheelbase}</span>
              </div>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>{car.details}</p>
              <p>{car.extendedDetails}</p>
            </div>
          </div>
        </div>

        {/* Features Checklist */}
        <div className="lg:col-span-5">
          <div className="glass-card p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 dark:text-amber-400" />
              <span>Safety & Comfort Features</span>
            </h3>

            <ul className="space-y-2.5 sm:space-y-3">
              {car.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-slate-700 dark:text-slate-300 space-y-1.5 sm:space-y-2">
              <div className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Kota Carz Guarantee</span>
              </div>
              <p className="leading-relaxed">
                All vehicles undergo a multi-point safety inspection, oil checks, AC performance verification, and deep sanitization before handover.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Vehicles Showcase */}
      <div className="pt-8 sm:pt-12 border-t border-slate-200 dark:border-slate-800/80">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-6 sm:mb-8">
          Other Cars You Might Like
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {similarCars.map((c) => (
            <CarCard key={c.id} car={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
