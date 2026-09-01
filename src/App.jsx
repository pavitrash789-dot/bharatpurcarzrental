import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import FeedbackModal from "./components/FeedbackModal";
import SearchPalette from "./components/SearchPalette";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import { Car } from "lucide-react";

// Code-split pages for high performance
const HomePage = lazy(() => import("./pages/HomePage"));
const CarsPage = lazy(() => import("./pages/CarsPage"));
const CarDetailPage = lazy(() => import("./pages/CarDetailPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const FaqsPage = lazy(() => import("./pages/FaqsPage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage"));
const BookRidePage = lazy(() => import("./pages/BookRidePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function ScrollToTopOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function PagePreloader() {
  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center gap-4 text-center px-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 animate-pulse">
          <Car className="w-8 h-8" />
        </div>
        <span className="absolute -inset-1 rounded-2xl bg-amber-500/20 blur-sm animate-ping"></span>
      </div>
      <div className="text-sm font-bold text-slate-800 dark:text-white tracking-wider">
        Loading Kota Carz...
      </div>
    </div>
  );
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTopOnRoute />
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-amber-500 selection:text-black transition-colors duration-300">
          {/* Global Navigation */}
          <Navbar
            onOpenBooking={() => setIsBookingOpen(true)}
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenFeedback={() => setIsFeedbackOpen(true)}
          />

          {/* Page Content with Suspense */}
          <main className="flex-grow">
            <Suspense fallback={<PagePreloader />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <HomePage
                      onOpenBooking={() => setIsBookingOpen(true)}
                      onOpenFeedback={() => setIsFeedbackOpen(true)}
                    />
                  }
                />
                <Route
                  path="/cars"
                  element={<CarsPage onOpenBooking={() => setIsBookingOpen(true)} />}
                />
                <Route
                  path="/cars/:carId"
                  element={<CarDetailPage onOpenBooking={() => setIsBookingOpen(true)} />}
                />
                <Route
                  path="/about"
                  element={
                    <AboutPage
                      onOpenBooking={() => setIsBookingOpen(true)}
                      onOpenFeedback={() => setIsFeedbackOpen(true)}
                    />
                  }
                />
                <Route path="/faqs" element={<FaqsPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/blogs/:slug" element={<BlogDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route
                  path="/reviews"
                  element={<ReviewsPage onOpenFeedback={() => setIsFeedbackOpen(true)} />}
                />
                <Route path="/book" element={<BookRidePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>

          {/* Global Footer */}
          <Footer onOpenBooking={() => setIsBookingOpen(true)} />

          {/* Interactive Modals */}
          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
          />

          <FeedbackModal
            isOpen={isFeedbackOpen}
            onClose={() => setIsFeedbackOpen(false)}
          />

          <SearchPalette
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />

          {/* Floating Action Widgets */}
          <FloatingWhatsApp />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
