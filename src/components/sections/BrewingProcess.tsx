"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brewingSteps } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function BrewingProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;
    const progress = progressRef.current;
    if (!section || !timeline || !progress) return;

    const ctx = gsap.context(() => {
      gsap.to(progress, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: timeline,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      });

      const steps = gsap.utils.toArray<HTMLElement>(".process-step");
      steps.forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-padding relative bg-cream dark:bg-espresso-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="From Bean to Cup"
          title="Our Brewing Process"
          description="Every cup of Taste of Kenya coffee follows a direct path from Kenyan farms to your door — honouring the people and land behind every bean."
        />

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-espresso/10 dark:bg-cream/10 md:-translate-x-1/2">
            <div
              ref={progressRef}
              className="absolute top-0 left-0 w-full bg-gold"
              style={{ height: "0%" }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {brewingSteps.map((step, i) => (
              <div
                key={step.step}
                className={`process-step relative flex flex-col md:flex-row gap-8 items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                  }`}
                >
                  <span className="type-badge text-gold mb-3 inline-block">
                    Step {String(step.step).padStart(2, "0")}
                  </span>
                  <h3 className="heading-display text-2xl md:text-3xl text-espresso dark:text-cream mb-4">
                    {step.title}
                  </h3>
                  <p className="type-subtitle text-espresso/70 dark:text-cream/70">
                    {step.description}
                  </p>
                </div>

                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gold rounded-full md:-translate-x-1/2 ring-4 ring-cream dark:ring-espresso-dark z-10" />

                <div className="flex-1 pl-20 md:pl-0">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-premium group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
