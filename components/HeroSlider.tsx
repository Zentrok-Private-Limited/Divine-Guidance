"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
} from "lucide-react";

// Sample slides data
const slides = [
  [
    "Find Solutions to Your Marriage Life Problems",
    "",
    "Call Now +1 530-791-7775",
    "/images/slide1.png",
  ],
  [
    "Discover Your Future Through a Psychic Reading",
    "",
    "Call Now +1 530-791-7775",
    "/images/slide4.jpg",
  ],
  [
    "Find Clarity & Solutions for Your Love Life",
    "",
    "Call Now +1 530-791-7775",
    "/images/slide2.jpg",
  ],
  [
    "Find Clarity in Your Job, Career & Money Matters",
    "",
    "Call Now +1 530-791-7775",
    "/images/slide6.png",
  ],
  [
    "Find Guidance Through Divorce & Relationship Challenges",
    "",
    "Call Now +1 530-791-7775",
    "/images/slide3.png",
  ],
  [
    "Heal Within & Reconnect With Your Inner Self",
    "",
    "Call Now +1 530-791-7775",
    "/images/slide5.jpg",
  ],
];

// Service Cards data
const serviceCards = [
  {
    title: "Are You Struggling in Your Love Life?",
    subtitle:
      "Find clarity in relationships, emotional connections & love challenges",
    image: "/images/getexloverback.jpg",
    link: "/our-services/love-spell",
  },
  {
    title: "Feeling Uncertain About Your Future?",
    subtitle:
      "Gain insight, clarity & deeper guidance about the path ahead",
    image: "/images/psychicreading.jpg",
    link: "/our-services/psychic-reading",
  },
  {
    title: "Facing Challenges in Your Job, Career or Finances?",
    subtitle:
      "Gain clarity on career decisions, opportunities, growth & financial matters",
    image: "/images/money.jpg",
    link: "/our-services/Job-solution",
  },
  {
    title: "Going Through Emotional or Spiritual Struggles?",
    subtitle:
      "Release negativity, restore balance & reconnect with yourself",
    image: "/images/heal.jpg",
    link: "/our-services/spiritual-healing",
  },
  {
    title: "Feeling Stressed, Drained or Out of Balance?",
    subtitle:
      "Restore your energy, balance your chakras & encourage deep relaxation",
    image: "/images/reikihealing.jpg",
    link: "/our-services/Reiki-Healing",
  },
  {
    title: "Feeling Stuck in Your Career or Life?",
    subtitle:
      "Break through mental blocks, shift limiting patterns & gain a new perspective",
    image: "/images/nlp.jpg",
    link: "/our-services/nlp",
  },
  {
    title: "Seeking Protection, Peace or Spiritual Guidance?",
    subtitle:
      "Connect with higher wisdom and find comfort, guidance & inner peace",
    image: "/images/angelhealing.jpg",
    link: "/our-services/Angel-Healing",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  useEffect(() => {
    if (paused) return;

    const timer = window.setTimeout(() => {
      setDirection(1);
      setActive((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearTimeout(timer);
  }, [active, paused]);

  const move = (newDirection: number) => {
    setDirection(newDirection);
    setActive(
      (current) => (current + newDirection + slides.length) % slides.length,
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
    }),
  };

  const [title, copy, cta, image] = slides[active];

  return (
    <div className="w-full bg-[#080616]">
      {/* --------------------------------
          1. COMPACT HERO SLIDER (35-40% Viewport)
      -------------------------------- */}
      <section
        className="relative isolate h-[35vh] min-h-[280px] max-h-[400px] w-full overflow-hidden bg-[#080616] md:h-[40vh]"
        aria-label="Divine Guidance services"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.article
            key={active}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            }}
            className="absolute inset-0 overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={image}
              alt={title}
              fill
              priority={active === 0}
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* Content Container */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-12 lg:px-16">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
                className="max-w-xl"
              >
                {/* Eyebrow */}
                <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e5c77b]">
                  <Sparkles size={11} />
                  <span>Divine Guidance</span>
                </div>

                {/* Heading */}
                <h1 className="font-serif text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl">
                  {title}
                </h1>

                {copy && (
                  <p className="mt-1.5 max-w-md text-xs text-white/80 line-clamp-2 sm:text-sm">
                    {copy}
                  </p>
                )}

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {/* Call Button */}
                  <motion.a
                    href="tel:+15307917775"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.3 }}
                    className="inline-flex items-center gap-2 bg-[#e5c77b] px-4 py-2 text-sm font-semibold tracking-wide text-[#080616] transition-all duration-300 hover:bg-[#f3d387] hover:shadow-[0_0_20px_rgba(229,199,123,0.6)] hover:scale-105"
                  >
                    <span className="text-[#080616]">
                      Call Now: +1 530-791-7775
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-[#080616]"
                    />
                  </motion.a>

                  {/* Chat Button */}
                  <motion.button
                    type="button"
                    onClick={openChat}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                    className="group inline-flex items-center gap-2 border border-[#e5c77b] bg-[#080616]/80 px-4 py-2 text-sm font-semibold tracking-wide text-[#e5c77b] transition-all duration-300 hover:scale-105 hover:bg-[#e5c77b] hover:shadow-[0_0_20px_rgba(229,199,123,0.45)]"
                  >
                    <MessageCircle
                      size={16}
                      className="shrink-0 text-[#e5c77b] transition-colors duration-300 group-hover:text-[#080616]"
                    />

                    <span className="text-[#e5c77b] transition-colors duration-300 group-hover:text-[#080616]">
                      Chat Now
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.article>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute bottom-4 right-6 z-30 flex gap-1.5 md:right-12">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => move(-1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-all hover:border-[#e5c77b] hover:bg-[#e5c77b]/20"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => move(1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-all hover:border-[#e5c77b] hover:bg-[#e5c77b]/20"
          >
            <ChevronRight size={15} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 z-40 h-0.5 w-full bg-white/10">
          <motion.div
            key={active}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 6.5, ease: "linear" }}
            className="h-full origin-left bg-[#e5c77b]"
          />
        </div>
      </section>

      {/* --------------------------------
          2. SERVICES CARDS SECTION
      -------------------------------- */}
      <section className="border-t border-white/10 bg-[#0c0922] py-8 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-9xl">
          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {serviceCards.map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#120d31] p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#e5c77b]/40 hover:bg-[#1a1442] hover:shadow-xl"
              >
                {/* Main Card Content (Clickable) */}
                <a href={service.link} className="flex flex-col flex-1">
                  {/* Image Container */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-black/40">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Title & Subtitle */}
                  <div className="mt-2.5 flex flex-1 flex-col justify-between">
                    <h3 className="font-serif text-xs font-medium text-white transition-colors group-hover:text-[#e5c77b] sm:text-sm">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-[10px] leading-snug text-white/60 sm:text-[11px]">
                      {service.subtitle}
                    </p>
                  </div>
                </a>

                {/* Compact Action Buttons */}
                <div className="mt-4 flex items-center justify-center gap-2 pt-2 border-t border-white/5">
                  {/* Call Button */}
                  <a
                    href="tel:+15307917775"
                    title="Call Now"
                    className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-[#e5c77b] text-[#080616] transition-all duration-300 hover:bg-[#f3d387] hover:scale-105 hover:shadow-[0_0_12px_rgba(229,199,123,0.5)]"
                  >
                    <Phone
                      size={15}
                      className="shrink-0 text-[#080616] stroke-[2.5]"
                    />
                  </a>

                  {/* Chat Button */}
                  <button
                    type="button"
                    onClick={openChat}
                    title="Chat Now"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e5c77b]/40 bg-[#080616]/60 text-[#e5c77b] transition-all duration-300 hover:border-[#e5c77b] hover:bg-[#e5c77b] hover:text-[#080616] hover:scale-105 hover:shadow-[0_0_12px_rgba(229,199,123,0.3)]"
                  >
                    <MessageCircle size={14} className="shrink-0" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
