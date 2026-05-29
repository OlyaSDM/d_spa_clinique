import { useEffect, useRef, useState } from "react";
import "./Reviews.css";

type Review = {
  name: string;
  text: string;
  role: string;
};

const reviews: Review[] = [
  {
    name: "Anna",
    role: "Client",
    text:
      "One of the most calming experiences I’ve ever had. Everything feels intentional and slow in the best way.",
  },
  {
    name: "Maria",
    role: "Client",
    text:
      "The atmosphere is incredible. You immediately feel safe, relaxed and taken care of.",
  },
  {
    name: "Julia",
    role: "Client",
    text:
      "Not just a treatment — it feels like a reset for the body and mind.",
  },
];

export default function Reviews() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  /* ================= REVEAL ================= */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ================= AUTOPLAY ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="reviews">

      {/* TITLE (как Services mask) */}
      <div className={`services-title-mask ${visible ? "open" : ""}`}>
        <h2 className="reviews-title">What clients feel</h2>
      </div>

      {/* SLIDER */}
      <div className="reviews-slider">
        {reviews.map((r, i) => (
          <div
            key={i}
            className={`review-card ${active === i ? "active" : ""}`}
          >
            <p className="review-text">“{r.text}”</p>

            <div className="review-meta">
              <span>{r.name}</span>
              <span>{r.role}</span>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className={`dots ${visible ? "show" : ""}`}>
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

    </section>
  );
}