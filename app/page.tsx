import { ArrowUpRight } from "lucide-react";
import {
  Rating,
  SectionHeading,
  ServiceCard,
} from "@/components/site";
  
import HeroSlider from "@/components/HeroSlider"
import { locations, serviceCatalog } from "@/lib/content";

const testimonials = [
  [
    "Amily Moalin",
    "I found hope again through the guidance I received. The reading was compassionate, clear, and genuinely helpful.",
  ],
  [
    "Adam Smith",
    "My relationship felt impossible to repair, but the advice helped me find peace and a new way forward.",
  ],
  [
    "Jhon Deo",
    "The psychic reading was incredibly accurate. I felt understood and left with practical clarity.",
  ],
];

export default function Home() {
  return (
    <>
      <main>
        <HeroSlider />
        <section id="services" className="section-shell services relative py-20">
  <SectionHeading
    eyebrow="Our services"
    title="Trusted guidance for every chapter of life"
  />

  <div className="service-grid mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {serviceCatalog.map((service, index) => (
      <ServiceCard key={service[0]} service={service} index={index} />
    ))}
  </div>

  <div className="mt-12 flex justify-center">
    <a
      className="button button-gold centered-button inline-flex items-center gap-2 bg-[#e5c77b] px-8 py-4 text-sm font-light text-black transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(229,199,123,0.4)]"
      href="tel:+15307917775"
    >
      Ask your question now <ArrowUpRight size={17} />
    </a>
  </div>
</section>

<section id="about" className="section-shell about">
          <div className="about-image">
            <img
              src="/images/calm-mind.jpg"
              alt="Stars across a deep blue night sky"
            />
          </div>
          <div>
            <p className="eyebrow">A calm place to find clarity</p>
            <h2>Guidance for the questions that matter most</h2>
            <p>
              When life feels uncertain, a thoughtful reading can help you see
              your choices with fresh perspective. Private astrology and psychic
              sessions combine intuitive insight with compassionate
              conversation, giving you space to understand relationships,
              career, personal growth, and the energy around you.
            </p>
            <p>
              Every session is personal, confidential, and centered on helping
              you feel more grounded and empowered in your own decisions.
            </p>
            <a className="button button-gold centered-button hover:text-black" href="/our-services">
              Explore all services <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section className="split-section">
          <div>
            <p className="eyebrow">An experienced, human approach</p>
            <h2>Insight that helps you move with intention</h2>
            <p>
              Astrology can reveal patterns. A psychic reading can illuminate
              what has been difficult to name. Together, they offer a grounded
              way to reflect, choose, and move forward.
            </p>
            <a className="button button-gold mt-8" href="tel:+15307917775">
              Book a private consultation <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="stats">
            <strong>30</strong>
            <span>
              Years of experience offering thoughtful spiritual guidance
            </span>
            <strong>19k+</strong>
            <span>
              People supported through love, life, and personal transitions
            </span>
            <strong>25k+</strong>
            <span>Private consultations held for clients around the world</span>
            <strong>100%</strong>
            <span>Confidential sessions with your privacy at the center</span>
          </div>
        </section>
        <section id="locations" className="section-shell locations">
          <SectionHeading
            eyebrow="Our locations"
            title="Available across the USA, wherever you are"
          />
          <p>
            Connect by phone or online from New Jersey, New York, California,
            Texas, Florida, and beyond. Distance is never a barrier to a private
            and meaningful session.
          </p>
          <div className="location-grid">
            {locations.map((location) => (
              <a
                key={location}
                href={`/our-locations/${location.toLowerCase().replaceAll(" ", "-")}`}
              >
                {location}
              </a>
            ))}
          </div>
          <a className="text-link" href="/our-locations">
            View all locations <ArrowUpRight size={15} />
          </a>
        </section>
        <section className="split-section dark">
          <div>
            <p className="eyebrow">Create space for a new beginning</p>
            <h2>Release heavy energy and return to yourself</h2>
          </div>
          <p>
            When life feels clouded by negativity, fear, or repeated setbacks,
            spiritual guidance can help you reconnect with calm. Explore
            supportive approaches to healing, energy cleansing, and protection
            in a private setting designed around your comfort.
          </p>
        </section>
        <section id="testimonials" className="section-shell testimonials">
          <SectionHeading
            eyebrow="Client reflections"
            title="Real stories from people seeking a clearer path"
          />
          <div className="testimonial-grid">
            {testimonials.map(([name, text]) => (
              <article key={name}>
                <Rating />
                <p>{text}</p>
                <strong>{name}</strong>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="contact">
          <div>
            <p className="eyebrow">
              Your next chapter starts with a conversation
            </p>
            <h2>Ready to ask your question?</h2>
            <a className="button button-gold" href="tel:+15307917775">
              Call now +1 530-791-7775 <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="contact-details">
            <p>Available for phone and WhatsApp consultations</p>
            <p>Monday–Saturday by appointment</p>
            <p>Confidential, compassionate, and personal</p>
          </div>
        </section>
      </main>
    </>
  );
}
