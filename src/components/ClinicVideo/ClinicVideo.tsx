import { useEffect, useState } from "react";
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
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setVisible(false);

    setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length);
      setVisible(true);
    }, 500); // быстрее смена внутри fade
  }, 6000); // ⬅️ было 4000, стало медленнее и премиальнее

  return () => clearInterval(interval);
}, []);

  return (
    <section className=" panel experience">

      {/* LEFT */}
      <div className="experience-left">

        <div className={`experience-text ${visible ? "show" : ""}`}>

          <h2>
            Experience <br />
            <span>{slides[active].title}</span>
          </h2>

          <p>{slides[active].text}</p>

        </div>

      </div>

      {/* RIGHT */}
      <div className="experience-right">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="experience-video"
        >
          <source src="public/video/video.MP4" type="video/mp4" />
        </video>

        {/* <div className="video-overlay">
          <button className="play-btn">
            ▶
          </button>
        </div> */}

      </div>

    </section>
  );
}