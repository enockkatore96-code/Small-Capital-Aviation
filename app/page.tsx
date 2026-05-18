"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, ChevronRight, FileText, Menu, X } from "lucide-react";

export default function Home() {
  const [showCertificate, setShowCertificate] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Header with Logo */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-amber-600/30">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Small Capital Aviation" className="h-16 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#mission" className="text-amber-400 hover:text-amber-300 transition text-sm font-semibold">Mission</a>
            <a href="#services" className="text-amber-400 hover:text-amber-300 transition text-sm font-semibold">Services</a>
            <a href="#leadership" className="text-amber-400 hover:text-amber-300 transition text-sm font-semibold">Leadership</a>
            <a href="#contact" className="text-amber-400 hover:text-amber-300 transition text-sm font-semibold">Contact</a>
            <Link href="/portfolio" className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-lg transition font-semibold text-sm">
              Portfolio
            </Link>
          </nav>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-amber-600/30 px-6 py-4 flex flex-col gap-4">
            <a href="#mission" className="text-amber-400">Mission</a>
            <a href="#services" className="text-amber-400">Services</a>
            <a href="#leadership" className="text-amber-400">Leadership</a>
            <a href="#contact" className="text-amber-400">Contact</a>
            <Link href="/portfolio" className="bg-amber-600 px-4 py-2 rounded-lg text-center">Portfolio</Link>
          </div>
        )}
      </header>

      {/* Hero Section with Large Logo and Air Cargo Images */}
      <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* Large Logo and Motto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <img 
              src="/logo.png" 
              alt="Small Capital Aviation" 
              className="h-48 w-auto mx-auto mb-8 drop-shadow-2xl"
            />
            <h1 className="text-6xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              Delivering Beyond Horizons
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
              Excellence in Global Air Cargo & Logistics
            </p>
            <a href="#mission" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 px-10 py-4 rounded-xl font-bold text-lg transition">
              Explore Our Services <ChevronRight size={24} />
            </a>
          </motion.div>

          {/* Air Cargo Images Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {/* Large Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:row-span-2"
            >
              <img 
                src="/cargo-plane-flight.jpg" 
                alt="Cargo Plane in Flight"
                className="w-full h-96 md:h-full object-cover rounded-2xl shadow-2xl border-2 border-amber-600/50"
              />
            </motion.div>

            {/* Grid Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <img 
                src="/cargo-aircraft.jpg" 
                alt="Cargo Aircraft Loading"
                className="w-full h-44 object-cover rounded-2xl shadow-xl border-2 border-amber-600/50"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src="/cargo-warehouse.jpg" 
                alt="Cargo Warehouse"
                className="w-full h-44 object-cover rounded-2xl shadow-xl border-2 border-amber-600/50"
              />
            </motion.div>
          </div>

          {/* Additional Large Cargo Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6"
          >
            <img 
              src="/cargo-airport.jpg" 
              alt="Airport Tarmac Operations"
              className="w-full h-64 object-cover rounded-2xl shadow-2xl border-2 border-amber-600/50"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 px-6 bg-slate-800/50 border-y border-amber-600/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-amber-400 mb-8 text-center">Our Mission</h2>
            <p className="text-xl text-slate-200 text-center leading-relaxed mb-8">
              To simplify global cargo movement by delivering fast, secure, and dependable air freight solutions while maintaining the highest standards of safety, efficiency, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-amber-400 mb-16 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Air Cargo", desc: "Fast & secure international freight solutions with real-time tracking", icon: "✈️" },
              { title: "Ground Handling", desc: "Professional cargo management, loading, and tarmac operations", icon: "📦" },
              { title: "Logistics", desc: "End-to-end supply chain management and freight forwarding", icon: "🚚" },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800 border border-amber-600/30 p-8 rounded-2xl hover:border-amber-500/60 transition hover:bg-slate-700/50"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-amber-400 mb-3">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 px-6 bg-slate-800/50 border-y border-amber-600/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-amber-400 mb-16 text-center">Leadership</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <img
              src="/ceo.jpg"
              alt="Enock Karisa Kahindi - CEO"
              className="w-80 h-80 rounded-2xl mx-auto mb-8 object-cover border-4 border-amber-600 shadow-2xl"
            />
            <h3 className="text-3xl font-bold text-amber-400 mb-2">Enock Karisa Kahindi</h3>
            <p className="text-xl text-slate-300 mb-8 font-light">Founder & CEO</p>
            
            {/* Certificate Display */}
            <motion.button
              onClick={() => setShowCertificate(!showCertificate)}
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-xl font-semibold transition"
            >
              <FileText size={20} /> View IATA Certification
            </motion.button>

            {showCertificate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 bg-slate-900 p-8 rounded-2xl border border-amber-600/30"
              >
                <iframe
                  src="/certificate.pdf"
                  className="w-full h-96 rounded-lg"
                  title="IATA Certification"
                />
                <p className="text-slate-300 mt-4 text-center">IATA Cargo Introductory Diploma - Issued April 2, 2026</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-amber-400 mb-16 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <motion.a
              href="tel:+254794606252"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-amber-600/30 p-8 rounded-2xl hover:border-amber-500/60 transition text-center hover:bg-slate-700/80"
            >
              <Phone className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-400 mb-2">Call Us</h3>
              <p className="text-slate-300 font-semibold">+254 794 606 252</p>
              <p className="text-sm text-slate-400 mt-2">Tap to call or text</p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:kahindienock83@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800 border border-amber-600/30 p-8 rounded-2xl hover:border-amber-500/60 transition text-center hover:bg-slate-700/80"
            >
              <Mail className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-400 mb-2">Email</h3>
              <p className="text-slate-300 font-semibold">kahindienock83@gmail.com</p>
              <p className="text-sm text-slate-400 mt-2">Send us a message</p>
            </motion.a>

            {/* Location */}
            <motion.a
              href="https://www.google.com/maps/search/nairobi+kenya"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800 border border-amber-600/30 p-8 rounded-2xl hover:border-amber-500/60 transition text-center hover:bg-slate-700/80"
            >
              <MapPin className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-400 mb-2">Location</h3>
              <p className="text-slate-300 font-semibold">Nairobi, Kenya</p>
              <p className="text-sm text-slate-400 mt-2">View on Google Maps</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-amber-600/20 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2026 Small Capital Aviation. All rights reserved.</p>
          <p className="mt-2 text-sm text-amber-600">Delivering Beyond Horizons</p>
        </div>
      </footer>
    </div>
  );
}
