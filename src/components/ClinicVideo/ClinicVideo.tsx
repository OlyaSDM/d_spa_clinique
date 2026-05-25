import { useEffect, useRef, useState } from "react";
import "./ClinicVideo.css";

const slides = [
  {
    title: "Skin Renewal",
    text: "Deep hydration and natural glow restoration",
  },
  {
    title: "Body Harmony",
    text: "Relax tension and restore inner balance",
  },
  {
    title: "Mind Relaxation",
    text: "A calm ritual for body and mind",
  },
];

export default function ClinicVideo() {
  const ref = useRef<HTMLElementTagNameMap["section"] | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
    const el = ref.current;
    if (!el) return;

    const scrollTop = window.scrollY;
    const elementTop = el.offsetTop;
    const elementHeight = el.offsetHeight;
    const windowHeight = window.innerHeight;

    const progress =
      (scrollTop - elementTop + windowHeight) /
      (elementHeight + windowHeight);

    const clamped = Math.max(0, Math.min(1, progress));

    const index = Math.floor(clamped * slides.length);

    setActive(Math.min(slides.length - 1, index));
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <section ref={ref} className="experience">

      <div className="experience-left">
        <div key={active} className="experience-text show">

          <h2>
            Experience <br />
            <span>{slides[active].title}</span>
          </h2>

          <p>{slides[active].text}</p>

        </div>
      </div>

      <div className="experience-right">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="experience-video"
        >
          <source src="/video/video.MP4" type="video/mp4" />
        </video>

        <div className="video-overlay">
          <button className="play-btn">▶</button>
        </div>
      </div>

    </section>
  );
}