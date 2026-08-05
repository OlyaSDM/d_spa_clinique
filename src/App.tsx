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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const location = useLocation();

  // =========================
  // START BACKGROUND MUSIC
  // =========================
const startMusic = () => {
  const audio = audioRef.current;

  if (!audio) return;

  const playAudio = () => {
    audio.volume = 0;

    audio.play()
      .then(() => {
        let volume = 0;

        const fade = setInterval(() => {
          volume += 0.02;

          audio.volume = volume;

          if (volume >= 0.25) {
            clearInterval(fade);
          }
        }, 100);
      })
      .catch((error) => {
        console.log(error);
      });

    document.removeEventListener("click", playAudio);
    document.removeEventListener("touchstart", playAudio);
  };


  document.addEventListener(
    "click",
    playAudio,
    { once: true }
  );

  document.addEventListener(
    "touchstart",
    playAudio,
    { once: true }
  );
};

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

    if (lenis) {
      lenis.stop();
    }

    window.scrollTo(0, 0);

    const timeout = setTimeout(() => {
      if (lenis) {
        lenis.start();
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [location.pathname]);


  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/relax.mp3"
        loop
      />

      <div className="global-bg">
        <img src="/images/bg.jpg" alt="background" />
      </div>

      {loading ? (
        <Loader
          onFinish={() => {
            setLoading(false);
            startMusic();
          }}
        />
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