import { useEffect, useRef, useState } from "react";
import "./Reviews.css";

type Review = {
  name: string;
  text: string;
  role: string;
};

const reviews: Review[] = [
  {
    name: "Keren Florian",
    role: "Client",
    text:
      "Diana is the best! My skin has gotten so much improved and each treatment is so much fun and with great results. I can’t wait for my next one..",
  },
  {
    name: "Bar Golan",
    role: "Client",
    text:
      `Diana is the best!Our family has been getting massages and facials for a few years and will never go to another place again.Diana is kind, professional, caring and really cares about providing the best experience.Thank you Diana! Can’t wait to my next facial!`,
  },
  {
    name: "Sasha Nikashova",
    role: "Client",
    text:
      "I’ve been going to diana for years ! She has the most relaxing facials and massages that I have ever had done. If you want your clogged pores gone or just want a dreamy massage, she listens very carefully to your concerns and goes above and beyond to make sure you are taken care of. Absolutely the best esthetician with very affordable prices. I 100% recommend going to her if you want a self-care day.",
  },
    {
    name: "Gili Meidan",
    role: "Client",
    text:
      "I can’t recommend Diana (D Spa Clinique) enough! I have been a loyal client of Diana for 8 years now, and I wouldn't go anywhere else.She is a true professional with magic hands. Not only did my skin look absolutely glowing and refreshed after her facial, but she also worked wonders on my body. It’s the perfect combination of professional skincare and a deep, healing massage. I always leave feeling like a new person. It's a 10/10 experience every single time.",
  },
    {
    name: "Sofia Lobynicheva",
    role: "Client",
    text:
      "I had the most amazing experience with Diana at D Spa Clinique. I came in for my very first facial as a teenager and she made me feel so comfortable and welcome right away. She explained everything, was super gentle, and made the whole appointment relaxing and enjoyable. My skin felt incredible afterward and I couldn’t believe the glow. You can tell she really cares about her clients and loves what she does. I will definitely be coming back and highly recommend her to anyone, especially if it’s your first facial.",
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
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="reviews" id="reviews">

      {/* TITLE (как Services mask) */}
      <div className={`services-title-mask ${visible ? "open" : ""}`}>
        <h2 className="feel-title ">What clients feel</h2>
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