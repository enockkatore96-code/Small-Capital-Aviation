"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink, Award, Briefcase, Star } from "lucide-react";
import Image from "next/image";

export default function PortfolioPage() {
  const skills = [
    "Air Waybill (AWB / e-AWB) preparation",
    "Cargo acceptance procedures",
    "TACT chargeable weight calculations",
    "Basic knowledge of Dangerous Goods (IATA DGR)",
    "Documentation verification and compliance",
    "Data entry and Microsoft Excel",
    "Strong attention to detail and accuracy",
    "Communication and teamwork",
  ];

  const galleryImages = [
    { src: "/dhl-cargo-ops.jpg", alt: "DHL Cargo Operations" },
    { src: "/awb-documentation.jpg", alt: "Air Waybill Documentation" },
    { src: "/cargo-team.jpg", alt: "Cargo Team Working" },
    { src: "/weight-calculation.jpg", alt: "Weight Calculation" },
    { src: "/cargo-aircraft.jpg", alt: "Cargo Aircraft" },
    { src: "/cargo-warehouse.jpg", alt: "Cargo Warehouse" },
  ];

  const partners = [
    { name: "DHL Kenya", logo: "/dhl-logo.jpg" },
    { name: "Kenya Airways Cargo", logo: "/kenya-airways-cargo-logo.jpg" },
    { name: "Phoenix Airways", logo: "/phoenix-airways-logo.png" },
    { name: "AAA Logistics Kenya", logo: "/aaa-logistics-logo.jpg" },
  ];

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
      <div className="min-h-[calc(100vh-80px)] flex flex-col lg:flex-row">
        {/* Left Sidebar */}
        <aside className="w-full lg:w-80 bg-slate-800/50 border-b lg:border-b-0 lg:border-r border-yellow-600/20 p-8 lg:p-12 flex flex-col justify-between sticky top-20 h-auto lg:h-[calc(100vh-80px)]">
          <div>
            <h1 className="text-4xl lg:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
              Enock Karisa
            </h1>
            <h2 className="text-lg lg:text-xl text-gray-300 mb-8 font-light">
              Air Cargo Professional
            </h2>
            
            {/* Navigation Links */}
            <nav className="space-y-4">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Experience", href: "#experience" },
                { label: "Gallery", href: "#gallery" },
                { label: "Partners", href: "#partners" },
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
          <div className="space-y-6 pt-8 border-t border-yellow-600/20 mt-8 lg:mt-0">
            <a
              href="mailto:kahindienock83@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition group"
            >
              <Mail size={20} className="text-yellow-500 shrink-0" />
              <span className="text-sm">kahindienock83@gmail.com</span>
            </a>
            <a
              href="tel:+254794606252"
              className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition group"
            >
              <Phone size={20} className="text-yellow-500 shrink-0" />
              <span className="text-sm">+254 794 606 252</span>
            </a>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin size={20} className="text-yellow-500 shrink-0" />
              <span className="text-sm">Nairobi, Kenya</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 lg:px-12 py-12 overflow-y-auto">
          {/* About Section */}
          <section id="about" className="mb-20 max-w-4xl">
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
          <section id="skills" className="mb-20 max-w-4xl">
            <h3 className="text-3xl font-black text-yellow-400 mb-8 uppercase tracking-wider">Professional Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-yellow-600/10 to-transparent border border-yellow-600/30 rounded-lg p-4 hover:border-yellow-500 hover:from-yellow-600/20 transition flex items-start gap-3"
                >
                  <Star size={20} className="text-yellow-500 shrink-0 mt-1" />
                  <p className="font-semibold text-gray-100">{skill}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Timeline */}
          <section id="experience" className="mb-20 max-w-4xl">
            <h3 className="text-3xl font-black text-yellow-400 mb-8 uppercase tracking-wider">Professional Experience</h3>
            <div className="space-y-8">
              <div className="border-l-4 border-yellow-500 pl-6 relative">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-yellow-500 rounded-full"></div>
                <div className="flex items-start gap-3 mb-3">
                  <Briefcase size={24} className="text-yellow-400 shrink-0" />
                  <div>
                    <h4 className="text-2xl font-bold text-yellow-400">1 Year Training Experience</h4>
                    <p className="text-sm text-gray-400">DHL Express Kenya & Other Leading Cargo Companies</p>
                  </div>
                </div>
                <div className="text-gray-300 space-y-2 ml-0">
                  <p className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Practiced cargo acceptance procedures and documentation checks</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Prepared sample Air Waybills (AWB) with precision and accuracy</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Performed volumetric and chargeable weight calculations using TACT principles</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Gained understanding of IATA cargo regulations and international standards</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Worked with cross-functional teams in fast-paced logistics environment</span>
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 relative">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-yellow-500 rounded-full"></div>
                <h4 className="text-xl font-bold text-yellow-400 mb-1">IATA Cargo Introductory Diploma</h4>
                <p className="text-sm text-gray-400 mb-3">Certified in April 2026</p>
                <a
                  href="/certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition text-sm font-semibold"
                >
                  View Certificate <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="mb-20 max-w-4xl">
            <h3 className="text-3xl font-black text-yellow-400 mb-8 uppercase tracking-wider">Air Cargo & Logistics Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, idx) => (
                <div
                  key={idx}
                  className="relative h-56 rounded-lg overflow-hidden border border-yellow-600/30 hover:border-yellow-500 transition group cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-center justify-center">
                    <p className="text-white font-bold text-center opacity-0 group-hover:opacity-100 transition">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Partnership Section */}
          <section id="partners" className="mb-20 max-w-4xl">
            <h3 className="text-3xl font-black text-yellow-400 mb-8 uppercase tracking-wider">Industry Partnerships</h3>
            <p className="text-gray-300 mb-8">
              Experienced with leading air cargo and logistics companies operating in Kenya:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-yellow-600/10 to-transparent border border-yellow-600/30 rounded-lg p-6 hover:border-yellow-500 hover:from-yellow-600/20 transition flex flex-col items-center justify-center"
                >
                  <div className="relative w-24 h-24 mb-3">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-yellow-400 text-sm text-center">{partner.name}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-12 max-w-4xl">
            <div className="bg-gradient-to-r from-yellow-600/20 to-transparent border border-yellow-600/50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-black text-yellow-400 mb-4">Ready to Connect?</h3>
              <p className="text-gray-300 mb-6">
                I&apos;m open to opportunities in air cargo operations, logistics coordination, and customer-focused roles with leading organizations.
              </p>
              <a
                href="mailto:kahindienock83@gmail.com?subject=Let%27s%20Connect&body=Hi%20Enock%2C%20I%27d%20like%20to%20discuss%20opportunities%20with%20you."
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
