import { useEffect, useRef, useState } from "react";
import "./About.css";
import about from "../../assets/images/Diana.jpg";

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 👇 ключевой момент: не только ON, но и OFF
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="about" ref={ref}>

      <div className={`about-image-wrap ${visible ? "show" : ""}`}>
        <img src={about} alt="Beauty" className="about-image" />
      </div>

      <div className={`about-content ${visible ? "show" : ""}`}>
        <p className="about-sub">
          Licensed Esthetician & Massage Therapist
        </p>

        <h1 className="about-title">
          Diana <br />
          <span>Tyurina</span>
        </h1>
      </div>

    </section>
  );
}