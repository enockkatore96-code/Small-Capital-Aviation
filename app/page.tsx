"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Send,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Lock,
  LogOut,
  ShieldCheck,
  Share2,
  ArrowRight,
} from "lucide-react";
import { Chatbot } from "@/components/Chatbot";

type PageState = "home" | "login" | "dashboard";

export default function Home() {
  const [page, setPage] = useState<PageState>("home");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [trackingId, setTrackingId] = useState("");
  const [trackingResult, setTrackingResult] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setPage("dashboard");
      setEmail("");
      setPassword("");
    } else {
      alert("Please enter any email and password to continue (Demo Mode)");
    }
  };

  const handleLogout = () => setPage("home");

  const services: Record<string, string> = {
    "Air Cargo":
      "Full cargo lifecycle management including booking, documentation, airway bills, and coordination with airlines.",
    Logistics:
      "Integrated supply chain solutions: warehousing, inventory tracking, freight forwarding, and last-mile coordination.",
    "Ground Handling":
      "Aircraft loading/unloading, ramp services, cargo transfer, and turnaround coordination.",
    Compliance:
      "Strict adherence to IATA/ICAO regulations, safety audits, and dangerous goods handling procedures.",
  };

  const handleTracking = () => {
    if (!trackingId) {
      setTrackingResult("Please enter a valid Tracking ID.");
      return;
    }
    setTrackingResult("Shipment is in transit — Estimated arrival: 24 hours");
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-blue-900 text-white sticky top-0 z-50 shadow-lg">
        <h1 className="font-bold text-lg md:text-xl tracking-tight flex items-center gap-2">
          <ShieldCheck className="text-orange-500" />
          Small Capital Aviation
        </h1>
        <div className="flex items-center gap-4">
          <Link
            href="/portfolio"
            className="text-sm font-semibold hover:text-orange-500 transition-colors hidden md:block text-gray-700"
          >
            Portfolio
          </Link>

          {page === "dashboard" && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl text-sm transition-colors font-medium text-gray-900"
            >
              <LogOut size={16} /> Logout
            </button>
          )}
        </div>
      </header>

      <main className="min-h-[calc(100vh-76px)] flex flex-col">
        {/* HOME PAGE */}
        {page === "home" && (
          <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-blue-900/5 to-transparent">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight text-balance">
                Welcome to <span className="text-blue-600">Small Capital</span>{" "}
                Aviation
              </h2>
              <p className="text-lg md:text-2xl opacity-70 mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
                Elevating global logistics through professional cargo operations
                and innovative aviation solutions.
              </p>
              <button
                onClick={() => setPage("login")}
                className="inline-flex items-center gap-3 bg-blue-600 text-white font-black px-10 py-5 rounded-2xl hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-600/30 text-xl"
              >
                Access Client Portal <ArrowRight size={24} />
              </button>
            </motion.div>
          </section>
        )}

        {/* LOGIN PAGE */}
        {page === "login" && (
          <section className="flex-1 flex flex-col items-center justify-center p-6 text-center py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-md bg-white p-10 md:p-12 rounded-[48px] shadow-lg border border-gray-200"
            >
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Lock size={40} />
              </div>
              <h2 className="text-3xl font-black mb-2 tracking-tight text-gray-900">
                Client Sign In
              </h2>
              <p className="text-lg opacity-60 mb-10 font-medium italic text-gray-700">
                Demo: Enter any credentials
              </p>

              <form onSubmit={handleLogin} className="space-y-6 text-left">
                <div className="space-y-3">
                  <label className="text-sm font-black text-blue-900 uppercase tracking-widest opacity-60 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="client@example.com"
                    className="w-full p-5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all text-lg text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-blue-900 uppercase tracking-widest opacity-60 ml-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full p-5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all text-lg text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>
                <button className="w-full bg-blue-600 text-white font-black py-6 rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 mt-4 shadow-lg shadow-blue-600/30 text-xl hover:bg-blue-700">
                  Enter Portal <ChevronRight size={24} />
                </button>
              </form>
              <button
                onClick={() => setPage("home")}
                className="mt-8 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors"
              >
                Back to Home
              </button>
            </motion.div>
          </section>
        )}

        {/* DASHBOARD PAGE */}
        {page === "dashboard" && (
          <div className="flex-1 flex flex-col">
            {/* Hero with YouTube Background */}
            <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
              <div className="absolute inset-0 pointer-events-none scale-110">
                <iframe
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115vw] h-[115vh] max-w-none border-none pointer-events-none"
                  src="https://www.youtube.com/embed/avPvQetuZzg?autoplay=1&mute=1&loop=1&playlist=avPvQetuZzg&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
                  allow="autoplay; fullscreen"
                ></iframe>
              </div>
              <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]" />
              <div className="relative z-10 px-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-7xl font-bold mb-4 text-balance"
                >
                  Welcome to Small Capital Aviation
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl font-light"
                >
                  Cargo & Logistics Excellence
                </motion.p>
              </div>
            </section>

            {/* CEO Section */}
            <section className="py-24 px-6 bg-white dark:bg-zinc-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-blue-900 dark:text-blue-500 uppercase tracking-widest text-sm font-bold mb-4">
                  Our Leadership
                </p>
                <h3 className="text-3xl md:text-5xl font-black mb-12">
                  Chief Executive Officer
                </h3>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative w-64 h-64 mx-auto mb-8 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-zinc-800"
                >
                  <img
                    src="/ceo.jpg"
                    alt="Kahindi Enock - CEO of Small Capital Aviation"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/400x400?text=CEO+Photo";
                    }}
                  />
                </motion.div>
                <h4 className="text-3xl font-black text-zinc-900 dark:text-white mb-2">
                  Kahindi Enock
                </h4>
                <p className="text-xl font-medium opacity-70 italic">
                  Founder & CEO
                </p>
              </div>
            </section>

            {/* Certification Section */}
            <section
              className={`py-24 px-6 ${darkMode ? "bg-zinc-900/50" : "bg-gray-100"}`}
            >
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">
                  Professional Certification
                </h2>
                <div className="bg-white dark:bg-zinc-800 p-12 rounded-[48px] shadow-xl border border-zinc-100 dark:border-zinc-700">
                  <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <ShieldCheck size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Cargo Introductory Diploma (IATA)
                  </h3>
                  <p className="text-lg opacity-70 mb-10 max-w-lg mx-auto leading-relaxed">
                    Recognized global standard certification ensuring expertise
                    in international cargo handling, safety, and operational
                    excellence.
                  </p>
                  <a
                    href="/certificate.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-3 bg-blue-600 text-white font-bold px-10 py-5 rounded-2xl hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-600/20"
                  >
                    View Certificate <ChevronRight size={24} />
                  </a>
                </div>
              </div>
            </section>

            {/* Services */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                Operational Services
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {Object.keys(services).map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      setSelectedService(s === selectedService ? null : s)
                    }
                    className={`p-10 rounded-[32px] shadow-sm border transition-all cursor-pointer flex flex-col items-center text-center justify-center min-h-[200px] ${
                      selectedService === s
                        ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/20"
                        : darkMode
                          ? "bg-zinc-900 border-zinc-800 hover:border-blue-500"
                          : "bg-white border-gray-100 hover:border-blue-500"
                    }`}
                  >
                    <span className="font-bold text-xl">{s}</span>
                    <div
                      className={`mt-6 transition-transform duration-300 ${selectedService === s ? "rotate-90" : ""}`}
                    >
                      <ChevronRight size={24} />
                    </div>
                  </motion.div>
                ))}
              </div>

              <AnimatePresence>
                {selectedService && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className={`mt-10 p-10 rounded-[32px] border ${
                      darkMode
                        ? "bg-blue-900/20 border-blue-900/50"
                        : "bg-blue-50 border-blue-100"
                    }`}
                  >
                    <h3 className="font-bold text-2xl mb-4 text-blue-600">
                      {selectedService}
                    </h3>
                    <p className="text-xl leading-relaxed opacity-90">
                      {services[selectedService]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Tracking System */}
            <section
              className={`py-24 px-6 ${darkMode ? "bg-zinc-900/50" : "bg-gray-100"}`}
            >
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Track Your Shipment</h2>
                <p className="text-lg mb-12 opacity-70">
                  Enter your airway bill or tracking number to get real-time
                  updates
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <div className="relative w-full max-w-lg">
                    <Search
                      className="absolute left-5 top-1/2 -translate-y-1/2 opacity-40"
                      size={24}
                    />
                    <input
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      placeholder="e.g. SC-7890123"
                      className={`w-full pl-14 pr-6 py-5 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-lg ${
                        darkMode
                          ? "bg-zinc-900 border-zinc-800 text-white"
                          : "bg-white border-gray-200"
                      }`}
                    />
                  </div>
                  <button
                    onClick={handleTracking}
                    className="w-full md:w-auto px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-600/20"
                  >
                    Track
                  </button>
                </div>

                <AnimatePresence>
                  {trackingResult && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-10 text-xl font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/20 py-5 px-10 rounded-2xl inline-block"
                    >
                      {trackingResult}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </section>

            {/* Contact */}
            <section className="py-24 px-6 bg-blue-900 text-white">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-5xl font-bold mb-10">Connect With Us</h2>
                  <p className="text-blue-100 text-xl mb-12 leading-relaxed">
                    Ready to elevate your cargo operations? Reach out to our
                    dedicated team in Nairobi for global logistics support.
                  </p>

                  <div className="flex flex-wrap gap-6 mt-12 mb-12">
                    <a
                      href="mailto:kahindienock83@gmail.com"
                      className="inline-flex items-center gap-3 bg-white text-blue-900 font-bold px-10 py-5 rounded-2xl hover:bg-blue-50 transition-all active:scale-95 shadow-xl"
                    >
                      <Mail size={24} /> Send Email
                    </a>
                    <button className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Share2 size={28} />
                    </button>
                  </div>

                  <div className="space-y-10 text-left">
                    <div className="flex items-center gap-8">
                      <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center shrink-0">
                        <Mail size={32} />
                      </div>
                      <div>
                        <div className="text-blue-300 text-sm font-bold uppercase tracking-wider mb-1">
                          Email Inquiry
                        </div>
                        <div className="text-2xl font-bold">
                          kahindienock83@gmail.com
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-8">
                      <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center shrink-0">
                        <Phone size={32} />
                      </div>
                      <div>
                        <div className="text-blue-300 text-sm font-bold uppercase tracking-wider mb-1">
                          Direct Line
                        </div>
                        <div className="text-2xl font-bold">+254 794606252</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-8">
                      <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center shrink-0">
                        <MapPin size={32} />
                      </div>
                      <div>
                        <div className="text-blue-300 text-sm font-bold uppercase tracking-wider mb-1">
                          Operations Base
                        </div>
                        <div className="text-2xl font-bold">
                          Nairobi, Kenya (00100)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[48px] p-12 shadow-2xl text-gray-800"
                >
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert(
                        "Your inquiry has been received! Our team will contact you shortly."
                      );
                    }}
                    className="space-y-6"
                  >
                    <h3 className="text-3xl font-black text-blue-900 mb-8">
                      Send Inquiry
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <input
                        placeholder="Full Name"
                        className="p-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <input
                        placeholder="Company"
                        className="p-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <textarea
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      required
                    ></textarea>
                    <button className="w-full bg-blue-600 text-white font-black py-6 rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-blue-600/30 text-xl">
                      <Send size={24} /> Submit Inquiry
                    </button>
                  </form>
                </motion.div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-zinc-950 text-white py-16 px-6">
              <div className="max-w-7xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <ShieldCheck className="text-orange-500" size={32} />
                  <span className="text-2xl font-bold">
                    Small Capital Aviation
                  </span>
                </div>
                <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                  Professional cargo operations and innovative aviation
                  solutions for global logistics.
                </p>
                <div className="border-t border-zinc-800 pt-8 mt-8">
                  <p className="text-zinc-500 text-sm">
                    &copy; {new Date().getFullYear()} Small Capital Aviation.
                    All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        )}
      </main>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}
