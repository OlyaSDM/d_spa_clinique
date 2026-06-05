import { useEffect, useRef, useState } from "react";
import "./Services.css";

type Service = {
  title: string;
  desc: string;
  img: string;
};

const services: Service[] = [
  {
    title: "Body Treatments",
    desc: "Full body renewal & relaxation",
    img: "/images/body.png",
  },
  {
    title: "Face Massages",
    desc: "Lifting rituals & deep release",
    img: "/images/face_massage.png",
  },
  {
    title: "Facial",
    desc: "Advanced skin hydration & glow",
    img: "/images/.webp",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);
  const [visible, setVisible] = useState(false);

  /* ================= CURSOR ================= */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const inside =
        x >= 0 &&
        y >= 0 &&
        x <= rect.width &&
        y <= rect.height;

      if (!inside) {
        setCursorActive(false);
        return;
      }

      setCursor({ x: e.clientX, y: e.clientY });
      setCursorActive(true);
    };

    section.addEventListener("mousemove", handleMove);
    return () => section.removeEventListener("mousemove", handleMove);
  }, []);

  /* ================= REVEAL ================= */
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-wrapper"
      onMouseLeave={() => setCursorActive(false)}
      id="services"
    >
      {/* CURSOR */}
      <div
        className={`custom-cursor ${cursorActive ? "active" : ""}`}
        style={{
          transform: `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)`,
        }}
      >
        <span>VIEW</span>
      </div>

      {/* TITLE */}
      <div className={`services-title-mask ${visible ? "open" : ""}`}>
        <h2 className="services-title">Services</h2>
      </div>

      {/* GRID */}
      <div ref={gridRef} className="services-grid">
        {services.map((item, i) => (
          <div
            key={i}
            className={`service-tile ${visible ? "visible" : ""}`}
            style={
              {
                "--img": `url(${item.img})`,
                transitionDelay: `${i * 0.15}s`,
              } as React.CSSProperties
            }
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <button className="service-more">More</button>
          </div>
        ))}
      </div>
    </section>
  );
}