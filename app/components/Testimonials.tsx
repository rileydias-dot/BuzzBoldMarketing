"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Target, Zap, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef(null);

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
            y: 80,
            rotateY: -15,
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            ease: "power3.out",
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

  const trustPoints = [
    {
      icon: Target,
      title: "Local Growth Specialists",
      description:
        "We work with local service businesses, trades, startups, and brick-and-mortar shops that need to be found online and turn clicks into customers.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Build to Dominate",
      description:
        "We build what you need, launch it fast, and get you results. Every campaign is designed to dominate your local market and drive measurable growth.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Results Without the Runaround",
      description:
        "You get a website that works, SEO that ranks, and reviews that close deals. Clear timelines. No excuses. Just execution.",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: Award,
      title: "Clear. Simple. Action-Driven.",
      description:
        "We don't sell you a dream. We show you the plan, do the work, and deliver the outcome. Full transparency. Zero fluff.",
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="blur-gradient-orange top-20 left-20" />
      <div className="blur-gradient-pink bottom-20 right-20" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Built for <span className="gradient-text">Local Businesses That Want Results</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            We help service businesses, trades, and local shops get found, get chosen, and grow without the BS.
          </p>
        </div>

        {/* Trust points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {trustPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group h-full"
              >
                <Card className="h-full bg-gradient-to-br from-gray-900/90 to-gray-900/50 border-2 border-gray-800 rounded-2xl backdrop-blur-sm hover:border-transparent transition-all duration-500 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Animated border */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${point.gradient} blur-xl opacity-50`}
                    />
                  </div>

                  <CardHeader className="relative z-10 flex flex-col items-start p-6 space-y-3">
                    {/* Icon with gradient */}
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${point.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white leading-tight">
                      {point.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed text-base">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow?
          </h3>
          <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
            Let&apos;s talk. No pressure. No pitch. Just a real conversation about what you need and how we can help.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
