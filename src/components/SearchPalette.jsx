import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Car, BookOpen, HelpCircle, X, ChevronRight } from "lucide-react";
import { cars } from "../data/cars";
import { blogs } from "../data/blogs";
import { faqs } from "../data/faqs";

export default function SearchPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose ? onClose(!isOpen) : null;
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matchedCars = cars.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase()) ||
      c.fuelType.toLowerCase().includes(query.toLowerCase())
  );

  const matchedBlogs = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.category.toLowerCase().includes(query.toLowerCase())
  );

  const matchedFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(query.toLowerCase()) ||
      f.answer.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 pt-12 sm:pt-20 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl z-10 overflow-hidden"
        >
          <div className="relative flex items-center border-b border-slate-200 dark:border-slate-800 pb-3 sm:pb-4 gap-2">
            <Search className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Search cars, guides, FAQs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm sm:text-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-black dark:hover:text-white shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto mt-4 space-y-6 pr-1">
            {matchedCars.length > 0 && (
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2 px-2 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                  <span>Cars Fleet ({matchedCars.length})</span>
                </span>
                <div className="space-y-1">
                  {matchedCars.map((car) => (
                    <button
                      key={car.id}
                      onClick={() => handleSelect(`/cars/${car.id}`)}
                      className="w-full p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 flex items-center justify-between text-left transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-10 h-10 object-contain rounded-lg bg-slate-100 dark:bg-slate-950 p-1 border border-slate-200 dark:border-slate-800"
                        />
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400">
                            {car.name}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {car.category} • {car.rentalRate}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {matchedBlogs.length > 0 && (
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2 px-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                  <span>Articles & Guides ({matchedBlogs.length})</span>
                </span>
                <div className="space-y-1">
                  {matchedBlogs.map((blog) => (
                    <button
                      key={blog.id}
                      onClick={() => handleSelect(`/blogs/${blog.slug}`)}
                      className="w-full p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 flex items-center justify-between text-left transition-colors group"
                    >
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 line-clamp-1">
                          {blog.title}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {blog.category} • {blog.date}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {matchedFaqs.length > 0 && (
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2 px-2 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                  <span>Frequently Asked Questions ({matchedFaqs.length})</span>
                </span>
                <div className="space-y-1">
                  {matchedFaqs.slice(0, 3).map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => handleSelect("/faqs")}
                      className="w-full p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 flex items-center justify-between text-left transition-colors group"
                    >
                      <div className="pr-2">
                        <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400">
                          {faq.question}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                          {faq.answer}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-600 group-hover:text-amber-500 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {matchedCars.length === 0 && matchedBlogs.length === 0 && matchedFaqs.length === 0 && (
              <div className="text-center py-8 text-slate-500 text-sm">
                No matching results found for "{query}".
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
