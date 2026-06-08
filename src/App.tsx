import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/Scroll/Scroll";

import HomePage from "./Home";
import ServicesPage from "./components/ServicesPage/ServicesPage";

import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
    });

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

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