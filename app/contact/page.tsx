"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Send,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Psychic Reading",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Insert API or Email handler here
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: "How do I prepare for my first psychic or spiritual reading?",
      a: "Come with an open mind and a list of specific questions regarding love, career, or personal direction. Ensure you are in a quiet environment for your session.",
    },
    {
      q: "Are online/phone consultations as effective as in-person sessions?",
      a: "Yes. Spiritual energy and intuitive connection transcend distance. Phone and video consultations deliver the same depth and clarity as in-person visits.",
    },
    {
      q: "Is my personal information and consultation confidential?",
      a: "Strictly confidential. Every reading and personal detail shared is treated with total privacy and discretion.",
    },
    {
      q: "How quickly can I expect a response after booking?",
      a: "We strive to respond to all inquiries within 2 to 4 hours. For urgent spiritual concerns, you can reach us directly via telephone or WhatsApp.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#05030e] text-white selection:bg-[#e5c77b] selection:text-black">
      {/* -------------------------------------------------------------------------- */}
      {/* Ambient Background Glows                                                   */}
      {/* -------------------------------------------------------------------------- */}
      <div className="pointer-events-none absolute left-[20%] top-[5%] -z-10 h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[150px]" />
      <div className="pointer-events-none absolute right-[15%] top-[25%] -z-10 h-[450px] w-[450px] rounded-full bg-[#e5c77b]/10 blur-[150px]" />

      {/* Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* -------------------------------------------------------------------------- */}
      {/* Page Header                                                                */}
      {/* -------------------------------------------------------------------------- */}
      <section className="relative px-6 pt-24 pb-12 text-center md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e5c77b]/30 bg-black/40 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#e5c77b] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c77b]">
              Get In Touch
            </span>
          </div>

          <h1 className="font-serif text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Begin Your Spiritual Journey Today
          </h1>

          <p className="mt-6 text-base font-light leading-relaxed text-white/70 md:text-lg">
            Have questions about your reading, need urgent spiritual guidance,
            or want to schedule a personal consultation? We are here to guide you.
          </p>
        </motion.div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* Main Grid: Form + Direct Contact Details                                   */}
      {/* -------------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between space-y-8 lg:col-span-5"
          >
            <div>
              <h2 className="font-serif text-3xl font-medium text-white">
                Contact Information
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Reach out directly through any of our channels for immediate assistance.
              </p>

              <div className="mt-8 space-y-6">
                {/* Phone Card */}
                <a
                  href="tel:+15307917775"
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0a071d]/60 p-5 backdrop-blur-md transition-all hover:border-[#e5c77b]/50 hover:bg-[#0a071d]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#e5c77b]/30 bg-[#e5c77b]/10 text-[#e5c77b] transition-colors group-hover:bg-[#e5c77b] group-hover:text-black">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-white/50">
                      Call Direct
                    </h3>
                    <p className="mt-1 font-serif text-xl text-white group-hover:text-[#e5c77b]">
                      +1 530-791-7775
                    </p>
                    <p className="mt-0.5 text-xs text-white/60">
                      Instant response during active hours
                    </p>
                  </div>
                </a>

                {/* WhatsApp Action */}
                <a
                  href="https://wa.me/+15307917775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0a071d]/60 p-5 backdrop-blur-md transition-all hover:border-emerald-500/50 hover:bg-[#0a071d]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-black">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-white/50">
                      WhatsApp Chat
                    </h3>
                    <p className="mt-1 font-serif text-xl text-white group-hover:text-emerald-400">
                      Chat on WhatsApp
                    </p>
                    <p className="mt-0.5 text-xs text-white/60">
                      Available 24/7 for confidential messages
                    </p>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:contact@onlineastrotarot.com"
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0a071d]/60 p-5 backdrop-blur-md transition-all hover:border-[#e5c77b]/50 hover:bg-[#0a071d]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#e5c77b]/30 bg-[#e5c77b]/10 text-[#e5c77b] transition-colors group-hover:bg-[#e5c77b] group-hover:text-black">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-white/50">
                      Email Us
                    </h3>
                    <p className="mt-1 font-serif text-lg text-white group-hover:text-[#e5c77b]">
                      contact@onlineastrotarot.com
                    </p>
                    <p className="mt-0.5 text-xs text-white/60">
                      Response within 24 hours
                    </p>
                  </div>
                </a>

                {/* Hours & Location */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0a071d]/30 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white/70">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-white/50">
                      Consultation Hours
                    </h3>
                    <p className="mt-1 text-sm text-white">
                      Monday – Sunday: 8:00 AM – 10:00 PM EST
                    </p>
                    <p className="mt-0.5 text-xs text-white/60">
                      Emergency spiritual healing sessions available upon request
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Booking & Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-white/15 bg-[#0a071d]/80 p-8 backdrop-blur-xl md:p-10">
              {formSubmitted ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#e5c77b]/40 bg-[#e5c77b]/10 text-[#e5c77b]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-white">
                    Message Sent Successfully
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-white/70">
                    Thank you for reaching out. We have received your inquiry and will reach back out to you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-8 rounded-full border border-[#e5c77b] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#e5c77b] transition-all hover:bg-[#e5c77b] hover:text-black"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl text-white">
                      Request a Consultation
                    </h2>
                    <p className="mt-1 text-xs text-white/60">
                      Fill out the details below to schedule your spiritual reading or healing session.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/70">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#e5c77b] focus:outline-none focus:ring-1 focus:ring-[#e5c77b]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/70">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#e5c77b] focus:outline-none focus:ring-1 focus:ring-[#e5c77b]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Phone */}
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/70">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#e5c77b] focus:outline-none focus:ring-1 focus:ring-[#e5c77b]"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/70">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white focus:border-[#e5c77b] focus:outline-none focus:ring-1 focus:ring-[#e5c77b]"
                      >
                        <option value="Psychic Reading" className="bg-[#0a071d]">
                          Psychic Reading
                        </option>
                        <option value="Get Ex Lover Back" className="bg-[#0a071d]">
                          Get Ex Lover Back
                        </option>
                        <option value="Spiritual Healing" className="bg-[#0a071d]">
                          Spiritual Healing
                        </option>
                        <option value="Divorce Problem Solution" className="bg-[#0a071d]">
                          Divorce Problem Solution
                        </option>
                        <option value="Love Spell" className="bg-[#0a071d]">
                          Love Spell
                        </option>
                        <option value="Job & Business Solution" className="bg-[#0a071d]">
                          Job & Business Solution
                        </option>
                        <option value="NLP Healing" className="bg-[#0a071d]">
                          NLP - Neuro-Linguistic
                        </option>
                        <option value="Brahmshakti Healing" className="bg-[#0a071d]">
                          Brahmshakti Healing
                        </option>
                        <option value="Reiki Healing" className="bg-[#0a071d]">
                          Reiki Healing
                        </option>
                        <option value="Angel Healing" className="bg-[#0a071d]">
                          Angel Healing
                        </option>
                        <option value="Healing & Meditation" className="bg-[#0a071d]">
                          Healing & Meditation
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/70">
                      Your Message / Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share brief context about what you'd like guidance on..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#e5c77b] focus:outline-none focus:ring-1 focus:ring-[#e5c77b]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#e5c77b] py-4 text-sm font-semibold text-black transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(229,199,123,0.4)]"
                  >
                    <span>Submit Request</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-center text-[11px] text-white/40">
                    🔒 Your information is 100% confidential and never shared.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
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
            Answers to common questions before scheduling your session.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a071d]/60 backdrop-blur-md transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-serif text-lg text-white">{faq.q}</span>
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
                    {faq.a}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}