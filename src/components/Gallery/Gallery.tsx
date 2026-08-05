
import { useEffect, useRef, useState } from "react";
import "./Gallery.css";

const items = [
  {
    type: "ba",
    title: "Men's Facial",
    before: "images/befor.jpg",
    after: "images/after.jpg",
  },
  {
    type: "image",
    title: "Facial",
    src: "images/facial_b.jpg",
  },
      {
    type: "ba",
    title: "Celluma",
    before: "images/celluma.jpg",
    after: "images/celluma_1.jpg",
  },
  {
    type: "image",
    title: "Facial",
    src: "images/facial_led.jpg",
  },

  {
    type: "image",
    title: "Comprehensive Facial Cleansing",
    src: "images/facial.jpg",
  },
    {
    type: "ba",
    title: "Skin Rejuvenation",
    before: "images/befor2.jpg",
    after: "images/after2.jpg",
  },
  {
    type: "image",
    title: "Glow Treatment",
    src: "images/glow.jpg",
  },
    {
    type: "image",
    title: "Body Cupping",
    src: "images/body.jpg",
  },
  
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section ref={sectionRef} className="bag" id="gallery">
      <div className="bagContainer">

      <div className={`services-title-mask ${visible ? "open" : ""}`}>
        <h2 className="gallery-title ">Gallery</h2>
      </div>

        <div className="galleryWrap">
          <div className="bagGrid">

            {[...items, ...items].map((item, i) => (
<div className="bagCard" key={i}>
  {item.type === "image" && (
    <img
      className="simpleImage"
      src={item.src}
      alt={item.title}
    />
  )}

  {item.type === "ba" && (
    <BeforeAfterCard item={item} />
  )}

  <div className="cardOverlay">
    <div className="bagTitle">{item.title}</div>
  </div>
</div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

function BeforeAfterCard({ item }: any) {
  const [pos, setPos] = useState(50);

  const ref = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    let x = ((clientX - rect.left) / rect.width) * 100;

    x = Math.max(0, Math.min(100, x));

    setPos(x);
  };

  const start = () => {
    dragging.current = true;
  };

  const stop = () => {
    dragging.current = false;
  };

  const onMove = (e: any) => {
    if (!dragging.current) return;

    const x = e.touches
      ? e.touches[0].clientX
      : e.clientX;

    move(x);
  };

  return (
    <div
      className="slider"
      ref={ref}
      onMouseDown={start}
      onMouseUp={stop}
      onMouseLeave={stop}
      onMouseMove={onMove}
      onTouchStart={start}
      onTouchEnd={stop}
      onTouchMove={onMove}
    >
      {/* AFTER */}
      <img
        className="after"
        src={item.after}
        alt="after"
      />

      {/* BEFORE */}
      <div
        className="before"
        style={{ width: `${pos}%` }}
      >
        <img
          src={item.before}
          alt="before"
        />
      </div>

      {/* LINE */}
      <div
        className="line"
        style={{ left: `${pos}%` }}
      >
        <div className="handle">⇆</div>
      </div>
    </div>
  );
}
