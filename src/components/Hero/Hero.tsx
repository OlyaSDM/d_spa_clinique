import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    const letters = section.querySelectorAll<HTMLElement>(".letter");
    const texts = section.querySelectorAll<HTMLElement>(".hero-title, .hero-text");
    const button = section.querySelector<HTMLElement>(".hero-btn-wrap");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          letters.forEach((letter, index) => {
            setTimeout(() => {
              letter.classList.add("show");
            }, index * 260);
          });

          texts.forEach((text, index) => {
            setTimeout(() => {
              text.classList.add("show");
            }, 700 + index * 180);
          });

          setTimeout(() => {
            button?.classList.add("show");
          }, 1200);

        } else {

          letters.forEach((letter) => letter.classList.remove("show"));
          texts.forEach((text) => text.classList.remove("show"));
          button?.classList.remove("show");
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const word = "DSPA";

  return (
    <section className="hero parallax-bg" ref={heroRef}>
      <div className="hero-overlay"></div>

      <div className="hero-center">
        <div className="hero-word">
          {word.split("").map((letter, index) => (
            <span className="letter-wrap" key={index}>
              <span className="letter">{letter}</span>
            </span>
          ))}
        </div>

        <div className="hero-description">
          <h3 className="hero-title">The gentle space for your body, skin & inner calm</h3>

          <p className="hero-text hero-slogan">
  <span>Sculpt</span>
  <span>Lift</span>
  <span>Restore</span>
  <span>Glow</span>
</p>

          <div className="hero-btn-wrap">
            <button className="hero-btn">
              Book now
              <span className="hero-btn-glow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}