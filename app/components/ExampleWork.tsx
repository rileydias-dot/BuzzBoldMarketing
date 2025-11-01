"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Wrench, Leaf, Zap } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ExampleWork = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Staggered card animations
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: index * 0.15,
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const examples = [
    {
      title: "Plumber Website",
      icon: <Wrench className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      description: "Emergency callouts, booking system, service area maps",
      link: "/examples/plumber",
      mockup: {
        headline: "24/7 Emergency Plumbing",
        subheadline: "Fast, Reliable Service in Your Area",
        cta: "Call Now",
      },
    },
    {
      title: "Landscaper Website",
      icon: <Leaf className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      description: "Portfolio gallery, quote requests, seasonal services",
      link: "/examples/landscaper",
      mockup: {
        headline: "Transform Your Outdoor Space",
        subheadline: "Professional Landscaping & Garden Design",
        cta: "Get Free Quote",
      },
    },
    {
      title: "Electrician Website",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-yellow-500 to-orange-500",
      description: "Safety certifications, emergency repairs, installation quotes",
      link: "/examples/electrician",
      mockup: {
        headline: "Licensed Electricians You Can Trust",
        subheadline: "Residential & Commercial Electrical Services",
        cta: "Book Service",
      },
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="blur-gradient-orange top-0 left-0 opacity-20" />
      <div className="blur-gradient-pink bottom-0 right-0 opacity-20" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Example Work &amp; <span className="gradient-text">Design Styles</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            See what we can build for your business. These are real examples of the modern, conversion-focused websites we create for UK tradesmen.
          </p>
        </div>

        {/* Example cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Link
              key={index}
              href={example.link}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group block"
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/90 to-gray-900/50 border-2 border-gray-800 rounded-2xl backdrop-blur-sm hover:border-transparent transition-all duration-500 relative overflow-hidden cursor-pointer">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${example.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Animated border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${example.gradient} blur-xl opacity-50`}
                  />
                </div>

                <CardContent className="relative z-10 p-6">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${example.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6`}
                  >
                    {example.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {example.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6">{example.description}</p>

                  {/* Mockup preview */}
                  <div className="bg-white/5 rounded-lg p-4 mb-6 border border-white/10">
                    <div className="text-white font-bold text-sm mb-2">
                      {example.mockup.headline}
                    </div>
                    <div className="text-gray-400 text-xs mb-3">
                      {example.mockup.subheadline}
                    </div>
                    <div
                      className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${example.gradient} text-white text-xs font-bold`}
                    >
                      {example.mockup.cta}
                    </div>
                  </div>

                  {/* View button */}
                  <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all duration-300">
                    View Example
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6 text-lg">
            Want a website like these for your business?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Your Free Website Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExampleWork;
