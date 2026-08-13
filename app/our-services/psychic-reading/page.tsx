"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  Eye,
  Heart,
  Compass,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function PsychicReadingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  const benefits = [
    {
      icon: Eye,
      title: "Clarity on Love & Relationships",
      description:
        "Understand your partner's true feelings, navigate emotional crossroads, and heal distant bonds.",
    },
    {
      icon: Compass,
      title: "Career & Financial Direction",
      description:
        "Identify upcoming opportunities, overcome professional blockages, and make confident business choices.",
    },
    {
      icon: Heart,
      title: "Emotional & Spiritual Healing",
      description:
        "Release lingering anxiety, heal past heartbreaks, and realign your energy with your higher purpose.",
    },
    {
      icon: ShieldCheck,
      title: "Complete Confidentiality",
      description:
        "Every consultation is treated with total privacy, absolute empathy, and non-judgmental guidance.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Schedule Your Session",
      description:
        "Call or send a message via WhatsApp to select a convenient date and time for your consultation.",
    },
    {
      number: "02",
      title: "Intuitive Energy Connection",
      description:
        "Through voice or direct focus, our psychic reader tunes into your energetic aura and spiritual guides.",
    },
    {
      number: "03",
      title: "Receive Deep Clarity & Insight",
      description:
        "Get direct, compassionate answers regarding love, career, obstacles, and future path possibilities.",
    },
    {
      number: "04",
      title: "Actionable Guidance",
      description:
        "Walk away with clear next steps and protective spiritual recommendations tailored to your situation.",
    },
  ];

  const faqs = [
    {
      question: "What information do I need to provide for a reading?",
      answer:
        "Usually, just your first name, date of birth, and any specific questions or areas of concern (love, career, personal growth). You do not need to share extensive background details.",
    },
    {
      question: "How long is a typical psychic reading session?",
      answer:
        "Standard sessions range from 30 to 60 minutes, allowing ample time to address multiple questions and delve deep into spiritual guidance.",
    },
    {
      question: "Can psychic readings be done over the phone or WhatsApp?",
      answer:
        "Yes, absolutely. Spiritual energy transcends distance. Phone and online sessions are just as accurate and insightful as in-person visits.",
    },
    {
      question: "Will I hear bad news or predictions I cannot change?",
      answer:
        "Our readings focus on empowerment, healing, and guidance. Psychic insight shows probable paths and energetic trends; you always retain free will to shape your own future.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#05030e] text-white selection:bg-[#e5c77b] selection:text-black">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-[15%] top-[5%] -z-10 h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[160px]" />
      <div className="pointer-events-none absolute right-[10%] top-[30%] -z-10 h-[450px] w-[450px] rounded-full bg-[#e5c77b]/10 blur-[150px]" />

      {/* Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* -------------------------------------------------------------------------- */}
      {/* Hero Section                                                               */}
      {/* -------------------------------------------------------------------------- */}
      <section className="relative px-6 pb-16 pt-14 md:px-12 lg:px-16 lg:pt-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e5c77b]/30 bg-black/40 px-4 py-1.5 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#e5c77b] animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c77b]">
                  Spiritual Service
                </span>
              </div>

              <h1 className="font-serif text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Psychic Reading
              </h1>

              <p className="mt-6 text-base font-light leading-relaxed text-white/80 md:text-lg">
                Unlock hidden truths, gain profound insight, and receive divine
                intuition regarding love, career, and personal growth. Remove
                life's uncertainty with compassionate guidance.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+15307917775"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#e5c77b] px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(229,199,123,0.4)]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-black transition-colors duration-300 group-hover:text-black" />
                  <span className="text-black transition-colors duration-300 group-hover:text-black">
                    Call +1 (530) 791-7775
                  </span>
                </a>

                <button
                  type="button"
                  onClick={openChat}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-8 py-4 text-sm font-semibold text-blue-400 transition-all hover:bg-blue-500 hover:text-black"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Live Chat</span>
                </button>
              </div>

              {/* Quick Info Badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#e5c77b]" />
                  <span>Available Daily (8 AM – 10 PM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#e5c77b]" />
                  <span>100% Private & Confidential</span>
                </div>
              </div>
            </motion.div>

            {/* Right Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/15 bg-[#0a071d]/80 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                <Image
                  src="/images/psychicreading.jpg"
                  alt="Psychic Reading Consultation"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05030e] via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#0a071d]/80 p-5 backdrop-blur-md">
                  <p className="font-serif text-lg text-[#e5c77b]">
                    "Clarity is the first step toward inner peace."
                  </p>
                  <p className="mt-1 text-xs text-white/60">
                    Trusted spiritual guidance tailored to your exact journey.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* Overview & What to Expect                                                 */}
      {/* -------------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">
        <div className="rounded-3xl border border-white/10 bg-[#0a071d]/60 p-8 backdrop-blur-md md:p-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
              Understand Your Path with Intuitive Guidance
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-white/70">
              A psychic reading is a powerful tool to gain deeper awareness into
              your life's present state and future trajectories. Whether you are
              facing complicated relationship choices, career stagnation, or
              unexplained emotional blockages, intuitive readings offer a clear,
              higher perspective.
            </p>
            <p className="mt-4 text-base font-light leading-relaxed text-white/70">
              Through focused spiritual connection and tarot symbolism, we tune
              into the energetic undercurrents surrounding your life to deliver
              compassionate, truthful answers.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Identify core causes of recurring life issues",
              "Reveal hidden intentions in love relationships",
              "Navigate major career & financial decisions",
              "Receive answers to pressing personal questions",
              "Restore spiritual confidence and peace of mind",
              "Clear aura & emotional blockages",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm text-white/80"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#e5c77b]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* Key Benefits Grid                                                          */}
      {/* -------------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
            How a Psychic Reading Helps You
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Focused spiritual guidance across all vital aspects of your life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-[#0a071d]/60 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[#e5c77b]/40 hover:bg-[#0a071d]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#e5c77b]/30 bg-[#e5c77b]/10 text-[#e5c77b] transition-colors group-hover:bg-[#e5c77b] group-hover:text-black">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-medium text-white group-hover:text-[#e5c77b]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* How It Works (Step-by-Step)                                                */}
      {/* -------------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
            The Consultation Process
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Simple steps to connect with trusted spiritual insight.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-white/10 bg-[#0a071d]/40 p-6 backdrop-blur-md"
            >
              <span className="font-serif text-4xl font-bold text-[#e5c77b]/30">
                {step.number}
              </span>
              <h3 className="mt-3 font-serif text-lg font-medium text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* FAQ Accordion Section                                                      */}
      {/* -------------------------------------------------------------------------- */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-12">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Everything you need to know before your psychic reading session.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a071d]/60 backdrop-blur-md transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-serif text-lg text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#e5c77b] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 text-sm font-light leading-relaxed text-white/70"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* Bottom Call to Action Banner                                               */}
      {/* -------------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">
        <div className="relative overflow-hidden rounded-3xl border border-[#e5c77b]/30 bg-gradient-to-r from-[#0a071d] via-[#120c38] to-[#0a071d] p-10 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,199,123,0.15),transparent_70%)]" />

          <h2 className="font-serif text-3xl font-normal text-white sm:text-4xl md:text-5xl">
            Ready to Discover Your Path?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-light text-white/70 md:text-base">
            Speak directly with our spiritual guidance specialist and receive
            the clarity and peace of mind you deserve today.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+15307917775"
              className="inline-flex items-center gap-2 rounded-full bg-[#e5c77b] px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(229,199,123,0.4)]"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now: +1 (530) 791-7775</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-[#e5c77b] hover:text-[#e5c77b]"
            >
              <span>Book Appointment</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
