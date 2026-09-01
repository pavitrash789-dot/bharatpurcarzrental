import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Menu,
  X,
  Car,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Sun,
  Moon
} from "lucide-react";
import { companyInfo } from "../data/companyInfo";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ onOpenBooking, onOpenSearch, onOpenFeedback }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Cars Fleet", path: "/cars" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blogs" },
    { name: "FAQ", path: "/faqs" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="w-full relative z-40">
      {/* Top Header Bar */}
      <div className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/80 text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 py-1.5 sm:py-2 px-3 sm:px-8 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-medium truncate">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{companyInfo.tagline}</span>
            <span className="hidden md:inline text-slate-300 dark:text-slate-600">|</span>
            <span className="hidden md:inline text-slate-500 dark:text-slate-400">Kota, Rajasthan</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            <a
              href={companyInfo.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1 font-medium"
            >
              <MessageSquare className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />
              <span>WhatsApp</span>
            </a>
            <Link to="/faqs" className="hidden xs:inline hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">
              FAQ
            </Link>
            <button
              onClick={onOpenFeedback}
              className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold transition-colors flex items-center gap-1"
            >
              ★ Feedback
            </button>
          </div>
        </div>
      </div>

      {/* Mid Header with Logo and Contacts (Desktop) */}
      <div className="hidden lg:block bg-white dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800/50 py-4 px-6 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Car className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                KOTA<span className="text-amber-500 dark:text-amber-400">CARZ</span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest -mt-1 font-medium">
                Self Drive Rental
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">Call us now</span>
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="text-sm font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  {companyInfo.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">Email now</span>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 max-w-[260px]">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate font-medium">Indraprastha Ind. Area</span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block truncate">
                  Kota, Rajasthan 324005
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Main Navigation */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xl shadow-black/10 dark:shadow-black/40 border-b border-slate-200 dark:border-slate-800 py-2.5 sm:py-3"
            : "relative bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 py-2.5 sm:py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-2">
          {/* Logo on sticky view / mobile */}
          <Link
            to="/"
            className={`flex items-center gap-2 shrink-0 ${
              isScrolled ? "flex" : "lg:hidden"
            }`}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black shrink-0">
              <Car className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white">
              KOTA<span className="text-amber-500 dark:text-amber-400">CARZ</span>
            </span>
          </Link>

          {/* Nav items desktop */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? "text-amber-600 dark:text-amber-400 bg-amber-500/10 shadow-sm shadow-amber-500/10"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Action buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-300/80 dark:border-slate-700/50 transition-all duration-300 flex items-center justify-center shrink-0"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 border border-slate-300/80 dark:border-slate-700/50 transition-colors flex items-center gap-1.5 text-xs shrink-0"
              title="Search cars, blogs, FAQs"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline text-slate-600 dark:text-slate-400 font-medium">Search</span>
            </button>

            {/* Book Button */}
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-amber-500/20 transition-all duration-200 active:scale-95 flex items-center gap-1.5 shrink-0"
            >
              <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Book <span className="hidden sm:inline">a Car</span></span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white border border-slate-300 dark:border-slate-700 shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu - Mounted directly below nav with Backdrop */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="lg:hidden fixed inset-0 top-[100px] bg-slate-950/60 backdrop-blur-sm z-40"
              />

              {/* Drawer Container */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-2xl z-50 max-h-[calc(100vh-80px)] overflow-y-auto no-scrollbar"
              >
                <div className="p-4 sm:p-5 flex flex-col gap-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Appearance Theme</span>
                    <button
                      onClick={toggleTheme}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200"
                    >
                      {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
                      <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                    </button>
                  </div>

                  <ul className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <li key={link.path}>
                        <NavLink
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                              isActive
                                ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                                : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-black dark:hover:text-white"
                            }`
                          }
                        >
                          <span>{link.name}</span>
                          <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                        </NavLink>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-col gap-2">
                    <a
                      href={`tel:${companyInfo.phoneRaw}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm"
                    >
                      <Phone className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                      <div>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">Call Directly</span>
                        <span className="font-bold">{companyInfo.phoneDisplay}</span>
                      </div>
                    </a>

                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenFeedback();
                      }}
                      className="flex items-center justify-center gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-sm font-semibold"
                    >
                      <span>Leave Feedback & Reviews</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
