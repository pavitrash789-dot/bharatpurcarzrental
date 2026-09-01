import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Search,
  BookOpen,
  Tag,
  ChevronRight
} from "lucide-react";
import { blogs, blogCategories } from "../data/blogs";

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      const matchCat = activeCategory === "All" || b.category === activeCategory;
      const matchSearch =
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Blog Grid!</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Feel your journey with Kota Carz!
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Tips, guides, and practical insights for exploring Kota and Rajasthan with self-drive freedom.
          </p>
        </div>

        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-amber-500 text-slate-950 shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="group glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={blog.coverImage || blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/img/car-rental-kota.png";
                    }}
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-amber-400 text-xs font-bold">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 mb-3 leading-snug">
                    <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-800/60 mt-2">
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors mt-4"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
