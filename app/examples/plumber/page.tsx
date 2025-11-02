"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, Shield, Wrench, Home as HomeIcon, Droplet, Menu, X } from "lucide-react";
import Link from "next/link";

const FlowPrimePlumbing = () => {
  const [activePage, setActivePage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About Us", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header explaining this is an example */}
      <div className="bg-gradient-to-r from-orange-600/20 via-red-600/20 to-pink-600/20 border-b border-orange-200 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-black mb-3 text-gray-900">
            This is an example of what we can build for you
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            FlowPrime Plumbing – A complete website example for plumbing businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:02012345678"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0057B8] text-white font-bold text-sm hover:bg-[#004494] transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call BuzzBold: 020 1234 5678
            </a>
            <button
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white font-bold text-sm hover:shadow-lg transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Get Your Free Website Audit
            </button>
          </div>
        </div>
      </div>

      {/* FlowPrime Header & Navigation */}
      <header className="bg-[#0057B8] text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Droplet className="w-7 h-7 text-[#0057B8]" />
              </div>
              <div>
                <h1 className="text-2xl font-black">FlowPrime</h1>
                <p className="text-xs text-blue-200">Plumbing Services</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm font-semibold hover:text-[#00A1FF] transition-colors ${
                    activePage === item.id ? "text-[#00A1FF]" : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop CTA */}
            <a
              href="tel:08001234567"
              className="hidden lg:flex items-center gap-2 px-5 py-2 bg-[#00A1FF] text-white font-bold rounded-lg hover:bg-white hover:text-[#0057B8] transition-all"
            >
              <Phone className="w-4 h-4" />
              0800 123 4567
            </a>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-blue-600 pt-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-4 hover:bg-blue-600 rounded ${
                    activePage === item.id ? "bg-blue-600" : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Trust Badge */}
      <div className="bg-blue-50 border-b border-blue-100 py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-700 flex items-center justify-center gap-2 flex-wrap">
            <Shield className="w-4 h-4 text-[#0057B8]" />
            <span className="font-semibold">Trusted in London</span>
            <span className="hidden sm:inline">•</span>
            <span>Fully Insured</span>
            <span className="hidden sm:inline">•</span>
            <span>Gas Safe Registered</span>
          </p>
        </div>
      </div>

      {/* Page Content */}
      <main>
        {/* HOME PAGE */}
        {activePage === "home" && (
          <>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#0057B8] to-[#004494] text-white py-20">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl font-black mb-6">
                    Reliable Plumbing. Local Experts. 24/7 Response.
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-100 mb-8">
                    Fast, professional plumbing services across London and surrounding areas
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setActivePage("contact")}
                      className="px-8 py-4 bg-[#00A1FF] text-white font-bold text-lg rounded-lg hover:bg-white hover:text-[#0057B8] transition-all duration-300"
                    >
                      Book Your Free Quote
                    </button>
                    <a
                      href="tel:08001234567"
                      className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-[#0057B8] transition-all duration-300"
                    >
                      Call Us Today
                    </a>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <CheckCircle className="w-10 h-10 text-[#00A1FF] mx-auto mb-3" />
                      <h3 className="font-bold text-lg mb-2">24/7 Emergency</h3>
                      <p className="text-blue-100 text-sm">Always available when you need us</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <CheckCircle className="w-10 h-10 text-[#00A1FF] mx-auto mb-3" />
                      <h3 className="font-bold text-lg mb-2">Fixed Pricing</h3>
                      <p className="text-blue-100 text-sm">No hidden fees, transparent quotes</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <CheckCircle className="w-10 h-10 text-[#00A1FF] mx-auto mb-3" />
                      <h3 className="font-bold text-lg mb-2">12-Month Warranty</h3>
                      <p className="text-blue-100 text-sm">All work fully guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Services Overview */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
                  Our Plumbing Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    "Emergency Plumbing",
                    "Leak Repair",
                    "Bathroom Installations",
                    "Pipe Replacement",
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                    >
                      <Wrench className="w-10 h-10 text-[#0057B8] mb-4" />
                      <h3 className="font-bold text-lg mb-2">{service}</h3>
                      <button
                        onClick={() => setActivePage("services")}
                        className="text-[#0057B8] font-semibold text-sm hover:text-[#00A1FF]"
                      >
                        Learn more →
                      </button>
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
              <h1 className="text-4xl md:text-5xl font-black text-center mb-6">
                Professional Plumbing Services
              </h1>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                From emergency repairs to full bathroom installations, we handle all your plumbing needs
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Service 1 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-[#0057B8] to-[#00A1FF] flex items-center justify-center">
                    <Wrench className="w-20 h-20 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">Emergency Plumbing</h3>
                    <p className="text-gray-600 mb-4">
                      Burst pipes, blocked drains, or heating failures? We respond fast, 24/7. Our emergency team arrives within 60 minutes across London with fully stocked vans ready to fix your problem.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">60-minute response time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Available 24/7, 365 days a year</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Fixed pricing, no call-out charges</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setActivePage("contact")}
                      className="w-full px-6 py-3 bg-[#0057B8] text-white font-bold rounded-lg hover:bg-[#00A1FF] transition-all"
                    >
                      Schedule Service
                    </button>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-[#0057B8] to-[#00A1FF] flex items-center justify-center">
                    <Droplet className="w-20 h-20 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">Leak Repair</h3>
                    <p className="text-gray-600 mb-4">
                      Leaking tap, radiator, or hidden pipe leak causing damage? We use advanced leak detection technology to find and fix leaks quickly, preventing water damage and high bills.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Advanced leak detection equipment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Permanent fixes, not temporary patches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Insurance claim support provided</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setActivePage("contact")}
                      className="w-full px-6 py-3 bg-[#0057B8] text-white font-bold rounded-lg hover:bg-[#00A1FF] transition-all"
                    >
                      Schedule Service
                    </button>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-[#0057B8] to-[#00A1FF] flex items-center justify-center">
                    <HomeIcon className="w-20 h-20 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">Bathroom Installations</h3>
                    <p className="text-gray-600 mb-4">
                      Complete bathroom design and installation from concept to completion. We manage the entire project: tiling, plumbing, electrics, and finishing touches for your perfect bathroom.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Free design consultation included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Project management from start to finish</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">5-year guarantee on installations</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setActivePage("contact")}
                      className="w-full px-6 py-3 bg-[#0057B8] text-white font-bold rounded-lg hover:bg-[#00A1FF] transition-all"
                    >
                      Schedule Service
                    </button>
                  </div>
                </div>

                {/* Service 4 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-[#0057B8] to-[#00A1FF] flex items-center justify-center">
                    <Wrench className="w-20 h-20 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">Pipe Replacement</h3>
                    <p className="text-gray-600 mb-4">
                      Old, corroded pipes causing problems? We replace damaged pipework with modern, durable materials. Minimal disruption, maximum reliability for your home's water supply.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Modern copper or plastic piping</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Pressure testing to building regs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Minimal disruption to your home</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setActivePage("contact")}
                      className="w-full px-6 py-3 bg-[#0057B8] text-white font-bold rounded-lg hover:bg-[#00A1FF] transition-all"
                    >
                      Schedule Service
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-16 text-center bg-blue-50 rounded-xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold mb-4">Not sure which service you need?</h3>
                <p className="text-gray-600 mb-6">
                  Call us for a free consultation and we'll diagnose your plumbing issue
                </p>
                <a
                  href="tel:08001234567"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0057B8] text-white font-bold rounded-lg hover:bg-[#00A1FF] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Us: 0800 123 4567
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ABOUT US PAGE */}
        {activePage === "about" && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-6">
                About FlowPrime Plumbing
              </h1>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Your trusted local plumbing experts serving London and surrounding areas since 2010
              </p>

              <div className="max-w-4xl mx-auto">
                {/* Story Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
                  <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    FlowPrime Plumbing was founded on a simple principle: provide honest, reliable plumbing services at fair prices. We're a family-run business based in London, and we treat every home like it's our own.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our team of Gas Safe registered engineers has over 50 years of combined experience. We handle everything from emergency call-outs to complete bathroom refits, always maintaining the highest standards of workmanship.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We're proud members of the local community, sponsoring youth sports teams and supporting local charities. When you call FlowPrime, you're supporting a local business that cares about the area we serve.
                  </p>
                </div>

                {/* Why Choose Us */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <Shield className="w-12 h-12 text-[#0057B8] mb-4" />
                    <h3 className="text-xl font-bold mb-3">Fully Qualified & Insured</h3>
                    <p className="text-gray-700 text-sm">
                      All our engineers are Gas Safe registered and hold City & Guilds qualifications. We carry £5 million public liability insurance for your peace of mind.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <CheckCircle className="w-12 h-12 text-[#0057B8] mb-4" />
                    <h3 className="text-xl font-bold mb-3">Fixed Price Guarantee</h3>
                    <p className="text-gray-700 text-sm">
                      We provide upfront quotes before starting work. No hidden fees, no hourly rates that spiral out of control. The price we quote is the price you pay.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <Clock className="w-12 h-12 text-[#0057B8] mb-4" />
                    <h3 className="text-xl font-bold mb-3">24/7 Emergency Service</h3>
                    <p className="text-gray-700 text-sm">
                      Plumbing emergencies don't wait for business hours. Our on-call team is available around the clock, with 60-minute response times across London.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <Wrench className="w-12 h-12 text-[#0057B8] mb-4" />
                    <h3 className="text-xl font-bold mb-3">12-Month Workmanship Warranty</h3>
                    <p className="text-gray-700 text-sm">
                      Every job comes with a 12-month guarantee on workmanship, plus manufacturer warranties on all parts and fixtures we install.
                    </p>
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <h2 className="text-2xl font-bold mb-6 text-center">Accreditations & Certifications</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3 border border-blue-100">
                        <Shield className="w-10 h-10 text-[#0057B8]" />
                      </div>
                      <p className="font-semibold text-sm">Gas Safe Registered</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3 border border-blue-100">
                        <CheckCircle className="w-10 h-10 text-[#0057B8]" />
                      </div>
                      <p className="font-semibold text-sm">City & Guilds</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3 border border-blue-100">
                        <Shield className="w-10 h-10 text-[#0057B8]" />
                      </div>
                      <p className="font-semibold text-sm">Insured</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3 border border-blue-100">
                        <CheckCircle className="w-10 h-10 text-[#0057B8]" />
                      </div>
                      <p className="font-semibold text-sm">Trading Standards Approved</p>
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
              <h1 className="text-4xl md:text-5xl font-black text-center mb-6">
                Recent Projects
              </h1>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                See the quality of our work – from emergency repairs to complete bathroom transformations
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Project 1 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <Droplet className="w-20 h-20 text-[#0057B8] mx-auto mb-4" />
                      <p className="text-sm text-gray-600">Before: Leaking bathroom</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Complete Bathroom Renovation - Hampstead</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Client had persistent leaks causing ceiling damage in the room below. We stripped the entire bathroom, replaced all pipework, installed underfloor heating, and fitted a modern suite with walk-in shower. Project completed in 2 weeks with zero delays.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Completed: March 2024</span>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <Wrench className="w-20 h-20 text-[#0057B8] mx-auto mb-4" />
                      <p className="text-sm text-gray-600">Before: Burst pipe emergency</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Emergency Pipe Repair - Islington</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Responded to a burst pipe emergency at 2am. Water was pouring through the ceiling. We isolated the water supply, repaired the damaged section, and had everything back to normal within 3 hours. Customer was amazed by our speed and professionalism.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Completed: February 2024</span>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <HomeIcon className="w-20 h-20 text-[#0057B8] mx-auto mb-4" />
                      <p className="text-sm text-gray-600">Before: Old boiler system</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Boiler Replacement - Camden</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      15-year-old boiler was costing the client a fortune in gas bills. We installed a new A-rated condensing boiler with smart thermostat. Customer now saves £400/year on heating costs. Installation completed in one day with full system flush.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Completed: January 2024</span>
                    </div>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <Droplet className="w-20 h-20 text-[#0057B8] mx-auto mb-4" />
                      <p className="text-sm text-gray-600">Before: Blocked drains</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Drain Unblocking & CCTV Survey - Shoreditch</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Restaurant was experiencing recurring drainage issues. We performed a CCTV survey, identified tree root intrusion, and cleared the blockage using high-pressure jetting. Installed root barriers to prevent future problems. No issues since completion.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Completed: December 2023</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 text-center bg-blue-50 rounded-xl p-8 border border-blue-100 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Want results like these?</h3>
                <p className="text-gray-600 mb-6">
                  Book a free consultation to discuss your plumbing project
                </p>
                <button
                  onClick={() => setActivePage("contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0057B8] text-white font-bold rounded-lg hover:bg-[#00A1FF] transition-all"
                >
                  Get Your Free Quote
                </button>
              </div>
            </div>
          </section>
        )}

        {/* CONTACT PAGE */}
        {activePage === "contact" && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-6">
                Get Your Free Quote
              </h1>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Fill in the form below or call us directly for immediate assistance
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="07XXX XXXXXX"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Service Required *
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B8] focus:border-transparent">
                        <option>Emergency Plumbing</option>
                        <option>Leak Repair</option>
                        <option>Bathroom Installation</option>
                        <option>Pipe Replacement</option>
                        <option>Boiler Service/Repair</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        placeholder="E.g., SW1A 1AA"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Tell us about your issue
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please describe the plumbing issue you're experiencing..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-[#0057B8] text-white font-bold rounded-lg hover:bg-[#00A1FF] transition-all text-lg"
                    >
                      Submit Quote Request
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      We'll respond within 2 hours during business hours
                    </p>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="bg-[#0057B8] text-white rounded-xl p-8 shadow-lg">
                    <Phone className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Call Us Directly</h3>
                    <p className="text-blue-100 mb-4">
                      Speak to our team now for immediate assistance
                    </p>
                    <a
                      href="tel:08001234567"
                      className="text-3xl font-black hover:text-[#00A1FF] transition-colors"
                    >
                      0800 123 4567
                    </a>
                    <p className="text-sm text-blue-200 mt-2">24/7 Emergency Line</p>
                  </div>

                  {/* Email */}
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                    <Mail className="w-12 h-12 text-[#0057B8] mb-4" />
                    <h3 className="text-xl font-bold mb-3">Email Us</h3>
                    <a
                      href="mailto:info@flowprimeplumbing.co.uk"
                      className="text-[#0057B8] font-semibold hover:text-[#00A1FF]"
                    >
                      info@flowprimeplumbing.co.uk
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                    <Clock className="w-12 h-12 text-[#0057B8] mb-4" />
                    <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-semibold">Monday - Friday:</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Saturday:</span>
                        <span>10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Sunday:</span>
                        <span>Closed</span>
                      </div>
                      <div className="pt-2 border-t border-gray-200 mt-4">
                        <p className="font-semibold text-[#0057B8]">Emergency: 24/7</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                    <MapPin className="w-12 h-12 text-[#0057B8] mb-4" />
                    <h3 className="text-xl font-bold mb-3">Service Area</h3>
                    <p className="text-gray-700">
                      We serve all areas across London and surrounding boroughs. Fast response times guaranteed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo & About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Droplet className="w-6 h-6 text-[#0057B8]" />
                </div>
                <div>
                  <h3 className="text-xl font-black">FlowPrime</h3>
                  <p className="text-xs text-gray-400">Plumbing Services</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Reliable plumbing services across London. Gas Safe registered, fully insured, and available 24/7 for emergencies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActivePage(item.id)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#00A1FF]" />
                  <a href="tel:08001234567" className="hover:text-[#00A1FF]">
                    0800 123 4567
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#00A1FF]" />
                  <a href="mailto:info@flowprimeplumbing.co.uk" className="hover:text-[#00A1FF]">
                    info@flowprimeplumbing.co.uk
                  </a>
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <p className="text-gray-400">
                    <span className="font-semibold text-white">Office Hours:</span> Mon-Fri 9am-5pm
                  </p>
                  <p className="text-[#00A1FF] font-semibold">Emergency: On call 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 FlowPrime Plumbing. All rights reserved. Gas Safe Registered. Fully Insured.</p>
          </div>
        </div>
      </footer>

      {/* Back to BuzzBold */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Love this website design?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            BuzzBold Marketing can build a professional site like this for your trade business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02012345678"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Us: 020 1234 5678
            </a>
            <button
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-black/20 backdrop-blur-sm border-2 border-white text-white font-bold rounded-lg hover:bg-black/30 transition-all"
            >
              Get Your Free Website Audit
            </button>
          </div>
        </div>
      </div>

      {/* Back to Homepage Link */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to BuzzBold Marketing Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlowPrimePlumbing;
