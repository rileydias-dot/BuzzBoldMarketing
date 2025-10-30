"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const gradientRef1 = useRef(null);
  const gradientRef2 = useRef(null);
  const gradientRef3 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animations
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.4)",
        },
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.6",
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          "-=0.4",
        );

      // Floating gradient orbs
      gsap.to(gradientRef1.current, {
        x: 100,
        y: -100,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(gradientRef2.current, {
        x: -80,
        y: 80,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(gradientRef3.current, {
        x: 60,
        y: 120,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Keep elements visible - no parallax fade out
      // The tagline stays visible at all times
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-40 md:pt-32"
    >
      {/* Animated gradient orbs */}
      <div ref={gradientRef1} className="blur-gradient-orange top-20 left-20" />
      <div
        ref={gradientRef2}
        className="blur-gradient-red bottom-20 right-20"
      />
      <div
        ref={gradientRef3}
        className="blur-gradient-pink top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 animate-pulse-slow">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-300">
              Trusted by Growing UK Businesses
            </span>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
          >
            Get Found.{" "}
            <span className="gradient-text text-glow inline-block">
              Get Chosen.
            </span>
            <br />
            Get BuzzBold.
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We help UK local businesses dominate their market with expert SEO, professional websites,
            and reputation management that drives real leads—fast.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-col gap-4 items-center w-full"
          >
            <Button
              size="lg"
              onClick={handleCtaClick}
              className="btn-primary px-8 py-6 text-lg font-bold group relative overflow-hidden rounded-full"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Your Free SEO Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <a
              href="tel:02012345678"
              className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 inline-block"
            >
              Call Us
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "Local SEO", label: "Experts" },
              { value: "Fast Delivery", label: "Professional Results" },
              { value: "Full Transparency", label: "Clear Reporting" },
              { value: "UK-Focused", label: "Local Business Specialists" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="text-xl md:text-2xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
