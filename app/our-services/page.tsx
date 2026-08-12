import { ArrowUpRight } from "lucide-react";
import { SectionHeading, ServiceCard, Shell } from "@/components/site";
import { serviceCatalog } from "@/lib/content";

export default function ServicesPage() {
  return (
    <Shell>
      <main>
        <section className="page-hero">
          <p className="eyebrow">Private spiritual guidance</p>
          <h1>Our Services</h1>
          <p>
            Thoughtful astrology and psychic services for love, clarity,
            healing, and personal direction.
          </p>
        </section>
        <section className="section-shell services">
          <SectionHeading
            eyebrow="Explore your options"
            title="Support for the questions you carry"
          />
          <div className="service-grid">
            {serviceCatalog.map((service, index) => (
              <ServiceCard key={service[0]} service={service} index={index} />
            ))}
          </div>
        </section>
        <section className="contact">
          <div>
            <p className="eyebrow">Start with one question</p>
            <h2>Find the session that feels right for you.</h2>
          </div>
          <a className="button button-gold" href="tel:+15307917775">
            Book a consultation <ArrowUpRight size={17} />
          </a>
        </section>
      </main>
    </Shell>
  );
}
