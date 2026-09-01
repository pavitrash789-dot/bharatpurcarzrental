import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X, CheckCircle2, MessageSquareHeart, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

const ratingLabels = {
  1: { label: "Poor 🙁", desc: "We are sorry to hear that. We will improve!" },
  2: { label: "Not bad 😐", desc: "Fair experience. Tell us how to do better." },
  3: { label: "Average 🙂", desc: "Satisfactory ride. We strive for excellence!" },
  4: { label: "Good 😋", desc: "Glad you enjoyed your trip with Kota Carz!" },
  5: { label: "Excellent 🤩", desc: "Superb! Thank you for choosing Kota Carz Self Drive!" }
};

export default function FeedbackModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorComment, setErrorComment] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      setErrorComment("* Please enter comment");
      return;
    }
    setErrorComment("");
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}
  };

  const handleReset = () => {
    setSubmitted(false);
    setComment("");
    setPhone("");
    setRating(5);
    onClose();
  };

  const activeRating = hoverRating || rating;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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
          className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-amber-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl z-10 my-auto max-h-[90vh] overflow-y-auto no-scrollbar text-center"
        >
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MessageSquareHeart className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Share Your Feedback</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4 sm:mb-6">
                Help us improve your self-drive rental experience with Kota Carz.
              </p>

              <div className="flex justify-center items-center gap-1.5 sm:gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 sm:p-1.5 transition-transform hover:scale-125 focus:outline-none"
                  >
                    <Star
                      className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                        star <= activeRating
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-300 dark:text-slate-700"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 mb-1">
                {ratingLabels[activeRating]?.label}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mb-4 sm:mb-6">
                {ratingLabels[activeRating]?.desc}
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 text-left">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Experience & Comment *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your comment and trip experience..."
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                      if (errorComment) setErrorComment("");
                    }}
                    className="w-full min-w-0 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 resize-none"
                  />
                  {errorComment && (
                    <p className="text-xs text-rose-500 mt-1">{errorComment}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Mobile Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 000 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full min-w-0 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-1/2 py-2.5 sm:py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-2.5 sm:py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20"
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-4 sm:py-6 space-y-3 sm:space-y-4 text-center">
              <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-500 dark:text-emerald-400 mx-auto" />
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Thank You!</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                We appreciate you sending us your feedback.
              </p>

              <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-left space-y-1.5 sm:space-y-2 my-3 sm:my-4">
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  <strong className="text-slate-900 dark:text-white">Your Rating:</strong> ⭐ {rating} / 5 ({ratingLabels[rating]?.label})
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  <strong className="text-slate-900 dark:text-white">Your Comment:</strong> {comment}
                </p>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-2.5 sm:py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
