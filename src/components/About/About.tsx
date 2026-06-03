import { useEffect, useRef, useState } from "react";
import "./About.css";
import about from "/images/Diana.jpg";

export default function About() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.intersectionRatio > 0.2);
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8],
        rootMargin: "-10% 0px -45% 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" ref={ref} id="about">

      <div className={`about-image-wrap ${visible ? "show" : ""}`}>
        <img src={about} alt="Beauty" className="about-image" />
      </div>

      <div className={`about-content ${visible ? "show" : ""}`}>

        <div className="about-mask">
          <h1 className="about-title">
            Diana <br />
            <span>Tyurina</span>
          </h1>
        </div>

        <div className="about-mask">
          <p className="about-sub">
            Licensed Esthetician <br />
            & Massage Therapist
          </p>
        </div>

        <div className="about-mask">
          
          <p className="about-bio bot">
            {expanded ? (
              <>
                I began my career in medicine as a Pediatrician and Neonatologist before following my passion for wellness, skincare, and therapeutic care. This journey led me to become a certified Esthetician and licensed Massage Therapist.

                For many years, I have helped clients feel confident, refreshed, and cared for through personalized treatments that support both beauty and well-being. My approach combines professional expertise, attention to detail, and genuine care to create a relaxing and effective experience.

                I look forward to welcoming you and helping you feel your best.
              </>
            ) : (
              <>
                I began my career in medicine as a Pediatrician and Neonatologist before following my passion for wellness, skincare and therapeutic care... This journey led me to become a certified Esthetician and licensed Massage Therapist.
              </>
            )}
                      <button
            className="about-readmore"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read less" : "Read more"}
          </button>
          </p>


        </div>

      </div>
    </section>
  );
}