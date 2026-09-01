import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import CarFleet from "../components/CarFleet";
import HowItWorks from "../components/HowItWorks";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqAccordion from "../components/FaqAccordion";
import BlogPreview from "../components/BlogPreview";
import ContactSection from "../components/ContactSection";
import { Sparkles, HelpCircle } from "lucide-react";

export default function HomePage({ onOpenBooking, onOpenFeedback }) {
  return (
    <div className="space-y-6">
      {/* 1. Hero Section */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. About Our Company */}
      <AboutSection />

      {/* 3. Fleet Showcase */}
      <CarFleet title="Choose Your Self Drive Car" />

      {/* 4. How to Book (9 Steps) */}
      <HowItWorks onOpenBooking={onOpenBooking} />

      {/* 5. Features & Why Choose Us */}
      <FeaturesSection />

      {/* 6. Passenger Reviews & Testimonials */}
      <TestimonialsSection onOpenFeedback={onOpenFeedback} />

      {/* 7. Frequently Asked Questions */}
      <section className="py-20 px-4 sm:px-6 relative bg-slate-900/30 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Faq Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Frequently Asked Questions!
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Everything your car rental needs is already here! Kota Carz, designed for your convenience.
            </p>
          </div>

          <FaqAccordion limit={6} />
        </div>
      </section>

      {/* 8. Recent Blogs & News */}
      <BlogPreview />

      {/* 9. Contact & Maps Section */}
      <ContactSection />
    </div>
  );
}
