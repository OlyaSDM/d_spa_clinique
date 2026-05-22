import { useEffect, useState } from "react";
import Lenis from "lenis";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import QuoteReveal from "./components/Emotional/Emotional";
import Loader from "./components/Loader/Loader";

import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const lenis = new Lenis({
    duration: 1.4,
    lerp: 0.035,
    smoothWheel: true,
    wheelMultiplier: 0.75,
    touchMultiplier: 1.0,
  });

  let frame: number;

  const raf = (time: number) => {
    lenis.raf(time);
    frame = requestAnimationFrame(raf);
  };

  frame = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(frame);
    lenis.destroy();
  };
}, []);

  // блокируем скролл пока loader активен
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Header />

          <main>
            <Hero />
            <QuoteReveal />
            <Hero />
          </main>
        </>
      )}
    </>
  );
}