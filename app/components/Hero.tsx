"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.1, ease: "back.out(1.4)" },
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.5",
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4",
        );
    });

    return () => ctx.revert();
  }, []);

  const handleCtaClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServicesClick = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#05070f] via-[#05070f] to-[#050810] pt-40 pb-20 md:pt-36"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#13213a,transparent_65%)] opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px] opacity-20" />
        
        {/* Animated floating orbs */}
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl animate-float" style={{animationDelay: '0s'}} />
        <div className="absolute bottom-32 right-20 h-96 w-96 rounded-full bg-pink-500/15 blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-red-500/10 blur-3xl animate-float" style={{animationDelay: '4s'}} />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200">
            <Sparkles className="h-4 w-4 text-orange-400" />
            Trusted by growing UK service brands
          </div>

          <h1
            ref={titleRef}
            className="mb-6 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="inline-block text-white">
              Build To Dominate
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl lg:text-2xl"
          >
            BuzzBold builds high-converting websites, local SEO and social systems for real UK trades and service businesses – plumbers, sparkies, roofers, mechanics and more. Built to get your phone ringing, not to win design awards.
          </p>

          <div ref={ctaRef} className="flex w-full flex-col items-center justify-center gap-5 text-base sm:flex-row">
            <button
              onClick={handleCtaClick}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-4 font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(249,115,22,0.5)] animate-pulse-glow"
            >
              <Sparkles className="h-5 w-5" />
              Book a free discovery call
            </button>
            <button
              onClick={handleServicesClick}
              className="inline-flex items-center gap-2 text-gray-300 transition-colors duration-200 hover:text-white"
            >
              View website & social packages
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              {[
                { icon: "📍", label: "Built to dominate local search & Google Maps" },
                { icon: "🚀", label: '5 page "Launch Local" & 12 page "Domination" builds' },
                { icon: "🔧", label: "Made for trades – not big faceless brands" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-6 py-4 rounded-lg border border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(249,115,22,0.2)]"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <span className="text-sm md:text-base text-gray-200 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
