"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Zap,
  Target,
  TrendingUp,
  Palette,
  Globe,
  MessageSquare,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
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
            delay: index * 0.1,
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Fast, SEO-Ready Websites",
      description:
        "Modern, mobile-first websites designed to convert visitors into paying customers. Every site includes lead capture forms, clear calls-to-action, and is optimized for local search from day one. Built in days, not months.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Local SEO & Google My Business",
      description:
        "Dominate local search results and Google Maps with expert SEO and Google Business Profile optimization. We get you in front of customers searching for what you offer right when they're ready to buy.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Review & Reputation Management",
      description:
        "Get more reviews, respond to feedback, and build the online reputation that makes customers choose you over competitors. Powered by BrightLocal's trusted review management platform.",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Business Listing Management",
      description:
        "Ensure your business shows up accurately across 100+ online directories, review sites, and local platforms. One dashboard. Total control. Powered by white-label BrightLocal technology.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Social Media Posting",
      description:
        "Consistent, professional social media posting that keeps your brand visible, builds credibility, and drives traffic to your website without you lifting a finger.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Complete Online Presence Packages",
      description:
        "Get the full package: website, local SEO, listings, reviews, and social all managed under one roof. Perfect for businesses ready to own their local market.",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="blur-gradient-orange top-0 right-0" />
      <div className="blur-gradient-pink bottom-0 left-0" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Services Built to <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Everything your business needs to show up online, stand out locally, and convert clicks into customers.
            We handle the tech. You handle the growth.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/90 to-gray-900/50 border-2 border-gray-800 rounded-2xl backdrop-blur-sm hover:border-transparent transition-all duration-500 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Animated border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} blur-xl opacity-50`}
                  />
                </div>

                <CardHeader className="relative z-10 flex flex-col items-start p-8 space-y-4">
                  {/* Icon with gradient */}
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 px-8 pb-8">
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Get in touch link */}
                  <div
                    onClick={() => {
                      const element = document.querySelector("#contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="mt-6 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <span>Get in touch to learn more</span>
                    <svg
                      className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6 text-lg">
            Not sure what you need? Let&apos;s talk.
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
            Book a Free Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
