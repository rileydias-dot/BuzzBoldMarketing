"use client";

import React from "react";
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
} from "lucide-react";
import Logo from "./Logo";

const Footer = () => {

  const handleScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#05070f] pt-20 pb-8 text-slate-200">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      <div className="blur-gradient-orange top-0 -left-12" />
      <div className="blur-gradient-pink bottom-0 -right-12" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="surface-card mx-auto mb-16 max-w-4xl px-6 py-10 text-center md:px-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-slate-200">
            <Sparkles className="h-4 w-4 text-orange-400" />
            Ready to grow your business?
          </div>
          <h3 className="mt-6 text-3xl font-black text-white md:text-4xl">Book a free strategy call</h3>
          <p className="mt-4 text-sm text-gray-300 md:text-base">
            See how we can modernise your website, streamline your marketing, and bring in qualified enquiries. A quick
            conversation is all it takes to map the next steps.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button onClick={() => handleScroll("#contact")} className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-base">
              <Sparkles className="h-5 w-5" />
              Talk to the team
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <button
              onClick={() => handleScroll("#home")}
              className="mb-6 flex items-center gap-2 text-left text-slate-100 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Logo size={28} className="shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-400">BuzzBold</span>
                <span className="text-base font-semibold text-white">Marketing</span>
              </div>
            </button>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-gray-300">
              We help UK local businesses grow with professional websites, local SEO, review management,
              and social posting powered by BrightLocal&apos;s industry-leading platform.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Twitter, label: "Twitter", url: "https://twitter.com/buzzboldmarketing" },
                { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/company/buzzboldmarketing" },
                { icon: Instagram, label: "Instagram", url: "https://instagram.com/buzzboldmarketing" },
                { icon: Facebook, label: "Facebook", url: "https://facebook.com/buzzboldmarketing" },
                { icon: Youtube, label: "YouTube", url: "https://youtube.com/@buzzboldmarketing" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-slate-200 transition-transform duration-200 hover:-translate-y-1 hover:border-orange-400/60 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
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
                { label: "Example Work", target: "#examples" },
                { label: "Our Process", target: "#portfolio" },
                { label: "Contact", target: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScroll(link.target)}
                    className="group inline-block transform text-gray-400 transition-colors duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
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
                "Website design & build",
                "Local SEO programmes",
                "Always-on optimisation",
                "Content & campaign support",
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleScroll("#services")}
                    className="group inline-block transform text-gray-400 transition-colors duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span className="relative">
                      {service}
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
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
          className="group fixed bottom-8 right-8 z-40 rounded-full bg-orange-500 p-4 text-slate-900 shadow-[0_12px_30px_rgba(249,115,22,0.4)] transition-transform duration-200 hover:-translate-y-1 hover:bg-orange-400"
          aria-label="Scroll to top"
        >
          <svg
            className="h-6 w-6 -translate-y-0.5 transition-transform duration-200 group-hover:-translate-y-1"
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
      </div>
    </footer>
  );
};

export default Footer;
