"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, Clock, MapPin, CheckCircle, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show success popup - it will appear centered in the current viewport
    setShowSuccessPopup(true);
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Get Your <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">Free SEO Audit</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Every consultation includes a free SEO audit revealing exactly where you&apos;re losing customers online and how to win them back.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Business Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Smith Plumbing"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@smithplumbing.co.uk"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="07123 456789"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Business Type <span className="text-red-600">*</span>
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900 appearance-none cursor-pointer">
                      <option>Select your industry</option>
                      <option>Plumber</option>
                      <option>Electrician</option>
                      <option>Builder/Construction</option>
                      <option>Roofer</option>
                      <option>Landscaper</option>
                      <option>Carpenter</option>
                      <option>Restaurant/Cafe</option>
                      <option>Retail Shop</option>
                      <option>Professional Services</option>
                      <option>Other Local Business</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Your Location <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Manchester"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    What Do You Need? <span className="text-red-600">*</span>
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900 appearance-none cursor-pointer">
                    <option>Select a service</option>
                    <option>Website Design</option>
                    <option>SEO</option>
                    <option>Social Media</option>
                    <option>Complete Package</option>
                    <option>Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Current Website (if you have one)
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourwebsite.co.uk"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Are you currently advertising? <span className="text-red-600">*</span>
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900 appearance-none cursor-pointer">
                      <option>Select advertising method</option>
                      <option>Google Ads</option>
                      <option>Facebook Ads</option>
                      <option>Instagram Ads</option>
                      <option>Local Directories</option>
                      <option>Print Media</option>
                      <option>Not Currently Advertising</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      What are your goals? <span className="text-red-600">*</span>
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900 appearance-none cursor-pointer">
                      <option>Select your goal</option>
                      <option>Get More Leads</option>
                      <option>Increase Brand Awareness</option>
                      <option>Improve Online Presence</option>
                      <option>Rank Higher on Google</option>
                      <option>Get More Customer Reviews</option>
                      <option>Beat Local Competition</option>
                      <option>All of the Above</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Tell Us About Your Business & Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business, what services you offer, and what you want to achieve online..."
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Get Your Free SEO Audit
                </button>

                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Typical project timeframes provided during consultation</p>
                    <p>No obligation • No pressure • Clear answers</p>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Side - Info Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white shadow-2xl">
                <Phone className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Call Us Directly</h3>
                <p className="text-xl font-semibold mb-2">020 1234 5678</p>
                <p className="text-red-100">Mon-Fri: 9am-5pm</p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <Mail className="w-12 h-12 mb-4 text-red-600" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Email Us Anytime</h3>
                <a href="mailto:Support@buzzboldmarketing.com" className="text-xl font-semibold text-red-600 hover:text-red-700 transition-colors">
                  Support@buzzboldmarketing.com
                </a>
                <p className="text-gray-600 mt-2">We reply within 24 hours.</p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <Clock className="w-12 h-12 mb-4 text-red-600" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Office Hours</h3>
                <p className="text-gray-600 font-semibold">Monday - Friday</p>
                <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                <p className="text-gray-600 mt-2">Weekend? Leave us a message.</p>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 text-white shadow-2xl">
                <MapPin className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Serving UK Businesses</h3>
                <p className="text-orange-100">Nationwide coverage across the UK</p>
              </div>

              <div className="bg-red-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                  <h3 className="text-2xl font-bold">Free SEO Audit</h3>
                </div>
                <p className="text-red-100">Every consultation includes a free SEO audit showing exactly where you&apos;re losing customers online.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-white/10 rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl relative animate-in zoom-in duration-500">
            {/* Close button */}
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>

            {/* Success icon with gradient */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 blur-2xl opacity-50 animate-pulse" />
                <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-full p-4">
                  <CheckCircle className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>

            {/* Success message */}
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-black text-white">
                Message <span className="gradient-text">Received!</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Thank you for reaching out. Our team will review your inquiry and get back to you within <span className="font-bold text-white">24 hours</span>.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Check your inbox for a confirmation email.
                </p>
              </div>
            </div>

            {/* Decorative gradient blurs */}
            <div className="absolute -top-20 -left-20 blur-gradient-orange opacity-20" />
            <div className="absolute -bottom-20 -right-20 blur-gradient-pink opacity-20" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
