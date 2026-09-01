import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Car,
  Calendar,
  Clock,
  MapPin,
  Users,
  Send,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { cars } from "../data/cars";
import { companyInfo } from "../data/companyInfo";
import { createWhatsAppBookingUrl } from "../utils/whatsapp";

export default function BookingModal({ isOpen, onClose, initialCarId = null }) {
  const defaultCar = cars.find((c) => c.id === initialCarId) || cars[0];

  const [selectedCar, setSelectedCar] = useState(defaultCar.name);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("10:00 AM");
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("10:00 AM");
  const [pickupLocation, setPickupLocation] = useState("Kota City / Doorstep");
  const [passengers, setPassengers] = useState("1-4");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = createWhatsAppBookingUrl({
      carName: selectedCar,
      customerName,
      customerPhone,
      pickupDate,
      pickupTime,
      returnDate,
      returnTime,
      pickupLocation,
      passengers,
      notes
    });
    window.open(url, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Self Drive Reservation</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">Book Your Car in Kota</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Select your vehicle and dates. We will automatically generate your WhatsApp booking request for instant approval.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Select Vehicle *
              </label>
              <select
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-400"
              >
                {cars.map((car) => (
                  <option key={car.id} value={car.name}>
                    {car.name} ({car.category}) • {car.rentalRate}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 00000 00000"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Pickup Date & Time *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    required
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="e.g. 10:00 AM"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Return Date & Time *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    required
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="e.g. 10:00 AM"
                    value={returnTime}
                    onChange={(e) => setReturnTime(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Pickup Location in Kota
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kota Junction, Landmark City, Indraprastha..."
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Passengers
                </label>
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="1-2 Persons">1-2 Persons</option>
                  <option value="3-4 Persons">3-4 Persons</option>
                  <option value="5-7 Persons">5-7 Persons</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Special Requests / Trip Destination (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Going to Ranthambore / Jaipur, child seat needed..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Confirm & Book on WhatsApp</span>
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
