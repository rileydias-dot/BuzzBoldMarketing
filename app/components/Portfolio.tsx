"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Rocket, TrendingUp, Headset } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: 1,
    icon: Target,
    title: "Discovery & Strategy",
    headline: "Understand Your Business Needs",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    icon: Rocket,
    title: "Build & Optimize",
    headline: "Build Your Online Presence",
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Execute & Monitor",
    headline: "Execute. Monitor. Grow With You.",
    gradient: "from-pink-500 to-purple-500",
  },
];

const Portfolio = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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
            scale: 0.8,
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
            delay: index * 0.2,
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
      id="process"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="blur-gradient-red top-0 left-0" />
      <div className="blur-gradient-orange bottom-0 right-0" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            How We <span className="gradient-text">Get You Results</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            No guesswork. No trial and error. Just a proven system that gets local businesses found online and booked solid.
          </p>
        </div>

        {/* Process steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-gray-900/90 to-gray-900/50 border-2 border-gray-800 rounded-2xl backdrop-blur-sm hover:border-transparent transition-all duration-500 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Animated border */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${step.gradient} blur-xl opacity-50`}
                    />
                  </div>

                  <CardHeader className="relative z-10 flex flex-col items-start p-6 space-y-3">
                    {/* Step number badge */}
                    <div className="flex items-center gap-4 w-full mb-2">
                      <div
                        className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${step.gradient} text-white font-bold text-xs`}
                      >
                        Step {step.id}
                      </div>
                    </div>

                    {/* Icon with gradient */}
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${step.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white leading-tight">
                      {step.headline}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Growing?
            </h3>
            <p className="text-gray-400 text-lg">
              Let&apos;s talk about your business goals and create a custom plan to help you dominate your local market.
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Request a Free Website Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
