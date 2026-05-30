
import { useEffect, useRef, useState } from "react";
import "./Gallery.css";

const items = [
  {
    type: "ba",
    title: "Hydra Facial",
    before: "images/befor.jpg",
    after: "images/after.jpg",
  },
  {
    type: "image",
    title: "Acne Treatment",
    src: "images/photo_g.jpg",
  },
  {
    type: "ba",
    title: "Skin Rejuvenation",
    before: "images/b.jpg",
    after: "images/a.jpg",
  },
  {
    type: "image",
    title: "Facial Therapy",
    src: "images/photo_g.jpg",
  },
  {
    type: "ba",
    title: "Glow Treatment",
    before: "images/b.jpg",
    after: "images/a.jpg",
  },
  {
    type: "ba",
    title: "Hydra Facial",
    before: "images/befor.jpg",
    after: "images/after.jpg",
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
    <section ref={sectionRef} className="bag">
      <div className="bagContainer">

        {/* TITLE */}
      <div className={`services-title-mask ${visible ? "open" : ""}`}>
        <h2 className="services-title gallery">Gallery</h2>
      </div>

        {/* MOVING GALLERY */}
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
