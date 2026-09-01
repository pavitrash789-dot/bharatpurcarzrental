import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Clock
} from "lucide-react";
import { companyInfo } from "../data/companyInfo";

export default function ContactSection({ showHeading = true }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `📨 *New Contact Query from Kota Carz Website*\n\n👤 *Name:* ${formData.firstname} ${formData.lastname}\n📧 *Email:* ${formData.email}\n📞 *Phone:* ${formData.phone}\n💬 *Message:* ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${companyInfo.phoneRaw}&text=${encodeURIComponent(message)}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-3 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Have Any <span className="text-amber-600 dark:text-amber-400">Questions?</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
              Get in touch to discuss your travel & rental needs today. Please give us a call, drop us an email or fill out the contact form.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Our Location</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {companyInfo.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Email Address</h4>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-xs sm:text-sm text-amber-600 dark:text-amber-400 hover:underline block mt-1"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Phone Support</h4>
                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold hover:text-amber-600 dark:hover:text-amber-400 block mt-1 font-mono"
                  >
                    {companyInfo.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 h-64 sm:h-72 shadow-md">
              <iframe
                title="Kota Carz Self Drive Location"
                src={companyInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="contrast-105 opacity-90 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-amber-500/30 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  Contact With Us!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Fill out your details below and our team will get back to you immediately.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 dark:text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Thank You! Your message has been sent.</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    We will review your inquiry and connect with you shortly on WhatsApp / Phone.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ firstname: "", lastname: "", email: "", phone: "", message: "" });
                    }}
                    className="mt-3 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        value={formData.firstname}
                        onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        value={formData.lastname}
                        onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your travel plan, dates, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 resize-none shadow-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/25 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message (WhatsApp)</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
