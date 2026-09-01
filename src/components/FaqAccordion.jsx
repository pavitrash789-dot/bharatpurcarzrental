import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Search, Sparkles, MessageSquare } from "lucide-react";
import { faqs, faqCategories } from "../data/faqs";
import { companyInfo } from "../data/companyInfo";

export default function FaqAccordion({ showSearch = true, limit, activeCatDefault = "All" }) {
  const [openId, setOpenId] = useState("faq-1");
  const [activeCategory, setActiveCategory] = useState(activeCatDefault);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const displayedFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  return (
    <div className="w-full">
      {/* Category Tabs & Search Bar */}
      {showSearch && (
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto no-scrollbar">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? "bg-amber-500 text-slate-950 shadow"
                    : "text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 shadow-sm"
            />
          </div>
        </div>
      )}

      {/* Accordion list */}
      <div className="space-y-2.5 sm:space-y-3">
        {displayedFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`glass-card rounded-2xl border transition-colors overflow-hidden ${
                isOpen
                  ? "border-amber-500/50 bg-amber-50/50 dark:bg-slate-900/90 shadow-lg shadow-amber-500/5"
                  : "border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? "" : faq.id)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-amber-500 text-slate-950 font-black"
                        : "bg-slate-100 dark:bg-slate-800 text-amber-600 dark:text-amber-400"
                    }`}
                  >
                    <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <h3 className="text-xs sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {faq.question}
                  </h3>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-slate-400"
                >
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800/60">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {displayedFaqs.length === 0 && (
        <div className="text-center py-10 glass-card rounded-2xl border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400">No questions matched your search query.</p>
          <a
            href={companyInfo.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-bold hover:underline"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask our team on WhatsApp directly</span>
          </a>
        </div>
      )}
    </div>
  );
}
