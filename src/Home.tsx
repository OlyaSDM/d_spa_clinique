import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import QuoteReveal from "./components/Emotional/Emotional";
import ClinicVideo from "./components/ClinicVideo/ClinicVideo";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Reviews from "./components/Reviews/Reviews";
import Gallery from "./components/Gallery/Gallery";
import GiftCertificatePage from "./components/Gift/GiftCertificatePage";
import Location from "./components/Location/Location";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scroll");

    if (scrollTo) {
      const el = document.getElementById(scrollTo);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section>
        <QuoteReveal />
      </section>

      <section>
        <ClinicVideo />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="reviews">
        <Reviews />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="gift">
        <GiftCertificatePage />
      </section>

      <section id="contact">
        <Location />
      </section>
    </>
  );
}