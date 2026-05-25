import { useEffect, useState } from "react";
import Lenis from "lenis";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import QuoteReveal from "./components/Emotional/Emotional";
import Loader from "./components/Loader/Loader";
import ClinicVideo from "./components/ClinicVideo/ClinicVideo";

import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const lenis = new Lenis({
    duration: 1.4,
    lerp: 0.035,
    smoothWheel: true,
    wheelMultiplier: 0.75,
    touchMultiplier: 1,
  });

  const bg = document.querySelector(".global-bg") as HTMLElement | null;

  let frame: number;

  const raf = (time: number) => {
    lenis.raf(time);

    if (bg) {
      const scroll = lenis.scroll;

      bg.style.transform = `
        scale(1.15)
        translateY(${scroll * 0.15}px)
      `;
    }

    frame = requestAnimationFrame(raf);
  };

  frame = requestAnimationFrame(raf);

  return () => {
    if (frame) cancelAnimationFrame(frame);
    lenis.destroy();
  };
}, []);

  // блокируем скролл пока loader активен
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <>
      {/* 🌄 GLOBAL BACKGROUND LAYER */}
      <div className="global-bg" />

      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Header />

          <main>
            <Hero />
            <QuoteReveal />
            <ClinicVideo />
                        <QuoteReveal />

                        <ClinicVideo />

          </main>
        </>
      )}
    </>
  );
}