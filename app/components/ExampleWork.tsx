"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Wrench, Leaf, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ExampleWork = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
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

  const examples = [
    {
      title: "FlowPrime Plumbing",
      icon: <Wrench className="h-6 w-6" />,
      description: "Emergency callouts, leak detection, boiler installs and servicing for London homes.",
      link: "/examples/plumber",
      mockup: {
        headline: "Reliable plumbing. Local experts.",
        subheadline: "Gas Safe registered - fully insured",
      },
      accentGradient: "from-sky-500/60 via-cyan-400/25 to-transparent",
      metrics: [
        { label: "Est. potential lead", value: "350+ monthly" },
        { label: "Lead uplift", value: "+212%" },
        { label: "Primary goal", value: "Emergency calls" },
      ],
    },
    {
      title: "GreenFrame Landscapes",
      icon: <Leaf className="h-6 w-6" />,
      description: "Design-led landscaping studio producing seasonal projects and maintenance retainers.",
      link: "/examples/landscaper",
      mockup: {
        headline: "Transform your outdoor space.",
        subheadline: "High-impact design and build packages",
      },
      accentGradient: "from-emerald-500/55 via-lime-400/25 to-transparent",
      metrics: [
        { label: "Est. potential lead", value: "180+ monthly" },
        { label: "Project enquiries", value: "×2.3" },
        { label: "Primary goal", value: "High-value projects" },
      ],
    },
    {
      title: "BrightWave Electrical",
      icon: <Zap className="h-6 w-6" />,
      description: "NICEIC certified electricians specialising in rewires, smart home upgrades, and compliance.",
      link: "/examples/electrician",
      mockup: {
        headline: "Certified electrical work.",
        subheadline: "Rapid response teams across the city",
      },
      accentGradient: "from-amber-400/55 via-orange-400/25 to-transparent",
      metrics: [
        { label: "Est. potential lead", value: "280+ monthly" },
        { label: "Booked jobs", value: "×3.1" },
        { label: "Primary goal", value: "Rewires & upgrades" },
      ],
    },
  ];

  return (
    <section
      id="examples"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/5 bg-[#050810] py-20"
    >
      <div className="absolute -top-40 right-10 h-72 w-72 rotate-12 rounded-full bg-gradient-to-br from-orange-500/20 via-transparent to-transparent blur-3xl" />
      <div className="absolute -bottom-48 left-10 h-80 w-80 rounded-full bg-gradient-to-br from-sky-500/25 via-transparent to-transparent blur-3xl" />
      <div className="container relative mx-auto container-padding">
        <div ref={titleRef} className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Selected work</p>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Example websites that keep leads coming in.
          </h2>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
            Each site is built around clear messaging, fast performance, and effortless reader flows.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {examples.map((example, index) => (
            <a
              key={example.title}
              href={example.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-br from-[#0b1321] to-[#0f1729] shadow-[0_25px_60px_rgba(2,6,23,0.55)] transition-all duration-300 hover:-translate-y-2 hover:border-orange-400/80 hover:shadow-[0_30px_70px_rgba(249,115,22,0.3)]"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${example.accentGradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="flex h-full flex-col justify-between p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-orange-200 shadow-inner">
                      {example.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-orange-300">Case study</p>
                      <h3 className="text-xl font-semibold text-white">{example.title}</h3>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-200">
                    Web + SEO
                  </span>
                </div>

                <p className="mt-5 text-sm text-slate-200">{example.description}</p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-[#101a2d]/90 p-5">
                  <div className="text-sm font-semibold text-white">{example.mockup.headline}</div>
                  <div className="mt-2 text-xs uppercase tracking-wide text-orange-300">
                    {example.mockup.subheadline}
                  </div>
                  <div className="mt-4 grid gap-3">
                    {example.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-2 text-xs text-slate-200"
                      >
                        <span className="font-medium text-slate-300">{metric.label}</span>
                        <span className="font-semibold text-white">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent px-6 py-4 text-sm text-slate-200 group-hover:via-orange-500/10 transition-all duration-300">
                <span className="font-semibold group-hover:text-orange-400 transition-colors">View project</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-orange-400" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-white/15 bg-[#0b1321] px-8 py-10 text-center">
          <h3 className="text-xl font-semibold text-white md:text-2xl">Need to see a specific sector?</h3>
          <p className="max-w-2xl text-sm text-gray-400 md:text-base">
            Ask for a tailored showcase. We can walk you through the structure, performance metrics, and lessons from
            projects closest to your industry.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 font-semibold text-black shadow-[0_12px_30px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(249,115,22,0.5)]"
          >
            Schedule a walkthrough
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExampleWork;
