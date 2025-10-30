"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu, X, Sparkles } from "lucide-react";
import Logo from "./Logo";

export default function NewHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", target: "#home" },
    { label: "Services", target: "#services" },
    { label: "Portfolio", target: "#portfolio" },
    { label: "Contact", target: "#contact" },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300"
      >
        <div className="container mx-auto flex items-center justify-between p-4 md:p-6">
          {/* Logo */}
          <div
            className="flex items-center gap-1 cursor-pointer group"
            onClick={() => handleScroll("#home")}
          >
            <h1 className="text-2xl md:text-3xl font-black flex items-center gap-1">
              <Logo size={32} className="inline-block" />
              <span className="gradient-text">Buzz</span>
              <span className="text-white">BoldMarketing</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="flex gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    className="px-5 py-2.5 hover:bg-white/5 rounded-full cursor-pointer transition-all duration-300 text-gray-300 hover:text-white font-medium relative group"
                    onClick={() => handleScroll(item.target)}
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-3/4 transition-all duration-300" />
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={() => handleScroll("#contact")}
              className="btn-primary px-6 py-3 relative overflow-hidden group flex items-center gap-2"
            >
              <span className="relative z-10">Get In Touch</span>
            </Button>
            <a
              href="tel:02012345678"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-300 flex items-center gap-2 border border-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <nav className="flex flex-col gap-6 text-center">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.target)}
                className={`text-3xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110 ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${index * 100}ms`
                    : "0ms",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div
            className={`mt-12 transition-all duration-500 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0 delay-500"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              onClick={() => handleScroll("#contact")}
              size="lg"
              className="btn-primary px-10 py-6 text-lg"
            >
              Get Started
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 blur-gradient-orange opacity-30" />
          <div className="absolute bottom-20 right-10 blur-gradient-pink opacity-30" />
        </div>
      </div>
    </>
  );
}
