"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { subscriptionPlans } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function SubscriptionPlans() {
  return (
    <section
      id="subscription"
      className="section-padding relative bg-espresso dark:bg-espresso-dark overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label="Coffee Delivered"
          title="Subscription Plans"
          description="Never run out of exceptional coffee. Choose a plan that fits your lifestyle and enjoy fresh roasts delivered to your door."
          light
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {subscriptionPlans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`relative h-full flex flex-col p-8 md:p-10 rounded-3xl transition-all duration-500 ${
                  plan.popular
                    ? "bg-gold text-espresso shadow-gold scale-105 md:scale-110 z-10"
                    : "bg-cream/5 backdrop-blur-sm border border-cream/10 text-cream hover:border-gold/30"
                }`}
                data-cursor="hover"
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-espresso text-gold type-badge rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="mb-8">
                  <h3 className="type-title mb-2">
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.popular ? "text-espresso/70" : "text-cream/60"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="font-display text-5xl">${plan.price}</span>
                  <span
                    className={`text-sm ${
                      plan.popular ? "text-espresso/60" : "text-cream/50"
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className={`mt-0.5 flex-shrink-0 ${
                          plan.popular ? "text-espresso" : "text-gold"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-espresso/80" : "text-cream/70"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "outline" : "secondary"}
                  className={`w-full ${
                    plan.popular
                      ? "!border-espresso !text-espresso hover:!bg-espresso hover:!text-gold"
                      : ""
                  }`}
                >
                  Get Started
                </Button>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
