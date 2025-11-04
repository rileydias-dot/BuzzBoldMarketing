"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { ArrowRight, Globe, Target, TrendingUp, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
        },
      );

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
            delay: index * 0.08,
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: <Globe className="h-6 w-6 text-orange-300" />,
      title: "Website design & build",
      copy: [
        "Conversion-first site architecture and copywriting",
        "Responsive Next.js build optimised for speed",
      ],
    },
    {
      icon: <Target className="h-6 w-6 text-orange-300" />,
      title: "Local SEO foundations",
      copy: [
        "Technical audit and on-page optimisation",
        "Google Business Profile clean-up and growth plan",
        "Review engine and citation management",
        "Dashboards that highlight the numbers that matter",
      ],
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-orange-300" />,
      title: "Always-on optimisation",
      copy: [
        "Landing page and funnel experiments",
        "Regular performance reviews with action steps",
      ],
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-orange-300" />,
      title: "Content & campaign support",
      copy: [
        "Launch calendars and campaign playbooks",
        "Social and email assets ready to publish",
        "Paid boosts to keep visibility consistent",
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding border-t border-white/5 bg-[#05070f]">
      <div className="container mx-auto container-padding">
        <div ref={titleRef} className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Services</p>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            A focused team covering the essentials.
          </h2>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
            Pick a single engagement or combine them for momentum. Either way you get clear deliverables and the same
            senior team driving execution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={service.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="surface-card flex h-full flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-400/60 hover:shadow-[0_20px_50px_rgba(249,115,22,0.25)] group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">{service.icon}</div>
              <h3 className="mt-5 text-xl font-semibold bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">{service.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-gray-300">
                {service.copy.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Services;
