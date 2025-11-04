"use client";

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X, Phone } from "lucide-react";
import Logo from './Logo';

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
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
    { label: "Example Work", target: "#examples" },
    { label: "Our Winning Strategy", target: "#portfolio" },
    { label: "Contact", target: "#contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white p-4 z-50 border-b border-white/10 transition-all duration-300 ${isScrolled ? 'bg-black/95' : ''}`}>
        <div className="container mx-auto flex justify-between items-center">
          <button
            type="button"
            onClick={() => handleScroll("#home")}
            className="flex items-center gap-1 text-left transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span className="text-2xl font-bold flex items-center gap-1">
              <Logo size={32} className="inline-block" />
              <span className="gradient-text">Buzz</span>
              <span className="text-white">BoldMarketing</span>
            </span>
          </button>

          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="flex gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <button
                      onClick={() => handleScroll(item.target)}
                      className="group relative px-4 py-2 text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => handleScroll("#contact")}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200"
            >
              Get In Touch
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur" onClick={() => setIsMobileMenuOpen(false)} />

        <div className="relative flex h-full flex-col items-center justify-center gap-10 px-8 py-12">
          <nav className="flex flex-col items-center gap-4 text-center">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.target)}
                className={`text-2xl font-semibold text-white transition-transform duration-200 hover:-translate-y-1 ${
                  isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 80}ms` : "0ms" }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            onClick={() => handleScroll("#contact")}
            className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;