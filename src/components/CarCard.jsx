import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Fuel,
  Gauge,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  MessageSquare
} from "lucide-react";
import { createWhatsAppBookingUrl } from "../utils/whatsapp";

export default function CarCard({ car }) {
  const whatsappUrl = createWhatsAppBookingUrl({ carName: car.name });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group glass-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10"
    >
      {/* Top Header info */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
              {car.category}
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              {car.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">{car.brand}</p>
          </div>

          {car.tag && (
            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-[10px] font-bold shrink-0">
              {car.tag}
            </span>
          )}
        </div>

        {/* Car Image with Hover Zoom */}
        <div className="relative w-full h-36 sm:h-44 my-3 sm:my-4 flex items-center justify-center overflow-hidden rounded-xl bg-slate-100/80 dark:bg-gradient-to-b dark:from-slate-900/60 dark:to-slate-950/60 p-2">
          <img
            src={car.image}
            alt={car.name}
            className="max-h-32 sm:max-h-36 max-w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            loading="lazy"
          />
          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-400">
            {car.fuelType}
          </div>
        </div>

        {/* Key Specs Row */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 py-2.5 sm:py-3 border-y border-slate-200 dark:border-slate-800/80 my-2.5 sm:my-3 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-[10px] sm:text-[11px]">
              <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 dark:text-amber-400" />
              <span>Seats</span>
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">{car.seats} P</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-[10px] sm:text-[11px]">
              <Gauge className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 dark:text-amber-400" />
              <span>Mileage</span>
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">{car.mileage.split(" ")[0]} Kmpl</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-[10px] sm:text-[11px]">
              <Fuel className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 dark:text-amber-400" />
              <span>Gear</span>
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5 truncate max-w-[75px]">
              {car.transmission.split("/")[0]}
            </span>
          </div>
        </div>

        {/* Short description excerpt */}
        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-3 sm:mb-4 leading-relaxed">
          {car.overview}
        </p>
      </div>

      {/* Pricing & Actions */}
      <div className="pt-2">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[10px] text-slate-500 block uppercase font-medium">Rental Rate</span>
            <span className="text-base sm:text-lg font-black text-amber-600 dark:text-amber-400">{car.rentalRate}</span>
            {car.includedKm && (
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-medium">{car.includedKm}</span>
            )}
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-500 block uppercase font-medium">Price Range</span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{car.priceRange}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/cars/${car.id}`}
            className="py-2.5 px-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white text-xs font-bold text-center border border-slate-300 dark:border-slate-700 transition-colors flex items-center justify-center gap-1"
          >
            <span>Specs</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black text-center shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-1 active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Book Now</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
