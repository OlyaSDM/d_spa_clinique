import { useEffect, useRef, useState } from "react";
import "./About.css";
import about from "/images/Diana.jpg";

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

useEffect(() => {
const observer = new IntersectionObserver(
  ([entry]) => {
    setVisible(entry.intersectionRatio > 0.2);
  },
  {
    threshold: [0, 0.2, 0.4, 0.6, 0.8],
    rootMargin: "-10% 0px -45% 0px"
  }
);

  if (ref.current) observer.observe(ref.current);

  return () => observer.disconnect();
}, []);

  return (
    <section className="about" ref={ref}>

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
    <p className="about-bio">
      Licensed esthetician & massage therapist based in Los Angeles.
      Focused on natural skin renewal, relaxation therapy and holistic care.
    </p>
  </div>

</div>

    </section>
  );
}