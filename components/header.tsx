"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  Moon,
  X,
  Mail,
  Phone,
} from "lucide-react";

export const defaultMail = "contact@onlineastrotarot.com";
export const defaultPhone = "+1 530-791-7775";

interface HeaderProps {
  mail?: string;
  phone?: string;
}

export default function Header({
  mail = defaultMail,
  phone = defaultPhone,
}: HeaderProps) {
  // Safe string formatting even if props are explicitly passed as undefined/null
  const safePhone = phone || defaultPhone;
  const safeMail = mail || defaultMail;
  const formattedPhone = safePhone.replace(/[^0-9+]/g, "");

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

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="topbar flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#0a071d] px-6 py-2.5 text-xs text-white/80">
        <span>Private consultations available nationwide CALL US NOW
            <a
            href={`tel:${formattedPhone}`}
            className="mx-6 group inline-flex items-center gap-2 font-medium text-[#e5c77b] transition-colors hover:text-white"
          >
            <span className="relative flex h-3.5 w-3.5 items-center justify-center">
              {/* Outer expanding ring effect */}
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e5c77b]/70 opacity-75" />

              {/* Ringing/Vibrating Icon */}
              <Phone
                size={18}
                className="relative animate-[bounce_1s_infinite] text-[#e5c77b] transition-transform group-hover:scale-110"
              />
            </span>
            <span className="text-[#e5c77b] font-bold text-base animate-[bounce_1s_infinite]">{safePhone}</span>
          </a></span>

        <div className="flex items-center gap-6">
          {/* Clickable Email */}
          <a
            href={`mailto:${safeMail}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-[#e5c77b]"
          >
            <Mail size={14} className="text-[#e5c77b]" />
            <span>{safeMail}</span>
          </a>

          {/* Clickable Ringing/Vibrating Phone Number */}
          
        </div>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <a className="brand" href="/">
          <span className="brand-mark">
            <Moon size={21} />
          </span>
          <span>
            DIVINE GUIDANCE<span>Find Your True Path</span>
          </span>
        </a>

        <nav className="desktop-nav">
          <a href="/">Home</a>

          <details className="nav-dropdown">
            <summary>Our Services</summary>
            <div>
              {serviceLinks.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </details>

          <details className="nav-dropdown">
            <summary>Our Locations</summary>
            <div>
              {locationLinks.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </details>

          {nav.slice(3).map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}

          <a className="nav-cta" href={`tel:${formattedPhone}`}>
            Call Now <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      <div className="belowbar overflow-hidden border-b border-white/10 bg-[#0a071d]">
  <p className="belowbar-text">
    Get your solution through Astro, Tarot, Neuro and Psychic Reading
  </p>
</div>
    </>
  );
}