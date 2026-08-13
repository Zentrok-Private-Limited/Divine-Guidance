import {
  Moon
} from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div>
        <a className="brand" href="/">
          <span className="brand-mark">
            <Moon size={21} />
          </span>
          <span>DIVINE GUIDANCE</span>
        </a>
        <p>
          Private spiritual guidance for love, clarity, healing, and the road
          ahead.
        </p>
        <small>© 2026 Divine Guidance. All rights reserved.</small>
      </div>
      <div>
        <h3>Explore</h3>
        <a href="/our-services">Our Services</a>
        <a href="/our-locations">Our Locations</a>
        <a href="/#about">About us</a>
        <a href="/#testimonials">Testimonials</a>
      </div>
      <div>
        <h3>Contact</h3>
        <p>
          <a href="tel:+15307917775">Call us : +1 530-791-7775</a>
        </p>
        <p>
          <a href="mailto:contact@onlineastrotarot.com">
            Email us : contact@onlineastrotarot.com
          </a>
        </p>
        <p>2767 John F Kennedy Blvd, Jersey City, New Jersey 07306</p>
      </div>
    </footer>
  );
}