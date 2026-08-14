"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Moon,
  Sparkle,
  Compass,
  Eye,
  ShieldCheck,
  ArrowUpRight,
  PhoneCall,
  CheckCircle2,
  BookOpen,
  Binary,
} from "lucide-react";

// Services provided by Divine Guidance
const services = [
  {
    icon: Eye,
    title: "Psychic Reading",
    desc: "Gain deep insights into your life's path, unravel future possibilities, and bring complete clarity to uncertainties.",
    href: "/our-services/psychic-reading",
  },
  {
    icon: BookOpen,
    title: "Tarot Card Reading",
    desc: "Unveil hidden dynamics, receive clear answers on relationships, and illuminate your present and future choices.",
    href: "/our-services/tarot-card-reading",
  },
  {
    icon: Binary,
    title: "Numerology & Astrology",
    desc: "Understand your birth chart, cosmic influences, and life numbers to align with your true purpose.",
    href: "/our-services/numerology-astrology",
  },
  {
    icon: Heart,
    title: "Love & Relationship",
    desc: "Restore emotional harmony, strengthen divine connections, and resolve deep-seated love and relationship challenges.",
    href: "/our-services/love-spell",
  },
  {
    icon: Sparkle,
    title: "Spiritual Healing",
    desc: "Cleanse toxic energies, remove spiritual blockages, and shield your aura against negative forces.",
    href: "/our-services/spiritual-healing",
  },
  {
    icon: Compass,
    title: "NLP & Mind Alignment",
    desc: "Reprogram limiting beliefs, overcome subconscious barriers, and realign your mindset for ultimate success.",
    href: "/our-services/nlp",
  },
];

const highlights = [
  "Astrology & Birth Chart Guidance",
  "Tarot Card & Psychic Sight Insights",
  "Numerology Life Path Calculations",
  "100% Confidential Phone Consultations",
];

