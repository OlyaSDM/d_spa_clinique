import { useEffect, useState } from "react";
import Lenis from "lenis";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import QuoteReveal from "./components/Emotional/Emotional";
import Loader from "./components/Loader/Loader";
import ClinicVideo from "./components/ClinicVideo/ClinicVideo";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Reviews from "./components/Reviews/Reviews";
import Gallery from "./components/Gallery/Gallery";
import GiftCertificatePage from "./components/Gift/GiftCertificatePage";
import Location from "./components/Location/Location";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/Scroll/Scroll";

import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  // =========================
  // 🔥 LENIS + SCROLL RESTORE
  // =========================
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
    });

    const savedScroll = sessionStorage.getItem("scrollY");

    // важно: восстановление после инициализации
    requestAnimationFrame(() => {
      if (savedScroll) {
        const y = Number(savedScroll);

        window.scrollTo(0, y);
        lenis.scrollTo(y, { immediate: true });
      }
    });

    let currentY = 0;
    const bgImg = document.querySelector(".global-bg img") as HTMLElement | null;

    function raf(time: number) {
      lenis.raf(time);

      const scroll = lenis.scroll;

      const targetY = scroll * 0.03;
      currentY += (targetY - currentY) * 0.06;

      if (bgImg) {
        const breathe = 1.25 + Math.sin(time * 0.0003) * 0.006;
        const driftX = Math.sin(time * 0.00015) * 4;

        bgImg.style.transform = `
          translate3d(${driftX}px, ${currentY}px, 0)
          scale(${breathe})
        `;
      }

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // =========================
  // 💾 SAVE SCROLL POSITION
  // =========================
  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem("scrollY", String(window.scrollY));
    };

    window.addEventListener("scroll", saveScroll);

    return () => {
      window.removeEventListener("scroll", saveScroll);
    };
  }, []);

  // =========================
  // 🔒 LOCK BODY DURING LOADER
  // =========================
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <>
      <div className="global-bg">
        <img src="/images/bg.jpg" alt="background" />
      </div>

      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <QuoteReveal />
            <ClinicVideo />
            <About />
            <Services />
            <Reviews />
            <Gallery />
            <GiftCertificatePage />
            <Location />
            <Footer />
            <ScrollTop />
          </main>
        </>
      )}
    </>
  );
}