import { ArrowUpRight } from "lucide-react";
import { SectionHeading, Shell } from "@/components/site";
import { locations } from "@/lib/content";

export default function LocationsPage() {
  return (
    <Shell>
      <main>
        <section className="page-hero">
          <p className="eyebrow">Nationwide access</p>
          <h1>Our Locations</h1>
          <p>
            Connect from anywhere in the USA through a private phone or online
            consultation.
          </p>
        </section>
        <section className="section-shell locations">
          <SectionHeading
            eyebrow="Serving clients across the country"
            title="A private reading, wherever you are"
          />
          <div className="location-grid location-links">
            {locations.map((location) => (
              <a
                key={location}
                href={`/our-locations/${location.toLowerCase().replaceAll(" ", "-")}`}
              >
                {location}
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  );
}
