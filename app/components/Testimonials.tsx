"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Target, Zap, Shield, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    icon: <Target className="h-6 w-6 text-orange-300" />,
    title: "Local growth focus",
    description:
      "We specialise in trades and service-based brands. Every playbook is built around local search and lead generation.",
  },
  {
    icon: <Zap className="h-6 w-6 text-orange-300" />,
    title: "Execution over fluff",
    description:
      "Clear scope, fast turnaround, tight iterations. You always know what we are building and why it matters.",
  },
  {
    icon: <Shield className="h-6 w-6 text-orange-300" />,
    title: "Measured results",
    description:
      "From speed scores to enquiry volumes, we track the outcomes that prove your investment is working hard.",
  },
  {
    icon: <Award className="h-6 w-6 text-orange-300" />,
    title: "Straightforward collaboration",
    description:
      "Regular check-ins, async updates, and shared dashboards. No jargon, just transparent communication.",
  },
];

const Testimonials = () => {
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
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
            delay: index * 0.08,
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding border-t border-white/5 bg-[#05070f]">
      <div className="container mx-auto container-padding">
        <div ref={titleRef} className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Why teams choose us</p>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">Built for service brands that need results.</h2>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
            You get the strategy, design, and optimisation of a dedicated in-house team, without adding headcount.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <Card
              key={point.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="surface-card flex h-full flex-col gap-4 p-6 text-left transition-transform duration-200 hover:-translate-y-1 hover:border-orange-400/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">{point.icon}</div>
              <h3 className="text-lg font-semibold text-white">{point.title}</h3>
              <p className="text-sm text-gray-300">{point.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white md:text-3xl">Ready to talk through your goals?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 md:text-base">
            Share where you&apos;re heading and we&apos;ll map the quickest path to get there. No pressure, just useful
            direction.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3 font-semibold text-black transition-transform duration-200 hover:-translate-y-1 hover:bg-orange-400"
          >
            Start a conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
