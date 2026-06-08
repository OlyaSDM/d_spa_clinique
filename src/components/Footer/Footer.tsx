import "./Footer.css";
import {
  FaFacebookF,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

type SectionId = "about" | "services" | "reviews" | "gallery" | "contact";

export default function Footer() {

  const goToSection = (id: SectionId) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/?scroll=${id}`;
      return;
    }

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer__top">
        <div className="footer__brand">
          <h2>DSpaClinique</h2>
          <p>A space where beauty, care and calm meet in harmony</p>
        </div>

        <div className="footer__nav">
          <a onClick={() => goToSection("about")}>About</a>
          <a onClick={() => goToSection("services")}>Services</a>
          <a onClick={() => goToSection("reviews")}>Reviews</a>
          <a onClick={() => goToSection("gallery")}>Gallery</a>
          <a onClick={() => goToSection("contact")}>Contact</a>
        </div>

        <div className="footer__contact">
          <div className="footer__contact-item">
            <FaMapMarkerAlt />
            <div>
              <p>9410 Anderson Mill Rd #1AB</p>
              <p>Austin, TX 78729</p>
            </div>
          </div>

          <div className="footer__contact-item">
            <FaPhone />
            <a href="tel:+15121234567">(512) 123-4567</a>
          </div>

          <div className="footer__socials">
            <a
              href="https://www.instagram.com/d_spa_clinique/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="/logo/insta.png" alt="Instagram" />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} DSpaClinique</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}