import { useEffect, useState } from "react";
import "./Header.css";
import logoWhite from "/logo/logo.png";
import logoDark from "/logo/logo.png";
import { Link, useLocation } from "react-router-dom";

type SectionId = "about" | "services" | "reviews" | "gallery" | "contact";

const navItems: SectionId[] = [
  "about",
  "services",
  "reviews",
  "gallery",
  "contact",
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // scroll effect for header style
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNavClick = (id: SectionId) => {
    // 1. закрываем меню сразу
    setMenuOpen(false);

    // 2. если мы НЕ на главной — переходим с параметром
    if (location.pathname !== "/") {
      window.location.href = `/?scroll=${id}`;
      return;
    }

    // 3. даём React обновить UI и потом скроллим
    requestAnimationFrame(() => {
      scrollToSection(id);
    });
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

          {navItems.map((item) => (
            <a key={item} onClick={() => handleNavClick(item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
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
        {navItems.map((item) => (
          <a key={item} onClick={() => handleNavClick(item)}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </>
  );
}