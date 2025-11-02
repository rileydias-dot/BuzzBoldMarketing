"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Shield,
  Zap,
  Home,
  Building2,
  Lightbulb,
  Menu,
  X,
  Award,
  AlertTriangle,
} from "lucide-react";

const BrightWaveElectrical = () => {
  const [activePage, setActivePage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      {/* Trust Bar */}
      <div className="bg-[#FFA700] text-[#1E1E1E] py-2">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold text-center flex items-center justify-center gap-2 flex-wrap">
            <Shield className="w-4 h-4" />
            <span>NICEIC Approved</span>
            <span className="hidden sm:inline">•</span>
            <span>Part P Certified</span>
            <span className="hidden sm:inline">•</span>
            <span>Fully Insured</span>
          </p>
        </div>
      </div>

      {/* Fixed Header */}
      <header className="bg-[#1E1E1E] border-b border-gray-800 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => {
                setActivePage("home");
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-[#FFA700] rounded-full flex items-center justify-center">
                <Zap className="w-7 h-7 text-[#1E1E1E]" />
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-black text-white">BrightWave</h1>
                <p className="text-xs text-[#FFA700]">Electrical Services</p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`px-5 py-2 rounded-lg font-semibold transition-all ${
                    activePage === item.id
                      ? "bg-[#FFA700] text-[#1E1E1E]"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <a
              href="tel:02012345678"
              className="hidden lg:flex items-center gap-2 px-6 py-3 bg-[#FFA700] text-[#1E1E1E] font-bold rounded-lg hover:bg-[#FF8C00] transition-all"
            >
              <Phone className="w-4 h-4" />
              020 1234 5678
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#FFA700] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-800">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                    activePage === item.id
                      ? "bg-[#FFA700] text-[#1E1E1E]"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="tel:02012345678"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 mt-2 bg-[#FFA700] text-[#1E1E1E] font-bold rounded-lg"
              >
                <Phone className="w-4 h-4" />
                020 1234 5678
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Page Content */}
      <main>
        {/* HOME PAGE */}
        {activePage === "home" && (
          <>
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(#FFA700_1px,transparent_1px),linear-gradient(90deg,#FFA700_1px,transparent_1px)] bg-[size:50px_50px]" />
              </div>

              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                    Safe, Certified Electrical Work{" "}
                    <span className="text-[#FFA700]">You Can Trust</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-400 mb-8">
                    Professional electricians serving homes and businesses across London
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <button
                      onClick={() => setActivePage("contact")}
                      className="px-10 py-5 bg-[#FFA700] text-[#1E1E1E] font-black text-lg rounded-lg hover:bg-[#FF8C00] transition-all inline-flex items-center justify-center gap-2"
                    >
                      Get Free Quote
                      <Zap className="w-5 h-5" />
                    </button>
                    <a
                      href="tel:02012345678"
                      className="px-10 py-5 bg-white/10 text-white font-bold text-lg rounded-lg border-2 border-white/20 hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Call: 020 1234 5678
                    </a>
                  </div>

                  {/* Trust Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex items-center justify-center gap-3">
                      <Shield className="w-6 h-6 text-[#FFA700]" />
                      <div className="text-left">
                        <p className="font-bold">24/7 Emergency</p>
                        <p className="text-sm text-gray-400">Always Available</p>
                      </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex items-center justify-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#FFA700]" />
                      <div className="text-left">
                        <p className="font-bold">Fixed Pricing</p>
                        <p className="text-sm text-gray-400">No Hidden Costs</p>
                      </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex items-center justify-center gap-3">
                      <Award className="w-6 h-6 text-[#FFA700]" />
                      <div className="text-left">
                        <p className="font-bold">2-Year Guarantee</p>
                        <p className="text-sm text-gray-400">All Work Covered</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Services Preview */}
            <section className="py-16 bg-black/30">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
                  Our Core <span className="text-[#FFA700]">Electrical Services</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: <Zap className="w-8 h-8" />,
                      title: "Wiring Upgrades",
                      desc: "Full & partial rewiring",
                    },
                    {
                      icon: <Shield className="w-8 h-8" />,
                      title: "Fuse Box Safety",
                      desc: "Consumer unit replacement",
                    },
                    {
                      icon: <Lightbulb className="w-8 h-8" />,
                      title: "Smart Home Install",
                      desc: "Modern lighting control",
                    },
                    {
                      icon: <AlertTriangle className="w-8 h-8" />,
                      title: "Emergency Call-out",
                      desc: "24/7 urgent repairs",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="bg-[#2A2A2A] border border-gray-800 rounded-lg p-6 hover:border-[#FFA700] transition-all"
                    >
                      <div className="text-[#FFA700] mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm">{service.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <button
                    onClick={() => setActivePage("services")}
                    className="text-[#FFA700] font-bold hover:underline"
                  >
                    View All Services →
                  </button>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
                  Why Choose <span className="text-[#FFA700]">BrightWave?</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {[
                    {
                      title: "Fully Certified Team",
                      desc: "All engineers are NICEIC approved, Part P certified, and fully insured for your peace of mind.",
                    },
                    {
                      title: "Transparent Fixed Pricing",
                      desc: "Get a clear quote upfront. No hidden charges, no surprises. What we quote is what you pay.",
                    },
                    {
                      title: "2-Year Workmanship Guarantee",
                      desc: "We stand behind our work. Every installation comes with a full 2-year guarantee.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#2A2A2A] border border-gray-800 rounded-lg p-8"
                    >
                      <h3 className="text-xl font-bold mb-4 text-[#FFA700]">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* SERVICES PAGE */}
        {activePage === "services" && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black mb-6">
                  Our <span className="text-[#FFA700]">Electrical Services</span>
                </h1>
                <p className="text-xl text-gray-400">
                  From routine installations to urgent repairs, we cover all your electrical needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Service 1 */}
                <div className="bg-[#2A2A2A] border border-gray-800 rounded-lg p-8">
                  <div className="w-16 h-16 bg-[#FFA700] rounded-lg flex items-center justify-center mb-6">
                    <Home className="w-8 h-8 text-[#1E1E1E]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Wiring Upgrades & Rewiring</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Outdated wiring can be unsafe and inefficient. We provide full or partial rewiring services for homes and businesses.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Full house rewiring to current standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Additional sockets and circuits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Cable upgrades for high-demand appliances</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Certified to 18th Edition Wiring Regulations</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => setActivePage("contact")}
                    className="w-full py-3 bg-[#FFA700] text-[#1E1E1E] font-bold rounded-lg hover:bg-[#FF8C00] transition-all"
                  >
                    Get Quote for Rewiring
                  </button>
                </div>

                {/* Service 2 */}
                <div className="bg-[#2A2A2A] border border-gray-800 rounded-lg p-8">
                  <div className="w-16 h-16 bg-[#FFA700] rounded-lg flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-[#1E1E1E]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Fuse Box & Consumer Unit Safety</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Modern consumer units protect your home from electrical faults. We install and upgrade to the latest safety standards.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Replace old fuse boxes with RCD protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Consumer unit upgrades for safety compliance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Circuit additions and modifications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Full testing and certification included</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => setActivePage("contact")}
                    className="w-full py-3 bg-[#FFA700] text-[#1E1E1E] font-bold rounded-lg hover:bg-[#FF8C00] transition-all"
                  >
                    Get Quote for Fuse Box
                  </button>
                </div>

                {/* Service 3 */}
                <div className="bg-[#2A2A2A] border border-gray-800 rounded-lg p-8">
                  <div className="w-16 h-16 bg-[#FFA700] rounded-lg flex items-center justify-center mb-6">
                    <Lightbulb className="w-8 h-8 text-[#1E1E1E]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Smart Home Installation</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Upgrade your home with smart lighting, thermostats, and electrical controls for modern living.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Smart lighting systems (Philips Hue, LIFX)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Programmable thermostats and heating control</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">EV charging point installation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Home automation and control systems</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => setActivePage("contact")}
                    className="w-full py-3 bg-[#FFA700] text-[#1E1E1E] font-bold rounded-lg hover:bg-[#FF8C00] transition-all"
                  >
                    Get Quote for Smart Home
                  </button>
                </div>

                {/* Service 4 */}
                <div className="bg-[#2A2A2A] border border-gray-800 rounded-lg p-8">
                  <div className="w-16 h-16 bg-[#FFA700] rounded-lg flex items-center justify-center mb-6">
                    <AlertTriangle className="w-8 h-8 text-[#1E1E1E]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">24/7 Emergency Call-out</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Electrical emergencies don't wait. We're available 24/7 for urgent repairs and safety issues.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Power outages and trip switch problems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Dangerous sparks or burning smells</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Fault finding and emergency diagnostics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Rapid response across London</span>
                    </li>
                  </ul>
                  <a
                    href="tel:02012345678"
                    className="block w-full py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all text-center"
                  >
                    Emergency: 020 1234 5678
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ABOUT PAGE */}
        {activePage === "about" && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black mb-6 text-center">
                  About <span className="text-[#FFA700]">BrightWave Electrical</span>
                </h1>
                <p className="text-xl text-gray-400 text-center mb-16">
                  Professional electrical services you can trust
                </p>

                {/* Company Story */}
                <div className="bg-[#2A2A2A] border border-gray-800 rounded-lg p-8 mb-12">
                  <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    BrightWave Electrical is a London-based electrical contractor specialising in residential and commercial electrical work. With over 15 years of combined experience, our team of certified electricians delivers safe, reliable electrical services across the city.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    We pride ourselves on clear communication, transparent pricing, and work that meets all current UK wiring regulations. Whether you need an urgent repair, a full rewire, or a modern smart home installation, we're here to help.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Every job is completed to the highest standards, fully tested, and certified. We're not satisfied until you're completely happy with the work.
                  </p>
                </div>

                {/* Qualifications */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    Qualifications & Certifications
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        title: "NICEIC Approved",
                        desc: "Registered contractor",
                      },
                      {
                        title: "Part P Certified",
                        desc: "Building Regulations compliance",
                      },
                      {
                        title: "City & Guilds",
                        desc: "Level 3 qualifications",
                      },
                      {
                        title: "18th Edition",
                        desc: "Latest wiring regulations",
                      },
                    ].map((cert, index) => (
                      <div
                        key={index}
                        className="bg-[#2A2A2A] border border-gray-800 rounded-lg p-6 text-center"
                      >
                        <Shield className="w-12 h-12 text-[#FFA700] mx-auto mb-4" />
                        <h3 className="font-bold mb-2">{cert.title}</h3>
                        <p className="text-sm text-gray-400">{cert.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Insurance & Guarantees */}
                <div className="bg-[#2A2A2A] border border-gray-800 rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Insurance & Guarantees</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-[#FFA700] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">£5 Million Public Liability Insurance</h3>
                        <p className="text-gray-400">
                          Full insurance cover for all work carried out on your property.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Award className="w-6 h-6 text-[#FFA700] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">2-Year Workmanship Guarantee</h3>
                        <p className="text-gray-400">
                          We stand behind our work with a comprehensive 2-year guarantee on all installations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-[#FFA700] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Fully Certified Work</h3>
                        <p className="text-gray-400">
                          All work is tested, certified, and compliant with current regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* PROJECTS PAGE */}
        {activePage === "projects" && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black mb-6">
                  Recent <span className="text-[#FFA700]">Projects</span>
                </h1>
                <p className="text-xl text-gray-400">
                  See some of our completed electrical work across London
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Project 1 */}
                <div className="bg-[#2A2A2A] border border-gray-800 rounded-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-[#FFA700] to-[#FF8C00] flex items-center justify-center">
                    <Building2 className="w-24 h-24 text-white opacity-50" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      Commercial Office Rewire - Shoreditch
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Complete electrical rewire for a 3-storey office building including new consumer units, LED lighting throughout, and data cabling infrastructure.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#FFA700]/20 text-[#FFA700] rounded-full text-sm font-semibold">
                        Commercial
                      </span>
                      <span className="px-3 py-1 bg-[#FFA700]/20 text-[#FFA700] rounded-full text-sm font-semibold">
                        Rewiring
                      </span>
                      <span className="px-3 py-1 bg-[#FFA700]/20 text-[#FFA700] rounded-full text-sm font-semibold">
                        LED Lighting
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="bg-[#2A2A2A] border border-gray-800 rounded-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center">
                    <Home className="w-24 h-24 text-white opacity-50" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      Smart Home Installation - Hampstead
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Full smart home setup including Philips Hue lighting system, smart thermostats, EV charging point, and home automation control panels.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#FFA700]/20 text-[#FFA700] rounded-full text-sm font-semibold">
                        Residential
                      </span>
                      <span className="px-3 py-1 bg-[#FFA700]/20 text-[#FFA700] rounded-full text-sm font-semibold">
                        Smart Home
                      </span>
                      <span className="px-3 py-1 bg-[#FFA700]/20 text-[#FFA700] rounded-full text-sm font-semibold">
                        EV Charging
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="bg-[#2A2A2A] border border-gray-800 rounded-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-[#FFA700] to-[#FF6B00] flex items-center justify-center">
                    <Shield className="w-24 h-24 text-white opacity-50" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      Consumer Unit Upgrade - Islington
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Replaced outdated fuse box with modern consumer unit featuring RCD protection, additional circuits for kitchen appliances, and full EICR certification.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#FFA700]/20 text-[#FFA700] rounded-full text-sm font-semibold">
                        Residential
                      </span>
                      <span className="px-3 py-1 bg-[#FFA700]/20 text-[#FFA700] rounded-full text-sm font-semibold">
                        Fuse Box
                      </span>
                      <span className="px-3 py-1 bg-[#FFA700]/20 text-[#FFA700] rounded-full text-sm font-semibold">
                        Safety
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="bg-[#2A2A2A] border border-gray-800 rounded-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                    <AlertTriangle className="w-24 h-24 text-white opacity-50" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      Emergency Fault Repair - Camden
                    </h3>
                    <p className="text-gray-400 mb-4">
                      24-hour emergency callout for power loss. Diagnosed faulty circuit breaker, replaced consumer unit components, and restored power within 3 hours.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#FFA700]/20 text-[#FFA700] rounded-full text-sm font-semibold">
                        Emergency
                      </span>
                      <span className="px-3 py-1 bg-[#FFA700]/20 text-[#FFA700] rounded-full text-sm font-semibold">
                        Fault Finding
                      </span>
                      <span className="px-3 py-1 bg-[#FFA700]/20 text-[#FFA700] rounded-full text-sm font-semibold">
                        Repair
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CONTACT PAGE */}
        {activePage === "contact" && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black mb-6">
                  Get Your <span className="text-[#FFA700]">Free Quote</span>
                </h1>
                <p className="text-xl text-gray-400">
                  Fill out the form below or call us directly for immediate assistance
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <div className="bg-[#2A2A2A] border border-gray-800 rounded-lg p-8">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-[#1E1E1E] border border-gray-700 rounded-lg focus:outline-none focus:border-[#FFA700] text-white"
                            placeholder="John Smith"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            className="w-full px-4 py-3 bg-[#1E1E1E] border border-gray-700 rounded-lg focus:outline-none focus:border-[#FFA700] text-white"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 bg-[#1E1E1E] border border-gray-700 rounded-lg focus:outline-none focus:border-[#FFA700] text-white"
                            placeholder="020 1234 5678"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Postcode *
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-[#1E1E1E] border border-gray-700 rounded-lg focus:outline-none focus:border-[#FFA700] text-white"
                            placeholder="SW1A 1AA"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Service Required *
                        </label>
                        <select
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-gray-700 rounded-lg focus:outline-none focus:border-[#FFA700] text-white"
                          required
                        >
                          <option value="">Select a service...</option>
                          <option value="rewiring">Wiring Upgrades & Rewiring</option>
                          <option value="fusebox">Fuse Box / Consumer Unit</option>
                          <option value="smart">Smart Home Installation</option>
                          <option value="emergency">Emergency Repair</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Tell us about your project
                        </label>
                        <textarea
                          rows={6}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-gray-700 rounded-lg focus:outline-none focus:border-[#FFA700] text-white"
                          placeholder="Please describe what electrical work you need..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-[#FFA700] text-[#1E1E1E] font-black text-lg rounded-lg hover:bg-[#FF8C00] transition-all"
                      >
                        Request Free Quote
                      </button>
                    </form>
                  </div>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-6">
                  {/* Emergency Line */}
                  <div className="bg-red-600/20 border-2 border-red-600 rounded-lg p-6">
                    <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">24/7 Emergency Line</h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      For urgent electrical problems
                    </p>
                    <a
                      href="tel:02012345678"
                      className="block w-full py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all text-center"
                    >
                      020 1234 5678
                    </a>
                  </div>

                  {/* Call Us */}
                  <div className="bg-[#2A2A2A] border border-gray-800 rounded-lg p-6">
                    <Phone className="w-8 h-8 text-[#FFA700] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Call Us Directly</h3>
                    <p className="text-gray-400 mb-4 text-sm">
                      Speak to our team for advice
                    </p>
                    <a
                      href="tel:02012345678"
                      className="text-[#FFA700] font-bold hover:underline"
                    >
                      020 1234 5678
                    </a>
                  </div>

                  {/* Email */}
                  <div className="bg-[#2A2A2A] border border-gray-800 rounded-lg p-6">
                    <Mail className="w-8 h-8 text-[#FFA700] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Email Us Anytime</h3>
                    <p className="text-gray-400 mb-4 text-sm">
                      We'll respond within 2 hours
                    </p>
                    <a
                      href="mailto:info@brightwave-electrical.co.uk"
                      className="text-[#FFA700] font-bold hover:underline break-all"
                    >
                      info@brightwave-electrical.co.uk
                    </a>
                  </div>

                  {/* Office Hours */}
                  <div className="bg-[#2A2A2A] border border-gray-800 rounded-lg p-6">
                    <Clock className="w-8 h-8 text-[#FFA700] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                    <div className="space-y-2 text-sm">
                      <p className="flex justify-between">
                        <span className="text-gray-400">Monday - Friday:</span>
                        <span className="font-semibold">7am - 7pm</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-400">Saturday:</span>
                        <span className="font-semibold">8am - 4pm</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-400">Sunday:</span>
                        <span className="font-semibold">Emergencies Only</span>
                      </p>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="bg-[#2A2A2A] border border-gray-800 rounded-lg p-6">
                    <MapPin className="w-8 h-8 text-[#FFA700] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Service Area</h3>
                    <p className="text-gray-400 text-sm">
                      Covering all of Greater London and surrounding areas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* BuzzBold Marketing CTA Section */}
      <section className="border-t border-gray-800 bg-gradient-to-r from-orange-600/10 via-red-600/10 to-pink-600/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            This is an example of what{" "}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              we can build for you
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional, conversion-focused websites for UK tradesmen and local businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02012345678"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call: 020 1234 5678
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Get Your Free Website Audit
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <a
            href="/"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 mb-4"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to BuzzBold Marketing Homepage
          </a>
          <p className="text-sm text-gray-500">
            Example website design © 2024 BuzzBold Marketing
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BrightWaveElectrical;
