import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = heroRef.current;

    if (!section) return;

    const letters = section.querySelectorAll(".letter");
    const texts = section.querySelectorAll(".hero-title, .hero-text");

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
        } else {
          letters.forEach((letter) => {
            letter.classList.remove("show");
          });

          texts.forEach((text) => {
            text.classList.remove("show");
          });
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
    <section className="  hero parallax-bg" ref={heroRef}>
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
          <h3 className="hero-title">
            Luxury wellness experience
          </h3>

          <p className="hero-text">
            Premium beauty & wellness clinic experience
          </p>
<button className="hero-btn">
  Book now
  <span className="hero-btn-light" />
</button>
        </div>
      </div>
    </section>
  );
}