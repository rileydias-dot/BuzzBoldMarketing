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
    headline: "We Understand Your Business Needs",
    description:
      "Every business is different. We start with a strategy call to understand your goals, your market, and your competition. Then we build a custom plan designed to get you maximum visibility and leads.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    icon: Rocket,
    title: "Build & Optimize",
    headline: "We Build Your Online Presence",
    description:
      "Whether it's a brand-new website, local SEO setup, or listing management across 100+ directories, we handle the technical heavy lifting. Fast turnaround. Industry-leading tools. Zero hassle.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Launch & Grow",
    headline: "We Review",
    description:
      "Once you're live, we monitor, optimize, and scale. You'll see more traffic, more reviews, more bookings, and a clear return on your investment. We track it all so you can focus on growing your business.",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    id: 4,
    icon: Headset,
    title: "Ongoing Support",
    headline: "We Grow With You",
    description:
      "Marketing isn't set-it-and-forget-it. We provide ongoing support, updates, and optimization to keep you ahead of competitors and top-of-mind with customers.",
    gradient: "from-purple-500 to-indigo-500",
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
        <div ref={titleRef} className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            How We <span className="gradient-text">Get You Results</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            No guesswork. No trial and error. Just a proven system that gets local businesses found online and booked solid.
          </p>
        </div>

        {/* Process steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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

                  <CardHeader className="relative z-10 flex flex-col items-start p-8 space-y-4">
                    {/* Step number badge */}
                    <div className="flex items-center gap-4 w-full mb-2">
                      <div
                        className={`px-4 py-2 rounded-full bg-gradient-to-r ${step.gradient} text-white font-bold text-sm`}
                      >
                        Step {step.id}
                      </div>
                    </div>

                    {/* Icon with gradient */}
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${step.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">
                      {step.headline}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 px-8 pb-8">
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
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
