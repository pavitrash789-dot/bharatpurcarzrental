import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Car,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Send
} from "lucide-react";
import { cars } from "../data/cars";
import { createWhatsAppBookingUrl } from "../utils/whatsapp";

export default function QuickBookingBar({ className = "" }) {
  const navigate = useNavigate();
  const [selectedCar, setSelectedCar] = useState(cars[0].name);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1-4");
  const [tripType, setTripType] = useState("Standard");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = createWhatsAppBookingUrl({
      carName: selectedCar,
      pickupDate: pickupDate || "Today/Tomorrow",
      returnDate: returnDate || "1 Day Later",
      passengers,
      tripType
    });
    window.open(url, "_blank");
  };

  return (
    <div className={`glass-panel rounded-2xl p-4 sm:p-6 shadow-2xl border border-amber-500/30 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Instant WhatsApp Reservation
          </span>
        </div>

        {/* Trip type selector */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/90 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
          {["Standard", "Economy", "VIP / SUV", "Special"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setTripType(type)}
              className={`px-2.5 py-1 rounded-md transition-all font-semibold ${
                tripType === type
                  ? "bg-amber-500 text-slate-950 font-bold shadow"
                  : "text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end">
        {/* Car Select */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Car className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" /> Choose Vehicle
          </label>
          <select
            value={selectedCar}
            onChange={(e) => setSelectedCar(e.target.value)}
            className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-400 cursor-pointer"
          >
            {cars.map((car) => (
              <option key={car.id} value={car.name} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                {car.name} ({car.category}) - {car.rentalRate}
              </option>
            ))}
          </select>
        </div>

        {/* Pickup Date */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" /> Pickup Date
          </label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-400"
          />
        </div>

        {/* Return Date */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" /> Return Date
          </label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-400"
          />
        </div>

        {/* Passengers */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" /> Passengers
          </label>
          <select
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-400 cursor-pointer"
          >
            <option value="1 Person" className="bg-white dark:bg-slate-900">1 Person</option>
            <option value="2 Persons" className="bg-white dark:bg-slate-900">2 Persons</option>
            <option value="3 Persons" className="bg-white dark:bg-slate-900">3 Persons</option>
            <option value="4 Persons" className="bg-white dark:bg-slate-900">4 Persons</option>
            <option value="5-7 Persons" className="bg-white dark:bg-slate-900">5-7 Persons (SUV/MUV)</option>
          </select>
        </div>

        {/* Submit Action */}
        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/25 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Book Your Taxi</span>
          </button>
        </div>
      </form>
    </div>
  );
}
