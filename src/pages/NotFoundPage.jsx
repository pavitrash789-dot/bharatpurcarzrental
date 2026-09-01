import React from "react";
import { Link } from "react-router-dom";
import { Car, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6">
        <Car className="w-8 h-8" />
      </div>
      <h1 className="text-6xl font-black text-white font-mono">404</h1>
      <h2 className="text-2xl font-bold text-slate-200 mt-2">Page Not Found</h2>
      <p className="text-slate-400 text-sm max-w-md mt-2 mb-8">
        The road you are looking for does not exist. Let us get you back on track to your Kota Carz journey.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}
