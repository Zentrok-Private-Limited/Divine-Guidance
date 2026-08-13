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
  Heart,
  HeartHandshake,
  Flame,
  Users,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function LoveSpellPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pillars = [
    {
      icon: HeartHandshake,
      title: "Get Ex Lover Back",
      description:
        "Heal emotional distance, dissolve misunderstandings, and reignite the original spark to restore connection with your partner.",
    },
    {
      icon: Flame,
      title: "Overcome Marriage Hurdles",
      description:
        "Remove toxic third-party influences, rebuild trust, and eliminate recurring conflict to bring harmony back to your marriage.",
    },
    {
      icon: ShieldCheck,
      title: "Divorce & Separation Solutions",
      description:
        "Find peace amidst relationship turmoil, prevent unnecessary separations, or guide painful transitions with positive energy.",
    },
    {
      icon: Users,
      title: "Relationship Harmony",
      description:
        "Strengthen emotional bonds, foster deeper mutual understanding, and align your spiritual energies for long-term commitment.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Private Consultation",
      description:
        "Share your relationship history and specific challenges in a completely confidential and non-judgmental environment.",
    },
    {
      number: "02",
      title: "Energy & Compatibility Assessment",
      description:
        "We analyze the spiritual blockages, external interference, and energetic friction affecting you and your partner.",
    },
    {
      number: "03",
      title: "Focused Spiritual Work",
      description:
        "Customized positive energy rituals, love prayers, and intention alignment performed to remove negative vibrations.",
    },
    {
      number: "04",
      title: "Reconnection & Healing",
      description:
        "Observe positive shifts in communication, emotional openness, and renewed warmth in your relationship.",
    },
  ];

  const faqs = [
    {
      question: "How do love spells and spiritual energy work work?",
      answer:
        "Spiritual love work focuses pure positive energy and intention to dissolve misunderstandings, clear negative vibrations, and open the emotional channels between two individuals.",
    },
    {
      question: "Can this help if my ex partner has stopped talking to me?",
      answer:
        "Yes. Spiritual healing addresses underlying energetic blockages and lingering resentment, helping create a peaceful emotional space for renewed communication and reconciliation.",
    },
    {
      question: "Are love spell consultations confidential?",
      answer:
        "100% strictly confidential. Your names, private details, and situation will never be shared with anyone under any circumstances.",
    },
    {
      question: "How soon can I expect to see changes in my relationship?",
      answer:
        "Results vary depending on the depth of the emotional distance and blockages involved. Many notice subtle shifts in attitude and communication within days of initiating spiritual guidance.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#05030e] text-white selection:bg-[#e5c77b] selection:text-black">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-[15%] top-[5%] -z-10 h-[500px] w-[500px] rounded-full bg-rose-950/25 blur-[160px]" />
      <div className="pointer-events-none absolute right-[10%] top-[30%] -z-10 h-[450px] w-[450px] rounded-full bg-[#e5c77b]/10 blur-[150px]" />

      {/* Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* -------------------------------------------------------------------------- */}
      {/* Hero Section                                                               */}
      {/* -------------------------------------------------------------------------- */}
      <section className="relative px-6 pb-16 md:px-12 lg:px-16 pt-24">
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
                  Spiritual Guidance
                </span>
              </div>

              <h1 className="font-serif text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Love Spells & Relationship Solutions
              </h1>

              <p className="mt-6 text-base font-light leading-relaxed text-white/80 md:text-lg">
                Reconnect hearts, resolve complex marriage obstacles, and restore deep emotional balance. Whether you are seeking to reunite with an ex-partner or save your marriage, trusted spiritual insight can help guide you back to love.
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

                <a
                  href="https://wa.me/15307917775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-8 py-4 text-sm font-semibold text-emerald-400 transition-all hover:bg-emerald-500 hover:text-black"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Consultation</span>
                </a>
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
                  src="/images/getexloverback.jpg"
                  alt="Love Spell and Relationship Guidance"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05030e] via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#0a071d]/80 p-5 backdrop-blur-md">
                  <p className="font-serif text-lg text-[#e5c77b]">
                    "Love is the strongest frequency in the universe."
                  </p>
                  <p className="mt-1 text-xs text-white/60">
                    Restoring lost bonds through positive spiritual energy.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* Detailed Overview                                                         */}
      {/* -------------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">
        <div className="rounded-3xl border border-white/10 bg-[#0a071d]/60 p-8 backdrop-blur-md md:p-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
              Heal Relationships & Reclaim Your Happiness
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-white/70">
              Relationships can experience severe stress due to negative energy, family friction, emotional distance, or misunderstandings. Our love spell and relationship healing services focus on channeling positive energy to clear emotional clutter and realign the hearts of partners.
            </p>
            <p className="mt-4 text-base font-light leading-relaxed text-white/70">
              Whether you are trying to win back an ex-lover, save a marriage from impending divorce, or resolve recurring arguments, our targeted spiritual guidance provides compassionate solutions tailored to your unique circumstances.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Reunite with lost ex-partners",
              "Resolve severe marital conflicts",
              "Prevent unwanted divorce & separation",
              "Remove external third-party interference",
              "Ignite passion, trust & mutual loyalty",
              "Heal lingering emotional heartbreak",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#e5c77b]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* Core Specialties Grid                                                     */}
      {/* -------------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
            Our Love & Relationship Services
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Specialized spiritual support for every love situation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, index) => {
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
      {/* Process Section                                                           */}
      {/* -------------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
            How The Healing Process Works
          </h2>
          <p className="mt-2 text-sm text-white/60">
            A compassionate step-by-step path toward relationship renewal.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
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
            Common questions regarding love spells and relationship healing.
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
                  <span className="font-serif text-lg text-white">{faq.question}</span>
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
      {/* Bottom CTA Banner                                                          */}
      {/* -------------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">
        <div className="relative overflow-hidden rounded-3xl border border-[#e5c77b]/30 bg-gradient-to-r from-[#0a071d] via-[#1c0b2b] to-[#0a071d] p-10 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,199,123,0.15),transparent_70%)]" />

          <h2 className="font-serif text-3xl font-normal text-white sm:text-4xl md:text-5xl">
            Bring Love & Harmony Back Into Your Life
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-light text-white/70 md:text-base">
            Don't let misunderstandings or distance separate you from true love. Get confidential, expert spiritual guidance today.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+15307917775"
              className="group inline-flex items-center gap-2 rounded-full bg-[#e5c77b] px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(229,199,123,0.4)]"
            >
              <Phone className="h-4 w-4 shrink-0 text-black transition-colors duration-300 group-hover:text-black" />
              <span className="text-black transition-colors duration-300 group-hover:text-black">
                Call Now: +1 (530) 791-7775
              </span>
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