"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

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

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Get Your Free Consultation
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within a few hours with a custom plan for your business.
              </p>

              <form className="space-y-6">
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
                      Your Trade <span className="text-red-600">*</span>
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900 appearance-none cursor-pointer">
                      <option>Select your trade</option>
                      <option>Plumber</option>
                      <option>Electrician</option>
                      <option>Builder</option>
                      <option>Roofer</option>
                      <option>Landscaper</option>
                      <option>HVAC</option>
                      <option>Other</option>
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
                  Get My Free Consultation
                </button>

                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">We reply within hours</p>
                    <p>No obligation • No pressure • No BS</p>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Side - Info Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white shadow-2xl">
                <Phone className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Call Us</h3>
                <p className="text-xl font-semibold mb-2">020 1234 5678</p>
                <p className="text-red-100">Mon-Fri: 9am-6pm</p>
                <p className="text-red-100">We pick up. No call centers.</p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <Mail className="w-12 h-12 mb-4 text-red-600" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Email Us</h3>
                <a href="mailto:hello@buzzboldmarketing.com" className="text-xl font-semibold text-red-600 hover:text-red-700 transition-colors">
                  hello@buzzboldmarketing.com
                </a>
                <p className="text-gray-600 mt-2">Average response time: 2-4 hours</p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <Clock className="w-12 h-12 mb-4 text-red-600" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Quick Response</h3>
                <p className="text-gray-600">We reply within hours, not days.</p>
                <p className="text-gray-600">Real people. Real responses.</p>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 text-white shadow-2xl">
                <MapPin className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">UK-Based</h3>
                <p className="text-orange-100">Proudly serving tradesmen across the United Kingdom.</p>
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
    </section>
  );
};

export default Contact;
