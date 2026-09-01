import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Sparkles, User } from "lucide-react";
import { blogs } from "../data/blogs";

export default function BlogPreview({ limit = 3, showHeading = true }) {
  const displayedBlogs = blogs.slice(0, limit);

  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-3 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Recent Posts!</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              News And Insights!
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
              We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBlogs.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/img/car-rental-kota.png";
                    }}
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-amber-600 dark:text-amber-400 text-xs font-bold shadow-sm">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2 mb-3 leading-snug">
                    <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-200 dark:border-slate-800/60 mt-2">
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors mt-4"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all blogs CTA */}
        <div className="text-center mt-12">
          <Link
            to="/blogs"
            className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white font-bold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 transition-all inline-flex items-center gap-2 shadow-sm"
          >
            <span>View All Insights & Guides</span>
            <ArrowRight className="w-4 h-4 text-amber-500 dark:text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
