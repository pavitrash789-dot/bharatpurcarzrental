import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ChevronRight,
  Share2,
  Tag,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Send
} from "lucide-react";
import { blogs } from "../data/blogs";
import { companyInfo } from "../data/companyInfo";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug) || blogs[0];

  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentSent, setCommentSent] = useState(false);

  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 2);

  const handleComment = (e) => {
    e.preventDefault();
    setCommentSent(true);
    setCommentName("");
    setCommentEmail("");
    setCommentText("");
  };

  return (
    <div className="py-6 sm:py-10 px-3 sm:px-6 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mb-4 sm:mb-6">
        <Link to="/" className="hover:text-amber-600 dark:hover:text-amber-400">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/blogs" className="hover:text-amber-600 dark:hover:text-amber-400">Blogs</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-amber-600 dark:text-amber-400 font-bold line-clamp-1">{blog.shortTitle || blog.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
        {/* Main Article Body */}
        <article className="lg:col-span-8 space-y-6 sm:space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{blog.category}</span>
            </div>

            <h1 className="text-xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-3 sm:mb-4">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 pb-4 sm:pb-6 border-b border-slate-200 dark:border-slate-800">
              <span className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 dark:text-amber-400" />
                {blog.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 dark:text-amber-400" />
                {blog.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 dark:text-amber-400" />
                {blog.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 max-h-[420px] shadow-lg">
            <img
              src={blog.coverImage || blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/assets/img/car-rental-kota.png";
              }}
            />
          </div>

          {/* Preserved Content Paragraphs */}
          <div className="space-y-4 sm:space-y-5 text-xs sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {blog.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Detailed Tips & Subsections */}
          {blog.tips && blog.tips.length > 0 && (
            <div className="p-4 sm:p-6 rounded-2xl glass-panel border border-amber-500/30 space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 dark:text-amber-400 shrink-0" />
                <span>Key Tips & Recommendations</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {blog.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{tip.body || tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Post Comments Section */}
          <div className="glass-card p-4 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Post Comments</h3>

            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5 sm:space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-amber-600 dark:text-amber-400">Ashton Porter</span>
                <span className="text-slate-400 dark:text-slate-500 text-[11px]">Jan 01, 2022 at 8:00</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                You guys have put so much work, effort, and time while designing this awesome service. Very helpful tips for monsoon driving in Rajasthan!
              </p>
            </div>

            {commentSent ? (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-600 dark:text-emerald-400 text-center font-semibold">
                Thank you for your comment! It has been submitted for moderation.
              </div>
            ) : (
              <form onSubmit={handleComment} className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">Leave a Reply</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 shadow-sm"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={commentEmail}
                    onChange={(e) => setCommentEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 shadow-sm"
                  />
                </div>
                <textarea
                  rows={3}
                  required
                  placeholder="Write your comment here..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 resize-none shadow-sm"
                ></textarea>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow text-center"
                >
                  Submit Comment
                </button>
              </form>
            )}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-4 sm:space-y-6">
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-amber-500/30 text-center space-y-3 sm:space-y-4 shadow-xl">
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">Rent a Car in Kota</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Get 24/7 self-drive cars with doorstep delivery in Kota and throughout Rajasthan.
            </p>
            <a
              href={companyInfo.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 text-center"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Book on WhatsApp Now</span>
            </a>
          </div>

          <div className="glass-card p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
              <span>Recent Articles</span>
            </h3>

            <div className="space-y-2.5 sm:space-y-3">
              {relatedBlogs.map((rb) => (
                <Link
                  key={rb.id}
                  to={`/blogs/${rb.slug}`}
                  className="block group p-2.5 sm:p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                >
                  <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold block">{rb.category} • {rb.date}</span>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2 mt-1">
                    {rb.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
