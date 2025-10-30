"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  ArrowRight,
  Calendar,
} from "lucide-react";
import Logo from "./Logo";

const CalendlyPopup = dynamic(() => import("./CalendlyPopup"), { ssr: false });

const Footer = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="blur-gradient-orange top-0 left-0 opacity-30" />
      <div className="blur-gradient-pink bottom-0 right-0 opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section - Book a Demo */}
        <div className="bg-gradient-to-r from-orange-600/10 via-red-600/10 to-pink-600/10 border border-white/10 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-300">
                Ready to Grow Your Business?
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Book a Free <span className="gradient-text">Strategy Call</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              See how we can transform your online presence and drive real results. Book a free strategy call with our team today.
            </p>
            <button
              onClick={() => handleScroll("#contact")}
              className="inline-flex items-center gap-3 px-10 py-6 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-6 h-6" />
              Get In Touch
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-6 group cursor-pointer">
              <h3 className="text-2xl font-black flex items-center gap-1">
                <Logo size={32} className="inline-block" />
                <span className="gradient-text">Buzz</span>
                <span className="text-white">BoldMarketing</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We help UK local businesses grow with professional websites, local SEO, review management,
              and social posting powered by BrightLocal&apos;s industry-leading platform.
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: Twitter,
                  label: "Twitter",
                  gradient: "from-blue-400 to-blue-600",
                  url: "https://twitter.com/buzzboldmarketing",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  gradient: "from-blue-600 to-blue-800",
                  url: "https://linkedin.com/company/buzzboldmarketing",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  gradient: "from-pink-500 to-purple-600",
                  url: "https://instagram.com/buzzboldmarketing",
                },
                {
                  icon: Facebook,
                  label: "Facebook",
                  gradient: "from-blue-500 to-indigo-600",
                  url: "https://facebook.com/buzzboldmarketing",
                },
                {
                  icon: Youtube,
                  label: "YouTube",
                  gradient: "from-red-500 to-red-700",
                  url: "https://youtube.com/@buzzboldmarketing",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-transparent transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300`}
                  />
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors relative z-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: "Home", target: "#home" },
                { label: "Services", target: "#services" },
                { label: "Gameplan", target: "#portfolio" },
                { label: "Contact", target: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleScroll(link.target)}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300 group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              {[
                "High Quality Websites",
                "Local SEO to Dominate",
                "Account Management",
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleScroll("#services")}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300 group"
                  >
                    <span className="relative">
                      {service}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <span>
                  Serving Tradesmen
                  <br />
                  Across the United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:Support@buzzboldmarketing.com">Support@buzzboldmarketing.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; 2025 BuzzBold Marketing. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => handleScroll("#home")}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 z-40 group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>

        {/* Calendly Popup Modal */}
        <CalendlyPopup
          url="https://calendly.com/buzzboldmarketing"
          open={isCalendlyOpen}
          onClose={() => setIsCalendlyOpen(false)}
        />
      </div>
    </footer>
  );
};

export default Footer;
