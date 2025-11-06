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
              Build to Dominate.
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl lg:text-2xl"
          >
            We design, build, and optimise websites that help UK trades and service businesses turn browsers into booked
            jobs.
          </p>

          <div ref={ctaRef} className="flex w-full flex-col items-center justify-center gap-5 text-base sm:flex-row">
            <button
              onClick={handleCtaClick}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-4 font-semibold text-black shadow-[0_12px_30px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(249,115,22,0.5)] animate-pulse-glow"
            >
              Get a free website review
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-white/12 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { value: "Local SEO", label: "Built in from day one" },
                { value: "Quality builds", label: "Polished & professional" },
                { value: "Transparent", label: "Regular updates & reports" },
                { value: "UK specialists", label: "Industry-focused team" },
              ].map((stat, index) => (
                <div
                  key={stat.value}
                  className="group rounded-xl border border-white/10 bg-gradient-to-br from-[#0b1321] to-[#0f1729] px-4 py-6 text-center transition-all duration-300 hover:border-orange-500/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(249,115,22,0.3)]"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="text-lg font-semibold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent md:text-xl">{stat.value}</div>
                  <div className="mt-2 text-xs text-gray-400 md:text-sm group-hover:text-gray-300 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-sm text-gray-400">
            <span>Prefer to explore first?</span>
            <button
              onClick={handleServicesClick}
              className="border-b border-transparent text-gray-200 transition-colors duration-200 hover:border-gray-400"
            >
              Browse our services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
