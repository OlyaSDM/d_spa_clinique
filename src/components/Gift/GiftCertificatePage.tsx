import { useEffect, useRef, useState } from "react";
import "./GiftCertificatePage.css";

export default function GiftCertificatePage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  // ================== REVEAL TITLE ==================
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

const observer = new IntersectionObserver(
  ([entry]) => {
    setVisible(entry.isIntersecting);
  },
  {
    threshold: 0,
    rootMargin: "0px 0px -20% 0px"
  }
);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="giftPage" ref={sectionRef}>
      <div className="giftContainer">

        <div className="giftText">
          {/* Animated Title */}
          <div className={`services-title-mask ${visible ? "open" : ""}`}>
            <h2 className="gift-title ">Gift Certificate</h2>
          </div>

          <p>
            Give the gift of beauty, relaxation and self-care.
          </p>

          <button className="giftBtn">Buy Now</button>
        </div>

        <div className={`giftCard ${visible ? "show" : ""}`}>
          <img src="images/gift.png" alt="Gift Certificate" />
        </div>

      </div>
    </section>
  );
}