"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-zinc-950 text-white" : "bg-gray-50 text-gray-900"}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition">
            <ArrowLeft size={20} />
            Back to Aviation
          </Link>
          <h1 className="text-2xl font-bold">Enock Karisa Kahindi</h1>
          <div className="w-10" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-950 border-b border-gray-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-balance">
            Enock Karisa Kahindi
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Entry-Level Air Cargo, Customer Support & Data Entry Professional
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:enockkatore96@gmail.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow hover:bg-blue-700 transition font-bold"
            >
              Contact Me
            </a>
            <a
              href="#skills"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-zinc-900 transition font-bold"
            >
              View Skills
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-lg p-10 border border-gray-100 dark:border-zinc-800">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-8 text-lg">
            I am a motivated and detail-oriented individual with interests in air cargo operations,
            customer service, and data entry. I enjoy working with people, learning new skills,
            and delivering organized and accurate work. I am passionate about professionalism,
            teamwork, and continuous growth.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Customer Support",
            "Data Entry",
            "Typing Skills",
            "Microsoft Word & Excel",
            "Communication Skills",
            "Teamwork",
            "Cargo Documentation",
            "TACT Calculations",
            "Attention to Detail",
          ].map((skill, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-8 text-center font-semibold text-lg hover:shadow-lg hover:scale-105 transition border border-gray-100 dark:border-zinc-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-zinc-800 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">
              East African School of Aviation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
              Introductory in Air Cargo Management (2025 – 2026)
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-zinc-800 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">
              Segero Adventist High School
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
              2020 – 2024
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-zinc-800 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">
              Bamburi Great News Primary School
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
              2016 – 2020
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-lg p-10 border border-gray-100 dark:border-zinc-800">
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center shrink-0 font-bold text-lg">
              ✓
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              IATA Cargo Introductory Diploma
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl shadow-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            I am open to opportunities in customer service, logistics, air cargo, and data entry.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <a
              href="mailto:enockkatore96@gmail.com"
              className="bg-white/10 hover:bg-white/20 p-8 rounded-2xl transition backdrop-blur-sm"
            >
              <Mail size={32} className="mx-auto mb-4" />
              <p className="text-sm opacity-80 mb-2">Email</p>
              <p className="font-bold break-all">enockkatore96@gmail.com</p>
            </a>

            <a
              href="tel:+254794606252"
              className="bg-white/10 hover:bg-white/20 p-8 rounded-2xl transition backdrop-blur-sm"
            >
              <Phone size={32} className="mx-auto mb-4" />
              <p className="text-sm opacity-80 mb-2">Phone</p>
              <p className="font-bold">+254 794606252</p>
            </a>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <MapPin size={32} className="mx-auto mb-4" />
              <p className="text-sm opacity-80 mb-2">Location</p>
              <p className="font-bold">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-zinc-800 py-8 px-6 text-center text-gray-600 dark:text-gray-400">
        <p>Portfolio of Enock Karisa Kahindi © 2025</p>
      </footer>
    </div>
  );
}
