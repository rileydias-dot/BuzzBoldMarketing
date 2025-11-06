"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Target, Rocket, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: <Target className="h-6 w-6 text-orange-300" />,
    title: "Discover & prioritise",
    detail: "Workshops to align goals, messaging, and audience so we know exactly what to build and measure.",
    timeline: "Phase 1",
  },
  {
    icon: <Rocket className="h-6 w-6 text-orange-300" />,
    title: "Design, build & launch",
    detail:
      "High-fidelity design, purposeful copy, and a fast Next.js build. We go live once performance and QA checks pass.",
    timeline: "Phase 2",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-orange-300" />,
    title: "Optimise & grow",
    detail:
      "Monitor metrics, test new ideas, and keep expanding what works. Regular reviews keep everyone accountable.",
    timeline: "Phase 3",
  },
];

const Portfolio = () => {
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
          { opacity: 0, y: 55 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
            delay: index * 0.1,
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="section-padding border-t border-white/5 bg-gradient-to-b from-[#070b18] via-[#05070f] to-[#020408] relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.04),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:120px_120px] opacity-15" />
      <div className="container mx-auto container-padding relative z-10">
        <div ref={titleRef} className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Our process</p>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">How we take websites from plan to growth.</h2>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
            Simple, transparent phases. You always know what we are working on, what we need from you, and the results
            we are targeting.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="surface-card group flex h-full flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-400/60 hover:shadow-[0_20px_50px_rgba(249,115,22,0.25)]"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-gray-400">
                <span className="group-hover:text-orange-400 transition-colors">{step.timeline}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">{step.icon}</div>
              </div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">{step.title}</h3>
              <p className="text-sm text-gray-300">{step.detail}</p>
            </Card>
          ))}
        </div>

        <div className="surface-card mt-16 grid gap-8 p-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white md:text-3xl">Stay focused on delivery; we handle growth.</h3>
            <p className="mt-3 text-sm text-gray-300 md:text-base">
              We plug into your team as a partner, sharing updates in plain language, highlighting the metrics that
              matter, and proactively recommending next steps.
            </p>
          </div>
          <div className="rounded-2xl border border-white/12 bg-[#101a2d] p-6 text-left text-sm text-gray-300">
            <p className="font-semibold text-white">What collaboration feels like:</p>
            <ul className="mt-4 space-y-3">
              {[
                "Regular async updates in your preferred channel",
                "Performance reviews with next actions",
                "Direct access to the strategist and lead designer",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
