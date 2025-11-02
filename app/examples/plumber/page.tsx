"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Shield,
  Wrench,
  Droplet,
  Flame,
  AlertTriangle,
  Bath,
  Menu,
  X,
  Award,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import Head from "next/head";

const FlowPrimePlumbing = () => {
  const [activePage, setActivePage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const navigation = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "FlowPrime Plumbing",
    image: "https://buzzboldmarketing.vercel.app/flowprime-logo.png",
    "@id": "https://buzzboldmarketing.vercel.app/examples/plumber",
    url: "https://buzzboldmarketing.vercel.app/examples/plumber",
    telephone: "020-1234-5678",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 High Street",
      addressLocality: "London",
      postalCode: "SW1A 1AA",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5074,
      longitude: -0.1278,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  const faqs = [
    {
      question: "Do you offer same-day emergency plumbing?",
      answer:
        "Yes, we provide 24/7 emergency callouts with same-day response across London. Call us immediately for urgent leaks, burst pipes, or boiler failures.",
    },
    {
      question: "Are your plumbers Gas Safe registered?",
      answer:
        "Absolutely. All our plumbers are Gas Safe registered, DBS checked, and fully insured. We provide certification for all gas work completed.",
    },
    {
      question: "Do you provide upfront pricing?",
      answer:
        "Yes, we offer transparent, fixed-price quotes before starting any work. No hidden fees, no surprises. You'll know the cost before we begin.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We cover all London postcodes including Central, North, South, East, and West London. Check our service area map for your specific postcode.",
    },
    {
      question: "How quickly can you respond to emergencies?",
      answer:
        "We aim to reach emergency callouts within 60-90 minutes across our service area. We prioritize urgent situations like flooding or gas leaks.",
    },
  ];

  const serviceAreas = [
    "SW1, SW2, SW3, SW4, SW5, SW6, SW7, SW8, SW9, SW10",
    "W1, W2, W3, W4, W5, W6, W7, W8, W9, W10, W11, W12",
    "N1, N2, N3, N4, N5, N6, N7, N8, N9, N10, N11, N12",
    "E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12",
    "SE1, SE2, SE3, SE4, SE5, SE6, SE7, SE8, SE9, SE10",
  ];

  return (
    <>
      <Head>
        <title>FlowPrime Plumbing | Emergency Plumbers and Boiler Service</title>
        <meta
          name="description"
          content="Fast, trusted plumbers for leaks, boilers, and bathrooms. Same-day help. Call us."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="min-h-screen bg-white text-[#111111]">
        {/* Trust Bar */}
        <div className="bg-[#0057B8] text-white py-2">
          <div className="container mx-auto px-4">
            <p className="text-sm font-semibold text-center flex items-center justify-center gap-2 flex-wrap">
              <Shield className="w-4 h-4" />
              <span>Gas Safe Registered</span>
              <span className="hidden sm:inline">•</span>
              <span>Fully Insured</span>
              <span className="hidden sm:inline">•</span>
              <span>DBS Checked</span>
              <span className="hidden sm:inline">•</span>
              <span>24/7 Emergency Response</span>
            </p>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <button
                onClick={() => {
                  setActivePage("home");
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#0057B8] shadow-sm">
                  <Droplet className="w-7 h-7 text-[#0057B8]" />
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-black text-[#0057B8]">FlowPrime</h1>
                  <p className="text-xs text-[#00A1FF] font-semibold">Plumbing Services</p>
                </div>
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActivePage(item.id)}
                    className={`px-5 py-2 rounded-lg font-semibold transition-all min-h-[44px] ${
                      activePage === item.id
                        ? "bg-[#0057B8] text-white"
                        : "text-[#111111] hover:text-[#0057B8] hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              {/* CTA Buttons (Desktop) */}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href="https://wa.me/442012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#20BA5A] transition-all min-h-[44px]"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:02012345678"
                  className="flex items-center gap-2 px-6 py-3 bg-[#0057B8] text-white font-bold rounded-lg hover:bg-[#004494] transition-all min-h-[44px]"
                >
                  <Phone className="w-4 h-4" />
                  020 1234 5678
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#111111] hover:text-[#0057B8] transition-colors min-h-[44px] min-w-[44px]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <nav className="md:hidden py-4 border-t border-gray-200">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActivePage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-semibold transition-all min-h-[44px] ${
                      activePage === item.id
                        ? "bg-[#0057B8] text-white"
                        : "text-[#111111] hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <a
                  href="tel:02012345678"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 mt-2 bg-[#0057B8] text-white font-bold rounded-lg min-h-[44px]"
                >
                  <Phone className="w-4 h-4" />
                  Call: 020 1234 5678
                </a>
                <a
                  href="https://wa.me/442012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 mt-2 bg-[#25D366] text-white font-bold rounded-lg min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
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
              <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#0057B8] to-[#00A1FF]">
                <div className="container mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                    <div className="text-white order-2 md:order-1">
                      <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Reliable plumbing.
                        <br />
                        <span className="text-[#F5F7FB]">Local experts. 24/7 response.</span>
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-blue-50">
                        Fast, professional plumbing services across London. Same-day emergency
                        callouts.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <a
                          href="tel:02012345678"
                          className="px-10 py-4 bg-white text-[#0057B8] font-black text-lg rounded-lg hover:bg-gray-50 transition-all inline-flex items-center justify-center gap-2 shadow-xl min-h-[44px]"
                        >
                          <Phone className="w-5 h-5" />
                          Call us
                        </a>
                        <button
                          onClick={() => setActivePage("contact")}
                          className="px-10 py-4 bg-[#00A1FF] text-white font-bold text-lg rounded-lg border-2 border-white hover:bg-[#0088CC] transition-all inline-flex items-center justify-center gap-2 min-h-[44px]"
                        >
                          Get your free quote
                        </button>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          { icon: Shield, label: "Fully Insured" },
                          { icon: Award, label: "Gas Safe" },
                          { icon: CheckCircle, label: "DBS Checked" },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex flex-col items-center gap-2"
                          >
                            <item.icon className="w-6 h-6" />
                            <p className="text-sm font-bold">{item.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="order-1 md:order-2">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                        <Image
                          src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1800&q=80"
                          alt="Professional plumber installing radiator pipe in modern home"
                          width={1800}
                          height={1200}
                          priority={true}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Services Grid */}
              <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-[#111111]">
                    Our Plumbing <span className="text-[#0057B8]">Services</span>
                  </h2>
                  <p className="text-center text-[#444444] mb-12 max-w-2xl mx-auto">
                    From emergency repairs to complete bathroom installations, we cover all your
                    plumbing needs
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        icon: <AlertTriangle className="w-8 h-8" />,
                        title: "Emergency Callout",
                        desc: "24/7 rapid response for leaks, burst pipes, and flooding",
                      },
                      {
                        icon: <Droplet className="w-8 h-8" />,
                        title: "Leak Detection & Repair",
                        desc: "Advanced leak detection and permanent repairs",
                      },
                      {
                        icon: <Flame className="w-8 h-8" />,
                        title: "Boiler Service",
                        desc: "Annual servicing, repairs, and new installations",
                      },
                      {
                        icon: <Bath className="w-8 h-8" />,
                        title: "Bathroom Fitting",
                        desc: "Complete bathroom renovations and installations",
                      },
                      {
                        icon: <Wrench className="w-8 h-8" />,
                        title: "Pipe Repairs",
                        desc: "Pipe replacement, repairs, and pressure fixes",
                      },
                      {
                        icon: <CheckCircle className="w-8 h-8" />,
                        title: "General Plumbing",
                        desc: "Taps, toilets, radiators, and general repairs",
                      },
                    ].map((service, index) => (
                      <div
                        key={index}
                        className="bg-[#F5F7FB] border border-gray-200 rounded-lg p-6 hover:border-[#0057B8] transition-all hover:shadow-lg"
                      >
                        <div className="text-[#0057B8] mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-[#111111]">{service.title}</h3>
                        <p className="text-[#444444] text-sm">{service.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-8">
                    <button
                      onClick={() => setActivePage("services")}
                      className="text-[#0057B8] font-bold hover:underline inline-flex items-center gap-2 min-h-[44px]"
                    >
                      View All Services <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
                    </button>
                  </div>
                </div>
              </section>

              {/* Service Area Map */}
              <section className="py-16 bg-[#F5F7FB]">
                <div className="container mx-auto px-4">
                  <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-[#111111]">
                      Our <span className="text-[#0057B8]">Service Areas</span>
                    </h2>
                    <p className="text-center text-[#444444] mb-12">
                      We cover all London postcodes with fast response times
                    </p>

                    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-[#0057B8]">Coverage Map</h3>
                          <div className="bg-[#F5F7FB] rounded-lg p-6 flex items-center justify-center h-64">
                            <div className="text-center">
                              <MapPin className="w-16 h-16 text-[#0057B8] mx-auto mb-4" />
                              <p className="text-sm text-[#444444]">All London Postcodes Covered</p>
                              <p className="text-xs text-[#666666] mt-2">60-90 min response time</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-[#0057B8]">Postcodes We Serve</h3>
                          <div className="space-y-2">
                            {serviceAreas.map((area, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-[#333333] font-mono">{area}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-[#111111]">
                      Frequently Asked <span className="text-[#0057B8]">Questions</span>
                    </h2>
                    <p className="text-center text-[#444444] mb-12">
                      Quick answers to common questions about our plumbing services
                    </p>

                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="bg-[#F5F7FB] rounded-lg border border-gray-200 overflow-hidden"
                        >
                          <button
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors min-h-[44px]"
                          >
                            <span className="font-bold text-[#111111]">{faq.question}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-[#0057B8] transition-transform ${
                                openFaq === index ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {openFaq === index && (
                            <div className="px-6 py-4 border-t border-gray-200 bg-white">
                              <p className="text-[#333333]">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Strip */}
              <section className="py-12 bg-[#0057B8]">
                <div className="container mx-auto px-4 text-center">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
                    Need a plumber? We're here 24/7
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:02012345678"
                      className="px-10 py-4 bg-white text-[#0057B8] font-black text-lg rounded-lg hover:bg-gray-50 transition-all inline-flex items-center justify-center gap-2 min-h-[44px]"
                    >
                      <Phone className="w-5 h-5" />
                      Call us
                    </a>
                    <button
                      onClick={() => setActivePage("contact")}
                      className="px-10 py-4 bg-[#00A1FF] text-white font-bold text-lg rounded-lg border-2 border-white hover:bg-[#0088CC] transition-all min-h-[44px]"
                    >
                      Get your free quote
                    </button>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* SERVICES PAGE */}
          {activePage === "services" && (
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#111111]">
                    Our <span className="text-[#0057B8]">Plumbing Services</span>
                  </h1>
                  <p className="text-xl text-[#444444]">
                    Professional, reliable plumbing for homes and businesses across London
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {/* Emergency Repairs */}
                  <div className="bg-[#F5F7FB] border-2 border-gray-200 rounded-lg p-8">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                      <Image
                        src="https://images.unsplash.com/photo-1759757707824-4e5f54b7a43c?w=1200&q=80"
                        alt="Emergency plumber shutting off water valve to stop leak"
                        width={1200}
                        height={675}
                        className="object-cover"
                      />
                    </div>
                    <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <AlertTriangle className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[#111111]">Emergency Repairs</h3>
                    <p className="text-[#333333] mb-6 leading-relaxed">
                      <strong>Problem:</strong> Burst pipes, flooding, or major leaks can cause
                      thousands in damage.
                      <br />
                      <strong>Fix:</strong> Our rapid-response team arrives within 60-90 minutes to
                      stop the leak and prevent further damage.
                      <br />
                      <strong>Outcome:</strong> Property protected, leak fixed, peace of mind
                      restored.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-1" />
                        <span className="text-[#333333]">60-90 minute response time</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-1" />
                        <span className="text-[#333333]">Burst pipes and flooding</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-1" />
                        <span className="text-[#333333]">Boiler breakdowns</span>
                      </li>
                    </ul>
                    <a
                      href="tel:02012345678"
                      className="w-full block text-center py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all min-h-[44px] flex items-center justify-center"
                    >
                      Emergency: 020 1234 5678
                    </a>
                  </div>

                  {/* Leak Detection */}
                  <div className="bg-[#F5F7FB] border-2 border-gray-200 rounded-lg p-8">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                      <Image
                        src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&q=80"
                        alt="Plumber using wrench on copper pipe close up detail"
                        width={1200}
                        height={675}
                        className="object-cover"
                      />
                    </div>
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Droplet className="w-8 h-8 text-[#0057B8]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[#111111]">Leak Detection</h3>
                    <p className="text-[#333333] mb-6 leading-relaxed">
                      <strong>Problem:</strong> Hidden leaks waste water and cause structural damage
                      over time.
                      <br />
                      <strong>Fix:</strong> We use thermal imaging and acoustic detection to find
                      hidden leaks, then repair them permanently.
                      <br />
                      <strong>Outcome:</strong> Lower water bills, no hidden damage, lasting repair.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-1" />
                        <span className="text-[#333333]">Advanced leak detection equipment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-1" />
                        <span className="text-[#333333]">Hidden pipe and underfloor leaks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-1" />
                        <span className="text-[#333333]">12-month warranty on all work</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setActivePage("contact")}
                      className="w-full py-3 bg-[#0057B8] text-white font-bold rounded-lg hover:bg-[#004494] transition-all min-h-[44px]"
                    >
                      Get your free quote
                    </button>
                  </div>

                  {/* Boilers and Heating */}
                  <div className="bg-[#F5F7FB] border-2 border-gray-200 rounded-lg p-8">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                      <Image
                        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80"
                        alt="Gas safe engineer servicing boiler panel and controls"
                        width={1200}
                        height={675}
                        className="object-cover"
                      />
                    </div>
                    <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Flame className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[#111111]">Boilers and Heating</h3>
                    <p className="text-[#333333] mb-6 leading-relaxed">
                      <strong>Problem:</strong> Neglected boilers break down in winter and can be
                      dangerous.
                      <br />
                      <strong>Fix:</strong> Annual servicing keeps your boiler safe, efficient, and
                      under warranty. We repair or replace when needed.
                      <br />
                      <strong>Outcome:</strong> Reliable heating, lower energy bills, Gas Safe
                      certification.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-1" />
                        <span className="text-[#333333]">Gas Safe registered engineers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-1" />
                        <span className="text-[#333333]">Annual servicing and safety checks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-1" />
                        <span className="text-[#333333]">Certificate provided for landlords</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setActivePage("contact")}
                      className="w-full py-3 bg-[#0057B8] text-white font-bold rounded-lg hover:bg-[#004494] transition-all min-h-[44px]"
                    >
                      Get your free quote
                    </button>
                  </div>

                  {/* Bathrooms */}
                  <div className="bg-[#F5F7FB] border-2 border-gray-200 rounded-lg p-8">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                      <Image
                        src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80"
                        alt="Modern bathroom with chrome fixtures and clean design"
                        width={1200}
                        height={675}
                        className="object-cover"
                      />
                    </div>
                    <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                      <Bath className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[#111111]">Bathrooms</h3>
                    <p className="text-[#333333] mb-6 leading-relaxed">
                      <strong>Problem:</strong> Outdated bathrooms reduce property value and quality
                      of life.
                      <br />
                      <strong>Fix:</strong> Full bathroom design, supply, and installation with all
                      plumbing, tiling, and finishing.
                      <br />
                      <strong>Outcome:</strong> Modern, functional bathroom installed to a high
                      standard.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-1" />
                        <span className="text-[#333333]">Full design and planning service</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-1" />
                        <span className="text-[#333333]">Supply and fit all fixtures</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-1" />
                        <span className="text-[#333333]">2-year guarantee on workmanship</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setActivePage("contact")}
                      className="w-full py-3 bg-[#0057B8] text-white font-bold rounded-lg hover:bg-[#004494] transition-all min-h-[44px]"
                    >
                      Get your free quote
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ABOUT PAGE */}
          {activePage === "about" && (
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-5xl font-black mb-6 text-center text-[#111111]">
                    About <span className="text-[#0057B8]">FlowPrime Plumbing</span>
                  </h1>
                  <p className="text-xl text-center text-[#444444] mb-16">
                    Your trusted local plumbing experts since 2010
                  </p>

                  <div className="bg-[#F5F7FB] rounded-lg p-8 mb-12 border border-gray-200">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                      <Image
                        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1800&q=80"
                        alt="Professional plumber at work with tools and equipment"
                        width={1800}
                        height={1013}
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-[#111111]">Who We Are</h2>
                    <p className="text-[#333333] leading-relaxed mb-4">
                      FlowPrime Plumbing is a family-run plumbing business serving London since
                      2010. We specialize in emergency callouts, boiler repairs, leak detection, and
                      complete bathroom installations.
                    </p>
                    <p className="text-[#333333] leading-relaxed mb-4">
                      Our team of Gas Safe registered plumbers are DBS checked, fully insured, and
                      committed to providing honest, reliable service. We believe in transparent
                      pricing, quality workmanship, and treating every customer's home with respect.
                    </p>
                    <p className="text-[#333333] leading-relaxed">
                      Available 24/7 for emergencies, we pride ourselves on rapid response times and
                      permanent solutions—not temporary fixes.
                    </p>
                  </div>

                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-center text-[#111111]">
                      Our Values & <span className="text-[#0057B8]">Safety Process</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Safety First",
                          desc:
                            "All work complies with current regulations. Gas Safe certified for all gas work.",
                        },
                        {
                          title: "Transparent Pricing",
                          desc: "Upfront quotes before we start. No hidden fees, no surprises.",
                        },
                        {
                          title: "Quality Guarantee",
                          desc:
                            "12-month warranty on all workmanship. We stand behind every job we complete.",
                        },
                      ].map((value, index) => (
                        <div
                          key={index}
                          className="bg-[#F5F7FB] border border-gray-200 rounded-lg p-6"
                        >
                          <h3 className="font-bold mb-3 text-[#0057B8]">{value.title}</h3>
                          <p className="text-sm text-[#333333]">{value.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#F5F7FB] border border-gray-200 rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-6 text-[#0057B8]">
                      Qualifications & Warranties
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Shield className="w-6 h-6 text-[#0057B8] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold mb-2 text-[#111111]">Gas Safe Registered</h3>
                          <p className="text-[#333333] text-sm">
                            All engineers are Gas Safe registered for boiler work and gas appliance
                            installation.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Award className="w-6 h-6 text-[#0057B8] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold mb-2 text-[#111111]">£5 Million Public Liability</h3>
                          <p className="text-[#333333] text-sm">
                            Comprehensive insurance cover for all work carried out in your property.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-[#0057B8] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold mb-2 text-[#111111]">DBS Checked Team</h3>
                          <p className="text-[#333333] text-sm">
                            All our plumbers are DBS checked for your peace of mind and security.
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
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#111111]">
                    Recent <span className="text-[#0057B8]">Projects</span>
                  </h1>
                  <p className="text-xl text-[#444444]">
                    See examples of our completed plumbing work across London
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {/* Project 1 */}
                  <div className="bg-[#F5F7FB] border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative aspect-video">
                      <Image
                        src="https://images.unsplash.com/photo-1631049035482-d38c547be450?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
                        alt="Modern bathroom before and after renovation with chrome fixtures"
                        width={1200}
                        height={675}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-[#111111]">
                        Complete Bathroom Fit - Hampstead
                      </h3>
                      <p className="text-[#333333] mb-4">
                        <strong>Before:</strong> Outdated 1970s bathroom with cracked tiles and poor
                        water pressure.
                        <br />
                        <strong>Work:</strong> Full strip-out, new plumbing, shower installation,
                        underfloor heating, tiling, and fixtures.
                        <br />
                        <strong>After:</strong> Modern bathroom with walk-in shower, excellent
                        pressure, and 2-year guarantee.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-[#0057B8] rounded-full text-sm font-semibold">
                          Bathroom
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-[#0057B8] rounded-full text-sm font-semibold">
                          Full Installation
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="bg-[#F5F7FB] border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative aspect-video">
                      <Image
                        src="https://images.unsplash.com/photo-1538474705339-e87de81450e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
                        alt="Emergency plumber repairing kitchen pipe under sink"
                        width={1200}
                        height={675}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-[#111111]">
                        Emergency Burst Pipe - Islington
                      </h3>
                      <p className="text-[#333333] mb-4">
                        <strong>Problem:</strong> Burst pipe causing flooding in ground floor flat at
                        2am.
                        <br />
                        <strong>Response:</strong> Arrived within 75 minutes, isolated leak, pumped
                        out water, fitted temporary repair.
                        <br />
                        <strong>Result:</strong> Permanent repair completed next day, no structural
                        damage, insurance claim supported.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                          Emergency
                        </span>
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                          24/7 Callout
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="bg-[#F5F7FB] border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative aspect-video">
                      <Image
                        src="https://images.unsplash.com/photo-1620653713380-7a34b773fef8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=645"
                        alt="Gas safe engineer installing new boiler panel"
                        width={1200}
                        height={675}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-[#111111]">
                        Boiler Replacement - Camden
                      </h3>
                      <p className="text-[#333333] mb-4">
                        <strong>Situation:</strong> 15-year-old boiler failed during cold snap, no
                        heating or hot water.
                        <br />
                        <strong>Work:</strong> Removed old boiler, fitted new A-rated combi boiler,
                        upgraded pipework, system flush.
                        <br />
                        <strong>Outcome:</strong> Efficient heating, lower bills, 10-year
                        manufacturer warranty, Gas Safe certificate.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                          Boiler
                        </span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                          Gas Safe
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project 4 */}
                  <div className="bg-[#F5F7FB] border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative aspect-video">
                      <Image
                        src="https://images.unsplash.com/photo-1650551182991-b07558247564?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=873"
                        alt="Copper pipe fittings and professional plumbing tools on workbench"
                        width={1200}
                        height={675}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-[#111111]">
                        Hidden Leak Detection - Shoreditch
                      </h3>
                      <p className="text-[#333333] mb-4">
                        <strong>Issue:</strong> High water bills and damp patch, no visible leak
                        source.
                        <br />
                        <strong>Process:</strong> Thermal imaging scan located hidden pipe leak
                        behind kitchen units.
                        <br />
                        <strong>Fix:</strong> Accessed pipe without major disruption, replaced
                        section, tested system, replastered.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold">
                          Leak Detection
                        </span>
                        <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold">
                          Repair
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project 5 */}
                  <div className="bg-[#F5F7FB] border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative aspect-video">
                      <Image
                        src="https://images.unsplash.com/photo-1744063909793-8a1e85ace349?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435"
                        alt="Professional plumber working on central heating radiator"
                        width={1200}
                        height={675}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-[#111111]">
                        Central Heating Upgrade - Hackney
                      </h3>
                      <p className="text-[#333333] mb-4">
                        <strong>Challenge:</strong> Old radiators with cold spots and inefficient
                        heating throughout property.
                        <br />
                        <strong>Solution:</strong> Power flushed system, replaced 6 radiators,
                        balanced heating, fitted thermostatic valves.
                        <br />
                        <strong>Result:</strong> Even heating throughout, 25% reduction in energy
                        bills, improved comfort.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-[#0057B8] rounded-full text-sm font-semibold">
                          Heating
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-[#0057B8] rounded-full text-sm font-semibold">
                          Upgrade
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project 6 */}
                  <div className="bg-[#F5F7FB] border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative aspect-video">
                      <Image
                        src="https://images.unsplash.com/photo-1637665609537-26857a32f6cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
                        alt="Modern kitchen tap and plumbing installation"
                        width={1200}
                        height={675}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-[#111111]">
                        Kitchen Plumbing - Clapham
                      </h3>
                      <p className="text-[#333333] mb-4">
                        <strong>Scope:</strong> Full kitchen renovation required complete plumbing
                        re-route for new layout.
                        <br />
                        <strong>Work:</strong> Relocated sink, installed dishwasher and washing
                        machine, fitted boiling water tap.
                        <br />
                        <strong>Outcome:</strong> Modern kitchen with concealed pipework, all
                        appliances working perfectly.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          Kitchen
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          Installation
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
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#111111]">
                    Get Your <span className="text-[#0057B8]">Free Quote</span>
                  </h1>
                  <p className="text-xl text-[#444444]">
                    Fill in the form below or call us for immediate assistance
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {/* Contact Form */}
                  <div className="lg:col-span-2">
                    <div className="bg-[#F5F7FB] border border-gray-200 rounded-lg p-8">
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-bold mb-2 text-[#111111]">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0057B8] text-[#111111] min-h-[44px]"
                              placeholder="John Smith"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-bold mb-2 text-[#111111]">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0057B8] text-[#111111] min-h-[44px]"
                              placeholder="020 1234 5678"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-bold mb-2 text-[#111111]">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0057B8] text-[#111111] min-h-[44px]"
                              placeholder="john@example.com"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-bold mb-2 text-[#111111]">
                              Postcode *
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0057B8] text-[#111111] min-h-[44px]"
                              placeholder="SW1A 1AA"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-bold mb-2 text-[#111111]">
                            Service Required *
                          </label>
                          <select
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0057B8] text-[#111111] min-h-[44px]"
                            required
                          >
                            <option value="">Select a service...</option>
                            <option value="emergency">Emergency Callout</option>
                            <option value="leak">Leak Detection & Repair</option>
                            <option value="boiler">Boiler Service/Repair</option>
                            <option value="bathroom">Bathroom Installation</option>
                            <option value="general">General Plumbing</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-bold mb-2 text-[#111111]">
                            Tell us about your plumbing issue
                          </label>
                          <textarea
                            rows={6}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0057B8] text-[#111111]"
                            placeholder="Please describe the issue and when you need help..."
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-4 bg-[#0057B8] text-white font-black text-lg rounded-lg hover:bg-[#004494] transition-all min-h-[44px]"
                        >
                          Get your free quote
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* Contact Info Cards */}
                  <div className="space-y-6">
                    {/* Emergency */}
                    <div className="bg-red-50 border-2 border-red-600 rounded-lg p-6">
                      <AlertTriangle className="w-8 h-8 text-red-600 mb-4" />
                      <h3 className="text-xl font-bold mb-2 text-red-900">24/7 Emergency Line</h3>
                      <p className="text-red-800 mb-4 text-sm font-semibold">
                        Burst pipes, flooding, no heating
                      </p>
                      <a
                        href="tel:02012345678"
                        className="block w-full py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all text-center min-h-[44px] flex items-center justify-center"
                      >
                        020 1234 5678
                      </a>
                    </div>

                    {/* Call Us */}
                    <div className="bg-[#F5F7FB] border border-gray-200 rounded-lg p-6">
                      <Phone className="w-8 h-8 text-[#0057B8] mb-4" />
                      <h3 className="text-xl font-bold mb-2 text-[#111111]">Call Us</h3>
                      <p className="text-[#444444] mb-4 text-sm">Speak to our team for advice</p>
                      <a
                        href="tel:02012345678"
                        className="text-[#0057B8] font-bold hover:underline block"
                      >
                        020 1234 5678
                      </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <MessageCircle className="w-8 h-8 text-[#25D366] mb-4" />
                      <h3 className="text-xl font-bold mb-2 text-[#111111]">WhatsApp Us</h3>
                      <p className="text-[#444444] mb-4 text-sm">
                        Quick questions or photos of issues
                      </p>
                      <a
                        href="https://wa.me/442012345678"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#20BA5A] transition-all text-center min-h-[44px] flex items-center justify-center"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>

                    {/* Email */}
                    <div className="bg-[#F5F7FB] border border-gray-200 rounded-lg p-6">
                      <Mail className="w-8 h-8 text-[#0057B8] mb-4" />
                      <h3 className="text-xl font-bold mb-2 text-[#111111]">Email Us</h3>
                      <p className="text-[#444444] mb-4 text-sm">We respond within 2 hours</p>
                      <a
                        href="mailto:hello@flowprime-plumbing.co.uk"
                        className="text-[#0057B8] font-bold hover:underline break-all text-sm"
                      >
                        hello@flowprime-plumbing.co.uk
                      </a>
                    </div>

                    {/* Office Hours */}
                    <div className="bg-[#F5F7FB] border border-gray-200 rounded-lg p-6">
                      <Clock className="w-8 h-8 text-[#0057B8] mb-4" />
                      <h3 className="text-xl font-bold mb-2 text-[#111111]">Office Hours</h3>
                      <div className="space-y-2 text-sm">
                        <p className="flex justify-between">
                          <span className="text-[#444444]">Monday - Friday:</span>
                          <span className="font-bold text-[#111111]">8am - 6pm</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-[#444444]">Emergencies:</span>
                          <span className="font-bold text-red-600">24/7</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coverage Map */}
                <div className="mt-16 max-w-5xl mx-auto">
                  <h2 className="text-3xl font-black text-center mb-8 text-[#111111]">
                    Service Coverage Areas
                  </h2>
                  <div className="bg-[#F5F7FB] rounded-lg p-8 border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {serviceAreas.map((area, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#0057B8] flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-[#333333] font-mono">{area}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>

        {/* BuzzBold Marketing CTA Section */}
        <section className="border-t border-gray-200 bg-gradient-to-r from-orange-600/10 via-red-600/10 to-pink-600/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-[#111111]">
              This is an example of what{" "}
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                we can build for you
              </span>
            </h2>
            <p className="text-xl text-[#444444] mb-8 max-w-2xl mx-auto">
              Professional, conversion-focused websites for UK tradesmen and local businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:02012345678"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 min-h-[44px]"
              >
                <Phone className="w-5 h-5" />
                Call us
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 min-h-[44px]"
              >
                <Mail className="w-5 h-5" />
                Get Your Free Website Audit
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white py-8">
          <div className="container mx-auto px-4 text-center">
            <a
              href="/"
              className="text-[#666666] hover:text-[#0057B8] transition-colors inline-flex items-center gap-2 mb-4 font-semibold"
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
            <p className="text-sm text-[#999999]">
              Example website design © 2024 BuzzBold Marketing
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FlowPrimePlumbing;
