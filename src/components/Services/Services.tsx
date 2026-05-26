import { useEffect, useState, useRef } from "react";
import "./Services.css";

type Service = {
  title: string;
  desc: string;
  img: string;
};

const services: Service[] = [
  {
    title: "Facial Care",
    desc: "Deep skin renewal & hydration",
    img: "/img/facial.jpg",
  },
  {
    title: "Massage",
    desc: "Relaxation therapy rituals",
    img: "/img/massage.jpg",
  },
  {
    title: "Laser",
    desc: "Advanced skin correction",
    img: "/img/laser.jpg",
  },
  {
    title: "Body Care",
    desc: "Full body regeneration",
    img: "/img/body.jpg",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const move = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const isInside =
        x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;

      if (!isInside) {
        setActive(false);
        return;
      }

      setCursor({ x: e.clientX, y: e.clientY });
      setActive(true);
    };

    section.addEventListener("mousemove", move);

    return () => section.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      className="services-wrapper"
      ref={sectionRef}
      onMouseLeave={() => setActive(false)}
    >
      {/* CUSTOM CURSOR */}
      <div
        className={`custom-cursor ${active ? "active" : ""}`}
        style={{
          transform: `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)`,
        }}
      >
        <span>VIEW</span>
      </div>

      <h2 className="services-title">Services</h2>

      <div className="services-grid">
        {services.map((item, i) => (
          <div
            key={i}
            className="service-tile"
            style={{ "--img": `url(${item.img})` } as React.CSSProperties}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}