"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  Moon,
  Mail,
  Star,
  X,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export type ServiceItem = [
  title: string,
  description: string,
  image: string,
  href: string,
];

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}
export const mail = "contact@onlineastrotarot.com";
const nav = [
  ["Home", "/"],
  ["Our Services", "/our-services"],
  ["Our Locations", "/our-locations"],
  ["About us", "/#about"],
  ["Testimonials", "/#testimonials"],
  ["Contact us", "/contact"],
];
const serviceLinks = [
  ["Psychic Reading", "/our-services/psychic-reading"],
  ["Love Spell", "/our-services/love-spell"],
  ["Spiritual Healing", "/our-services/spiritual-healing"],
  ["NLP - Neuro-Linguistic Programming", "/our-services/nlp"],
  ["Brahmshakti Healing", "/our-services/Brahmshakti-Healing"],
  ["Reiki Healing", "/our-services/Reiki-Healing"],
  ["Angel Healing", "/our-services/Angel-Healing"],
];
const locationLinks = [
  ["New Jersey", "/our-locations/new-jersey"],
  ["New York", "/our-locations/new-york"],
  ["California", "/our-locations/california"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <nav className="mobile-nav">
          <a href="/" onClick={() => setOpen(false)}>
            Home
          </a>
          <details>
            <summary>Our Services</summary>
            {serviceLinks.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </details>
          <details>
            <summary>Our Locations</summary>
            {locationLinks.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </details>
          {nav.slice(3).map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}

const slides = [
  [
    "Find Solutions to Your Marriage Life Problems",
    "",
    "Call Now For Book Your Appointment",
    "/images/marriage.jpg",
  ],
  [
    "Find Clarity & Solutions for Your Love Life",
    "",
    "Call Now For Book Your Appointment",
    "/images/reading-cards.png",
  ],
  [
    "Find Guidance Through Divorce & Relationship Challenges",
    "",
    "Call Now For Book Your Appointment",
    "/images/divorce.jpg",
  ],
  [
    "Discover Your Future Through a Psychic Reading",
    "",
    "Call Now For Book Your Appointment",
    "/images/reading.jpg",
  ],
  [
    "Heal Within & Reconnect With Your Inner Self",
    "",
    "Call Now For Book Your Appointment",
    "/images/heal.jpg",
  ],
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

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
    <section
      className="relative isolate h-[680px] min-h-[680px] overflow-hidden bg-[#080616] md:h-[760px] md:min-h-[760px]"
      aria-label="Divine Guidance services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* --------------------------------
          SLIDE
      -------------------------------- */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.article
          key={active}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="absolute inset-0 overflow-hidden"
        >
          {/* Image */}
          <Image
            src={image}
            alt={title}
            fill
            priority={active === 0}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,4,18,.68)_0%,rgba(8,5,27,.42)_38%,rgba(10,6,30,.18)_70%,rgba(5,4,18,.30)_100%)]" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#050412]/70 via-[#050412]/20 to-transparent" />

          {/* Celestial glow */}
          <div className="absolute right-[10%] top-[12%] h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

          <div className="absolute bottom-[10%] left-[15%] h-64 w-64 rounded-full bg-amber-300/10 blur-[100px]" />

          {/* --------------------------------
              CONTENT
          -------------------------------- */}
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pb-24 md:px-12 lg:px-16">
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.65,
                ease: "easeOut",
              }}
              className="max-w-3xl"
            >
              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e5c77b]">
                <Sparkles size={14} />
                <span>Divine Guidance</span>
              </div>

              {/* Heading */}
              <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl md:text-7xl lg:text-[78px]">
                {title}
              </h1>

              {copy && (
                <p className="mt-6 max-w-xl text-base leading-7 text-white/75 md:text-lg">
                  {copy}
                </p>
              )}

              {/* CTA */}
              <motion.a
                href="tel:+15307917775"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.45,
                  duration: 0.5,
                }}
                className="button button-gold inline-flex mt-8 items-center gap-2"
              >
                {cta}
                <ArrowUpRight size={17} />
              </motion.a>
            </motion.div>
          </div>
        </motion.article>
      </AnimatePresence>

      {/* --------------------------------
          CONTROLS
      -------------------------------- */}
      <div className="absolute bottom-8 left-6 right-6 z-30 flex items-center justify-between md:bottom-10 md:left-12 md:right-12 lg:left-16 lg:right-16">
        {/* Counter */}
        <div className="hidden items-center gap-3 md:flex">
          <span className="font-serif text-xl text-[#e5c77b]">
            {String(active + 1).padStart(2, "0")}
          </span>

          <span className="h-px w-8 bg-white/30" />

          <span className="text-xs text-white/40">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-1">
          {slides.map(([slideTitle], index) => (
            <button
              key={slideTitle}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => {
                setDirection(index > active ? 1 : -1);
                setActive(index);
              }}
              className="flex h-8 w-8 items-center justify-center"
            >
              <motion.span
                animate={{
                  width: index === active ? 30 : 6,
                  opacity: index === active ? 1 : 0.45,
                }}
                transition={{ duration: 0.3 }}
                className="block h-1.5 rounded-full bg-[#e5c77b]"
              />
            </button>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => move(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:border-[#e5c77b] hover:bg-[#e5c77b]/10"
          >
            <ChevronLeft size={19} />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => move(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:border-[#e5c77b] hover:bg-[#e5c77b]/10"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </div>

      {/* --------------------------------
          PROGRESS BAR
      -------------------------------- */}
      <div className="absolute bottom-0 left-0 z-40 h-0.5 w-full bg-white/10">
        <motion.div
          key={active}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 6.5,
            ease: "linear",
          }}
          className="h-full origin-left bg-[#e5c77b]"
        />
      </div>
    </section>
  );
}
export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
export function ServiceCard({ service, index }: ServiceCardProps) {
  const [title, description, image, href] = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <Link
        href={href}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0a071d]/60 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#e5c77b]/40 hover:shadow-[0_10px_30px_rgba(229,199,123,0.1)]"
      >
        {/* Background Image with Hover Zoom & Gradient Overlay */}
        <div className="relative mb-5 h-48 w-full overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Dark vignette gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a071d] via-[#0a071d]/30 to-transparent" />
        </div>

        {/* Text Content */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="font-serif text-2xl font-medium text-white transition-colors duration-300 group-hover:text-[#e5c77b]">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {description}
            </p>
          </div>

          {/* Card Footer Action */}
          <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase button button-gold">
            <span>Learn More</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <a
            href="tel:+15307917775"
            className="group inline-flex mt-4 items-center gap-2 button button-gold px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-[#080616] shadow-[0_2px_10px_rgba(229,199,123,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(229,199,123,0.6)] active:scale-95"
          >
            <span className="text-[#080616]">Call Now (+1 530-791-7775)</span>
            <ArrowUpRight className="h-4 w-4 text-[#080616] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Link>
    </motion.div>
  );
}
export function Rating() {
  return (
    <div className="stars" aria-label="Five star rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={15} fill="currentColor" />
      ))}
    </div>
  );
}
