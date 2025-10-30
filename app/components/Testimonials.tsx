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
      icon: Award,
      title: "Powered by BrightLocal",
      description:
        "We partner with BrightLocal, the industry standard for local SEO, listing management, and review tools used by top agencies worldwide.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Target,
      title: "UK Local Business Experts",
      description:
        "We specialize in helping UK businesses dominate local search, rank on Google Maps, and attract customers in their area.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Fast, Proven, Scalable",
      description:
        "We build fast. We launch fast. And we deliver results that scale. No 6-month buildouts. No empty promises. Just smart marketing that works.",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Transparent & Accountable",
      description:
        "You'll always know what we're doing, why we're doing it, and what results you're getting. Full reporting. No surprises.",
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
        <div ref={titleRef} className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Why Choose <span className="gradient-text">BuzzBold Marketing</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            We&apos;re not just another agency. We&apos;re specialists in local business growth,
            powered by the best tools in the industry.
          </p>
        </div>

        {/* Trust points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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

                  <CardHeader className="relative z-10 flex flex-col items-start p-8 space-y-4">
                    {/* Icon with gradient */}
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${point.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">
                      {point.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 px-8 pb-8">
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Grow Your Business Together
          </h3>
          <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
            Ready to dominate your local market? Book a free strategy call and discover how we can help you get more visibility, more leads, and more revenue.
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
            Book a Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
