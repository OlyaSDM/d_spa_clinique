import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";

import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/Scroll/Scroll";

import HomePage from "./Home";
import ServicesPage from "./components/ServicesPage/ServicesPage";

import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  // =========================
  // INIT LENIS
  // =========================
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // =========================
  // LOCK SCROLL DURING LOADER
  // =========================
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  // =========================
  // RESET SCROLL ON ROUTE CHANGE
  // =========================
  useEffect(() => {
    const lenis = lenisRef.current;

    // stop smooth scroll first (important)
    if (lenis) {
      lenis.stop();
    }

    // hard reset
    window.scrollTo(0, 0);

    // restart lenis after DOM updates
    const timeout = setTimeout(() => {
      if (lenis) {
        lenis.start();
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

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

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>

          <Footer />
          <ScrollTop />
        </>
      )}
    </>
  );
}