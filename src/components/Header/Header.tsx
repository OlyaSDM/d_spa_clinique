import { useEffect, useState } from "react";
import "./Header.css";
import logoWhite from "/logo/logo.png";
import logoDark from "/logo/logo.png";
import { Link, useLocation } from "react-router-dom";

type SectionId = "about" | "services" | "reviews" | "gallery" | "contact";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const goToSection = (id: SectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/?scroll=${id}`;
      return;
    }

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header
        className={`header ${scrolled ? "scrolled" : ""} ${
          menuOpen ? "menu-open" : ""
        }`}
      >
<Link to="/" className={`logo ${menuOpen ? "hidden" : ""}`}>
  <img src={scrolled ? logoWhite : logoDark} alt="D SPA" />
</Link>

        <nav className="nav">
  <Link to="/">Home</Link>

  <a onClick={() => goToSection("about")}>About</a>
  <a onClick={() => goToSection("services")}>Services</a>

  <a onClick={() => goToSection("reviews")}>Reviews</a>
  <a onClick={() => goToSection("gallery")}>Gallery</a>
  <a onClick={() => goToSection("contact")}>Contact</a>
</nav>

        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a onClick={() => goToSection("about")}>About</a>
        <a onClick={() => goToSection("services")}>Services</a>
        <a onClick={() => goToSection("reviews")}>Reviews</a>
        <a onClick={() => goToSection("gallery")}>Gallery</a>
        <a onClick={() => goToSection("contact")}>Contact</a>
      </div>
    </>
  );
}