"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

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

  const testimonials = [
    {
      name: "Mitch A.",
      role: "Roofer from London",
      image: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=150&h=150&fit=crop&auto=format",
      content:
        "My old website looked like it was from 2005. BuzzBold built me a proper one that looks professional and brings in quality leads. Phone hasn't stopped ringing since.",
      rating: 5,
    },
    {
      name: "Dylan M.",
      role: "Landscaper from Bristol",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=150&h=150&fit=crop&auto=format",
      content:
        "These guys really know their stuff. They helped me get on Google Maps and now I'm getting jobs from people searching for landscapers near them. Game changer for my business.",
      rating: 5,
    },
    {
      name: "Ron J.",
      role: "Plumber from Manchester",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=150&h=150&fit=crop&auto=format",
      content:
        "Straight-talking team that delivered exactly what they promised. My phone's been buzzing with new customers since they got my SEO sorted. Best decision I made this year.",
      rating: 5,
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
            Real Tradesmen, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Don&apos;t just take our word for it. Here&apos;s what tradesmen across the UK
            are saying about working with BuzzBold Marketing.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group h-full"
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/90 to-gray-900/50 border-2 border-gray-800 rounded-2xl backdrop-blur-sm hover:border-gray-700 transition-all duration-500 relative overflow-hidden">
                {/* Quote icon background */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-24 h-24 text-white" />
                </div>

                <CardContent className="p-8 relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-orange-500 text-orange-500"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    &quot;{testimonial.content}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 p-0.5">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-16 border-t border-gray-800">
          <p className="text-center text-gray-500 mb-8">
            Helping tradesmen across the UK get found and get booked
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {[
              "Plumbers",
              "Electricians",
              "Builders",
              "Roofers",
              "Landscapers",
              "HVAC",
            ].map((trade, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors"
              >
                {trade}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
