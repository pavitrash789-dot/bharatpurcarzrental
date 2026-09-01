import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Car, Sparkles, Check } from "lucide-react";
import { cars, carCategories } from "../data/cars";
import CarCard from "./CarCard";

export default function CarFleet({ limit, showHeading = true, title = "Choose Your Self Drive Car" }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesCategory =
        activeCategory === "All" || car.category.toLowerCase().includes(activeCategory.toLowerCase());
      const matchesSearch =
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.fuelType.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const displayedCars = limit ? filteredCars.slice(0, limit) : filteredCars;

  return (
    <section id="fleet" className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-3 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Lets Go With Us!</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
              Explore our diverse fleet of sanitized, well-maintained self-drive cars in Kota. Transparent pricing with instant WhatsApp booking.
            </p>
          </div>
        )}

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
          {/* Category Tabs with smooth mobile swipe */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 w-full md:w-auto overflow-x-auto no-scrollbar shadow-sm">
            {carCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap shrink-0 ${
                  activeCategory === category
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search car (Swift, Thar, etc.)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 shadow-sm"
            />
          </div>
        </div>

        {/* Cars Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {displayedCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </AnimatePresence>
        </motion.div>

        {displayedCars.length === 0 && (
          <div className="text-center py-16 glass-card rounded-2xl border border-slate-200 dark:border-slate-800">
            <Car className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No cars found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Try adjusting your search query or switching categories.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchTerm("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
