import { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);

  // resize tracker
  useEffect(() => {
    const onResize = () => {
      const desktop = window.innerWidth > 900;
      setIsDesktop(desktop);

      // закрываем меню при переходе в desktop
      if (desktop) setMenuOpen(false);

      // сбрасываем scrolled на мобилке
      if (!desktop) setScrolled(false);
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  // scroll effect только для desktop
  useEffect(() => {
    const onScroll = () => {
      if (!isDesktop) return;

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="D SPA" />
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((p) => !p)}
        >
          <span />
          <span />
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </>
  );
}