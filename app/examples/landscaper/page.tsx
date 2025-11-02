"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, Award, Leaf, Trees, Fence, Droplets, Menu, X, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

const GreenFrameLandscapes = () => {
  const [activePage, setActivePage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);

  const navigation = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Why Choose Us", id: "why" },
    { name: "Contact & Quote", id: "contact" },
  ];

  const portfolioImages = [
    { title: "Modern Patio Transformation", location: "Surrey" },
    { title: "Complete Garden Redesign", location: "Kent" },
    { title: "Decking & Water Feature", location: "Sussex" },
    { title: "Driveway & Landscaping", location: "Hampshire" },
    { title: "Contemporary Garden", location: "Berkshire" },
    { title: "Outdoor Living Space", location: "Surrey" },
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
            GreenFrame Landscapes – A complete website example for landscaping businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:02012345678"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2D6A4F] text-white font-bold text-sm hover:bg-[#1F4A37] transition-all duration-300"
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

      {/* GreenFrame Header & Navigation */}
      <header className="bg-[#2D6A4F] text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border-2 border-[#A7C957]">
                <Leaf className="w-7 h-7 text-[#2D6A4F]" />
              </div>
              <div>
                <h1 className="text-2xl font-black">GreenFrame</h1>
                <p className="text-xs text-green-200">Landscapes</p>
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
                  className={`text-sm font-semibold hover:text-[#A7C957] transition-colors ${
                    activePage === item.id ? "text-[#A7C957]" : ""
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
              href="tel:08007890123"
              className="hidden lg:flex items-center gap-2 px-5 py-2 bg-[#A7C957] text-gray-900 font-bold rounded-lg hover:bg-white transition-all"
            >
              <Phone className="w-4 h-4" />
              0800 789 0123
            </a>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-green-600 pt-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-4 hover:bg-green-600 rounded ${
                    activePage === item.id ? "bg-green-600" : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
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
            <section className="bg-gradient-to-br from-[#2D6A4F] to-[#1F4A37] text-white py-20">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl font-black mb-6">
                    Transforming Gardens into Outdoor Spaces You Love
                  </h1>
                  <p className="text-xl md:text-2xl text-green-100 mb-8">
                    Award-winning landscape design and installation across Surrey and surrounding areas
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setActivePage("contact")}
                      className="px-8 py-4 bg-[#A7C957] text-gray-900 font-bold text-lg rounded-lg hover:bg-white transition-all duration-300"
                    >
                      Get Free Quote
                    </button>
                    <button
                      onClick={() => setActivePage("portfolio")}
                      className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-[#2D6A4F] transition-all duration-300"
                    >
                      View Portfolio
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <CheckCircle className="w-10 h-10 text-[#A7C957] mx-auto mb-3" />
                      <h3 className="font-bold text-lg mb-2">20+ Years Experience</h3>
                      <p className="text-green-100 text-sm">Expert landscaping since 2004</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <CheckCircle className="w-10 h-10 text-[#A7C957] mx-auto mb-3" />
                      <h3 className="font-bold text-lg mb-2">Free Design Consultation</h3>
                      <p className="text-green-100 text-sm">Professional planning included</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <CheckCircle className="w-10 h-10 text-[#A7C957] mx-auto mb-3" />
                      <h3 className="font-bold text-lg mb-2">5-Year Guarantee</h3>
                      <p className="text-green-100 text-sm">All work fully warranted</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Services Overview */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
                  Our Landscaping Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Decking & Fencing", icon: Fence },
                    { title: "Patios & Driveways", icon: Trees },
                    { title: "Garden Design", icon: Leaf },
                    { title: "Water Features", icon: Droplets },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                    >
                      <service.icon className="w-10 h-10 text-[#2D6A4F] mb-4" />
                      <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                      <button
                        onClick={() => setActivePage("services")}
                        className="text-[#2D6A4F] font-semibold text-sm hover:text-[#A7C957]"
                      >
                        Learn more →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Featured Project Showcase */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
                    Recent Garden Makeover
                  </h2>
                  <p className="text-center text-gray-600 mb-12">
                    See how we transformed this overgrown garden into a stunning outdoor living space
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center border-2 border-gray-200">
                      <div className="text-center">
                        <Leaf className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 font-semibold">Before: Overgrown garden</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 flex items-center justify-center border-2 border-green-200">
                      <div className="text-center">
                        <Award className="w-24 h-24 text-[#2D6A4F] mx-auto mb-4" />
                        <p className="text-[#2D6A4F] font-semibold">After: Modern outdoor space</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <button
                      onClick={() => setActivePage("portfolio")}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D6A4F] text-white font-bold rounded-lg hover:bg-[#A7C957] hover:text-gray-900 transition-all"
                    >
                      View Full Portfolio
                    </button>
                  </div>
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
                Professional Landscaping Services
              </h1>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                From concept to completion, we create beautiful outdoor spaces tailored to your lifestyle
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Service 1 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-[#2D6A4F] to-[#A7C957] flex items-center justify-center">
                    <Fence className="w-20 h-20 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">Decking & Fencing</h3>
                    <p className="text-gray-600 mb-4">
                      Quality timber and composite decking installations for outdoor living. We build durable fencing, gates, and privacy screens using premium materials. Every deck is designed for longevity and style.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Composite & hardwood options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Built-in seating & planters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">10-year structural warranty</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setActivePage("contact")}
                      className="w-full px-6 py-3 bg-[#2D6A4F] text-white font-bold rounded-lg hover:bg-[#A7C957] hover:text-gray-900 transition-all"
                    >
                      Request Free Consultation
                    </button>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-[#2D6A4F] to-[#A7C957] flex items-center justify-center">
                    <Trees className="w-20 h-20 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">Patios & Driveways</h3>
                    <p className="text-gray-600 mb-4">
                      Expert paving services using natural stone, porcelain, or block paving. We create stunning patios and hard-wearing driveways with proper drainage and sub-base preparation for lasting results.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Indian sandstone & porcelain</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Permeable paving options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Full excavation & base work</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setActivePage("contact")}
                      className="w-full px-6 py-3 bg-[#2D6A4F] text-white font-bold rounded-lg hover:bg-[#A7C957] hover:text-gray-900 transition-all"
                    >
                      Request Free Consultation
                    </button>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-[#2D6A4F] to-[#A7C957] flex items-center justify-center">
                    <Leaf className="w-20 h-20 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">Garden Design & Maintenance</h3>
                    <p className="text-gray-600 mb-4">
                      Complete garden transformations from design through planting and maintenance. We create low-maintenance, eco-friendly gardens with year-round interest. Ongoing care packages available.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">3D design visualizations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Native & pollinator-friendly plants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Seasonal maintenance plans</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setActivePage("contact")}
                      className="w-full px-6 py-3 bg-[#2D6A4F] text-white font-bold rounded-lg hover:bg-[#A7C957] hover:text-gray-900 transition-all"
                    >
                      Request Free Consultation
                    </button>
                  </div>
                </div>

                {/* Service 4 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-[#2D6A4F] to-[#A7C957] flex items-center justify-center">
                    <Droplets className="w-20 h-20 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">Lighting & Water Features</h3>
                    <p className="text-gray-600 mb-4">
                      Transform your garden with atmospheric lighting and water features. We install ponds, fountains, waterfalls, and LED lighting systems that extend your enjoyment into the evening hours.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Custom pond construction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Energy-efficient LED systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Smart lighting control</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setActivePage("contact")}
                      className="w-full px-6 py-3 bg-[#2D6A4F] text-white font-bold rounded-lg hover:bg-[#A7C957] hover:text-gray-900 transition-all"
                    >
                      Request Free Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* PORTFOLIO PAGE */}
        {activePage === "portfolio" && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Browse our latest garden transformations and outdoor projects
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {portfolioImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setLightboxImage(index);
                      setLightboxOpen(true);
                    }}
                    className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 border-green-200 hover:border-[#A7C957] group"
                  >
                    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                      <Leaf className="w-20 h-20 text-[#2D6A4F] mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                      <p className="text-sm text-gray-600">{image.location}</p>
                      <p className="text-xs text-[#2D6A4F] mt-4 font-semibold">Click to view</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lightbox Modal */}
              {lightboxOpen && (
                <div
                  className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                  onClick={() => setLightboxOpen(false)}
                >
                  <div className="bg-white rounded-xl p-8 max-w-4xl w-full">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">{portfolioImages[lightboxImage].title}</h3>
                        <p className="text-gray-600">{portfolioImages[lightboxImage].location}</p>
                      </div>
                      <button
                        onClick={() => setLightboxOpen(false)}
                        className="text-gray-500 hover:text-gray-900"
                      >
                        <X className="w-8 h-8" />
                      </button>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                      <Award className="w-32 h-32 text-[#2D6A4F]" />
                    </div>
                    <p className="mt-4 text-gray-700">
                      This project showcases our expertise in creating stunning outdoor spaces. The transformation included complete garden redesign, premium paving, and custom planting schemes.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-16 text-center">
                <p className="text-gray-600 mb-6">
                  Ready to transform your garden?
                </p>
                <button
                  onClick={() => setActivePage("contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D6A4F] text-white font-bold rounded-lg hover:bg-[#A7C957] hover:text-gray-900 transition-all"
                >
                  Get Your Free Quote
                </button>
              </div>
            </div>
          </section>
        )}

        {/* WHY CHOOSE US PAGE */}
        {activePage === "why" && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-6">
                Why Choose GreenFrame?
              </h1>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                We're not just landscapers – we're garden transformation specialists
              </p>

              <div className="max-w-5xl mx-auto space-y-8">
                {/* Reason 1 */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-8 h-8 text-[#2D6A4F]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Local Team with Proven Track Record</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We've been transforming gardens across Surrey and Kent for over 20 years. Our team knows the local climate, soil conditions, and what plants thrive in this area. Every project is managed by experienced landscapers who take pride in their work.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 2 */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-8 h-8 text-[#2D6A4F]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Eco-Friendly Materials & Practices</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Sustainability matters. We use FSC-certified timber, permeable paving to reduce runoff, and native plants that support local wildlife. Our gardens are designed to be beautiful and environmentally responsible.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 3 */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-[#2D6A4F]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Fixed Pricing with No Hidden Costs</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Your quote is your final price. We provide detailed, itemized estimates before any work begins. No surprise charges, no hidden fees. If we encounter unexpected issues, we discuss options with you first.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 4 */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-8 h-8 text-[#2D6A4F]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">5-Year Workmanship Warranties</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We stand behind our work with comprehensive warranties. Paving, decking, and structural work is covered for 5 years. Plants come with a 12-month guarantee. If something isn't right, we fix it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 bg-green-50 rounded-xl p-8 border border-green-200 max-w-5xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to start your garden project?</h3>
                <p className="text-gray-700 mb-6">
                  Book a free consultation and site visit – we'll bring ideas to your garden
                </p>
                <button
                  onClick={() => setActivePage("contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D6A4F] text-white font-bold rounded-lg hover:bg-[#A7C957] hover:text-gray-900 transition-all"
                >
                  Book a Visit
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
                Book a free site visit and design consultation
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
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Service Required *
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent">
                        <option>Decking & Fencing</option>
                        <option>Patio Installation</option>
                        <option>Driveway</option>
                        <option>Garden Design</option>
                        <option>Water Features</option>
                        <option>Complete Garden Makeover</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        placeholder="E.g., GU1 1AA"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Tell us about your project
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please describe what you'd like to achieve with your garden..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-sm text-gray-600">
                        I'd like to schedule a free site visit
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-[#2D6A4F] text-white font-bold rounded-lg hover:bg-[#A7C957] hover:text-gray-900 transition-all text-lg"
                    >
                      Submit Quote Request
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      We'll respond within 24 hours to arrange your free site visit
                    </p>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="bg-[#2D6A4F] text-white rounded-xl p-8 shadow-lg">
                    <Phone className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Call Us</h3>
                    <p className="text-green-100 mb-4">
                      Speak to our design team about your project
                    </p>
                    <a
                      href="tel:08007890123"
                      className="text-3xl font-black hover:text-[#A7C957] transition-colors"
                    >
                      0800 789 0123
                    </a>
                    <p className="text-sm text-green-200 mt-2">Mon-Sat: 8am-6pm</p>
                  </div>

                  {/* Email */}
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                    <Mail className="w-12 h-12 text-[#2D6A4F] mb-4" />
                    <h3 className="text-xl font-bold mb-3">Email Us</h3>
                    <a
                      href="mailto:info@greenframelandscapes.co.uk"
                      className="text-[#2D6A4F] font-semibold hover:text-[#A7C957]"
                    >
                      info@greenframelandscapes.co.uk
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                    <Clock className="w-12 h-12 text-[#2D6A4F] mb-4" />
                    <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-semibold">Monday - Friday:</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Saturday:</span>
                        <span>9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                    <MapPin className="w-12 h-12 text-[#2D6A4F] mb-4" />
                    <h3 className="text-xl font-bold mb-3">Service Area</h3>
                    <p className="text-gray-700">
                      Surrey, Kent, Sussex, Hampshire, and surrounding areas. Free quotes within 20 miles.
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
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border-2 border-[#A7C957]">
                  <Leaf className="w-6 h-6 text-[#2D6A4F]" />
                </div>
                <div>
                  <h3 className="text-xl font-black">GreenFrame</h3>
                  <p className="text-xs text-gray-400">Landscapes</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Award-winning landscape design and installation. Creating beautiful, sustainable outdoor spaces since 2004.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#A7C957] transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#A7C957] transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
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
                  <Phone className="w-4 h-4 text-[#A7C957]" />
                  <a href="tel:08007890123" className="hover:text-[#A7C957]">
                    0800 789 0123
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#A7C957]" />
                  <a href="mailto:info@greenframelandscapes.co.uk" className="hover:text-[#A7C957]">
                    info@greenframelandscapes.co.uk
                  </a>
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <p className="text-gray-400 text-xs">
                    Follow our latest garden makeovers on Instagram
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 GreenFrame Landscapes. All rights reserved. Fully Insured. FSC Certified.</p>
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

export default GreenFrameLandscapes;
