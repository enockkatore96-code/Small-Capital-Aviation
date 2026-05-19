"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink, Award, Trophy } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-yellow-600/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition font-bold">
            ← Back to Small Capital Aviation
          </Link>
        </div>
      </header>

      {/* Hero Section - Left Sidebar + Main Content */}
      <div className="min-h-[calc(100vh-80px)] flex">
        {/* Left Sidebar */}
        <aside className="w-80 bg-slate-800/50 border-r border-yellow-600/20 p-12 flex flex-col justify-between sticky top-20 h-[calc(100vh-80px)]">
          <div>
            <h1 className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
              Enock Karisa
            </h1>
            <h2 className="text-xl text-gray-300 mb-8 font-light">
              Air Cargo Professional
            </h2>
            
            {/* Navigation Links */}
            <nav className="space-y-4">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Experience", href: "#experience" },
                { label: "Certifications", href: "#certifications" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-yellow-400 transition block text-sm font-semibold uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 pt-8 border-t border-yellow-600/20">
            <a
              href="mailto:enockkatore96@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition group"
            >
              <Mail size={20} className="text-yellow-500" />
              <span className="text-sm">enockkatore96@gmail.com</span>
            </a>
            <a
              href="tel:+254794606252"
              className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition group"
            >
              <Phone size={20} className="text-yellow-500" />
              <span className="text-sm">+254 794 606 252</span>
            </a>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin size={20} className="text-yellow-500" />
              <span className="text-sm">Nairobi, Kenya</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-12 py-12 overflow-y-auto">
          {/* About Section */}
          <section id="about" className="mb-20 max-w-3xl">
            <div className="mb-12">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am a motivated and detail-oriented air cargo professional with a passion for excellence in logistics and customer service. With certification in IATA cargo management and hands-on experience in cargo operations, I bring precision, reliability, and dedication to every task.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Currently pursuing opportunities to leverage my expertise in air freight operations, while continuously developing my skills in logistics coordination and customer relationship management.
              </p>
            </div>
          </section>

          {/* Skills Grid */}
          <section id="skills" className="mb-20 max-w-3xl">
            <h3 className="text-2xl font-black text-yellow-400 mb-8 uppercase tracking-wider">Professional Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Air Cargo Operations",
                "Cargo Documentation",
                "Customer Support",
                "Data Entry",
                "TACT Calculations",
                "Microsoft Office Suite",
                "Communication",
                "Attention to Detail",
                "Teamwork",
                "Problem Solving",
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-yellow-600/10 to-transparent border border-yellow-600/30 rounded-lg p-4 hover:border-yellow-500 hover:from-yellow-600/20 transition"
                >
                  <p className="font-semibold text-gray-100">{skill}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Timeline */}
          <section id="experience" className="mb-20 max-w-3xl">
            <h3 className="text-2xl font-black text-yellow-400 mb-8 uppercase tracking-wider">Experience</h3>
            <div className="space-y-8">
              {[
                {
                  title: "Air Cargo Operations",
                  period: "2020 – 2024",
                  description: "Specialized in cargo handling, documentation, and customer communication.",
                },
                {
                  title: "Customer Support Specialist",
                  period: "2016 – 2020",
                  description: "Provided professional client support and managed inquiries efficiently.",
                },
                {
                  title: "Data Entry & Admin",
                  period: "2015 – Present",
                  description: "Maintained accurate records and database management with high precision.",
                },
              ].map((exp, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-yellow-500 pl-6 relative"
                >
                  <div className="absolute -left-[13px] top-0 w-6 h-6 bg-yellow-500 rounded-full"></div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-1">{exp.title}</h4>
                  <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="mb-20 max-w-3xl">
            <h3 className="text-2xl font-black text-yellow-400 mb-8 uppercase tracking-wider">Certifications</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-yellow-600/10 to-transparent border border-yellow-600/30 rounded-lg p-6 hover:border-yellow-500 transition">
                <div className="flex items-start gap-4">
                  <Certificate size={28} className="text-yellow-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-yellow-400 mb-2">IATA Cargo Introductory Diploma</h4>
                    <p className="text-gray-300 mb-3">Issued: April 2, 2026</p>
                    <a
                      href="/certificate.pdf"
                      className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition text-sm font-semibold"
                    >
                      View Certificate <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-600/10 to-transparent border border-yellow-600/30 rounded-lg p-6 hover:border-yellow-500 transition">
                <div className="flex items-start gap-4">
                  <Award size={28} className="text-yellow-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-yellow-400 mb-2">Professional Air Cargo Operations</h4>
                    <p className="text-gray-300">Comprehensive training in international air freight logistics</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-12 max-w-3xl">
            <div className="bg-gradient-to-r from-yellow-600/20 to-transparent border border-yellow-600/50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-black text-yellow-400 mb-4">Ready to Connect?</h3>
              <p className="text-gray-300 mb-6">
                I&apos;m open to opportunities in air cargo, logistics, and customer-focused roles.
              </p>
              <a
                href="mailto:enockkatore96@gmail.com"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-8 py-3 rounded-lg transition"
              >
                Get In Touch
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-yellow-600/20 bg-slate-900/50 py-8 px-6 text-center text-gray-500">
        <p>Portfolio of Enock Karisa Kahindi © 2025 | Air Cargo Professional</p>
      </footer>
    </div>
  );
}
