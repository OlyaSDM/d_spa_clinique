import { useEffect } from "react";
import "./Hero.css";

export default function Hero() {

  useEffect(() => {

    const letters = document.querySelectorAll(".letter");

    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("show");
      }, index * 120);
    });

  }, []);

  const word = "DSPA";

  return (
    <section className="hero parallax-bg">

      <div className="hero-overlay"></div>

      <div className="hero-center">

        <div className="hero-word">

          {word.split("").map((letter, index) => (
            <span className="letter-wrap" key={index}>
              <span className="letter">
                {letter}
              </span>
            </span>
          ))}

        </div>

        <div className="hero-description">
          <h3>Luxury wellness experience</h3>

          <p>
            Premium beauty & wellness clinic experience.
          </p>
        </div>

      </div>

    </section>
  );
}