export default function AboutPage() {
  return (
    <div className="w-full bg-[#080616] text-white">
      {/* --------------------------------
          1. HERO SECTION
      -------------------------------- */}
      <section className="relative isolate overflow-hidden bg-[#080616] py-20 px-6 md:py-28 md:px-12 lg:px-16">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />

        <div className="mx-auto max-w-5xl text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e5c77b]/30 bg-[#e5c77b]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c77b]"
          >
            <Sparkles size={13} />
            <span>Sacred Knowledge & Divine Healing</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl font-medium leading-tight text-white sm:text-5xl md:text-6xl"
          >
            Illuminating Your Path with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#e5c77b] via-[#f3d387] to-[#e5c77b] bg-clip-text text-transparent">
              Peace, Purpose & Wisdom
            </span>
          </motion.h1>

          {/* User Specific Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl font-serif text-lg font-medium text-[#e5c77b] sm:text-xl md:text-2xl"
          >
            "At <span className="text-[#e5c77b]">Divine Guidance </span>, get your solution through Astrology, Tarot Card, Numerology and Psychic Reading"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base"
          >
            We offer profound spiritual clarity and practical solutions for life’s most delicate challenges—from love and marriage to personal transformation.
          </motion.p>
        </div>
      </section>

      {/* --------------------------------
          2. OUR MISSION & VISION
      -------------------------------- */}
      <section className="border-y border-white/10 bg-[#0c0922] py-16 px-6 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c77b]">
              <Sparkles size={13} />
              <span>Who We Are</span>
            </div>
            <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
              A Haven for Spiritual Wisdom & Life Solutions
            </h2>
            <p className="mt-4 leading-relaxed text-white/75">
              Life can often bring unexpected uncertainty—whether in relationships, career, or personal destiny. We help you <strong>get your solution through Astrology, Tarot Card, Numerology and Psychic Reading</strong>, giving you a complete holistic perspective on your current situation.
            </p>
            <p className="mt-3 leading-relaxed text-white/75">
              Our mission is to empower you with direct, honest, and divine answers. We don't just tell you what lies ahead; we provide the spiritual clarity and energetic tools needed to navigate challenges and shape a brighter future.
            </p>

            {/* Checkpoints */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#e5c77b] shrink-0" />
                  <span className="text-sm text-white/85">{item}</span>
                </div>
              ))}
            </div>

            {/* Call Button */}
            <a
              href="tel:+15307917775"
              className="group inline-flex mt-8 items-center gap-2 rounded-full bg-gradient-to-r from-[#e5c77b] via-[#f3d387] to-[#e5c77b] px-6 py-3 text-xs font-bold tracking-wider uppercase text-[#080616] shadow-[0_2px_10px_rgba(229,199,123,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(229,199,123,0.6)] active:scale-95"
            >
              <PhoneCall size={15} className="text-[#080616]" />
              <span className="text-[#080616]">Book Your Reading Now</span>
              <ArrowUpRight className="h-4 w-4 text-[#080616] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Graphic / Image Card */}
          <div className="relative overflow-hidden rounded-2xl border border-[#e5c77b]/20 bg-[#120d31] p-8 text-center shadow-2xl">
            <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 h-40 w-40 rounded-full bg-[#e5c77b]/10 blur-2xl" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e5c77b]/10 border border-[#e5c77b]/30 text-[#e5c77b]">
                <Sparkles size={28} />
              </div>
              <h3 className="mt-4 font-serif text-2xl font-medium text-white">
                "Empower Your Soul, Align Your Energy"
              </h3>
              <p className="mt-2 text-sm italic text-white/70">
                Get your solution through Astrology, Tarot Card, Numerology and Psychic Reading today.
              </p>

              <div className="mt-6 w-full border-t border-white/10 pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <span className="font-serif text-3xl font-semibold text-[#e5c77b]">100%</span>
                    <p className="text-[11px] uppercase tracking-wider text-white/50">Confidential</p>
                  </div>
                  <div>
                    <span className="font-serif text-3xl font-semibold text-[#e5c77b]">Direct</span>
                    <p className="text-[11px] uppercase tracking-wider text-white/50">Phone Readings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------
          3. WHAT WE DO (OUR SERVICES)
      -------------------------------- */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-medium text-[#e5c77b] sm:text-4xl">
              Our Divine Guidance Modalities
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Astrology • Tarot Cards • Numerology • Psychic Sight
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 text-[#e5c77b]/60">
              <span className="h-px w-10 bg-[#e5c77b]/30" />
              <Sparkles size={12} />
              <span className="h-px w-10 bg-[#e5c77b]/30" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#120d31] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e5c77b]/40 hover:bg-[#1a1442] hover:shadow-[0_10px_30px_rgba(229,199,123,0.15)] cursor-pointer"
                >
                  <div>
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#e5c77b]/10 text-[#e5c77b] border border-[#e5c77b]/20 transition-colors group-hover:bg-[#e5c77b] group-hover:text-[#080616]">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-white transition-colors group-hover:text-[#e5c77b]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/65">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center text-xs font-semibold text-[#e5c77b] transition-transform duration-300 group-hover:translate-x-1">
                    <span>Learn More</span>
                    <ArrowUpRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* --------------------------------
          4. CALL TO ACTION BANNER
      -------------------------------- */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#0c0922] py-16 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
            Get Your Solution Today
          </h2>
          <p className="mt-3 text-sm text-white/70 sm:text-base">
            Don't carry the weight of uncertainty alone. Contact us now to receive personal solutions through Astrology, Tarot, Numerology, and Psychic Reading.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+15307917775"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e5c77b] via-[#f3d387] to-[#e5c77b] px-6 py-3 text-xs font-bold tracking-wider uppercase text-[#080616] shadow-[0_2px_10px_rgba(229,199,123,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(229,199,123,0.6)] active:scale-95"
            >
              <PhoneCall size={15} className="text-[#080616]" />
              <span className="text-[#080616]">Call +1 (530) 791-7775</span>
              <ArrowUpRight className="h-4 w-4 text-[#080616] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}