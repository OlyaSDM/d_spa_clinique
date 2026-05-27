// import { useEffect, useRef } from "react";
// import "./ClinicVideo.css";

// export default function ClinicVideo() {
//   const ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     let current = 0;
//     let target = 0;
//     let raf: number;

//     const onScroll = () => {
//       const rect = el.getBoundingClientRect();
//       const vh = window.innerHeight;

//       const start = vh * 0.9;
//       const end = vh * 0.3;

//       const progress = (start - rect.top) / (start - end);
//       target = Math.max(0, Math.min(1, progress));
//     };

//     const animate = () => {
//       current += (target - current) * 0.12;

//       const lines = el.querySelectorAll<HTMLElement>(".exp-inner");

//       lines.forEach((line, i) => {
//         const start = i * 0.2;
//         const end = start + 0.8;

//         let p = (current - start) / (end - start);
//         p = Math.max(0, Math.min(1, p));

//         const eased = 1 - Math.pow(1 - p, 3);

//         const y = (1 - eased) * 120;

//         line.style.transform = `translate3d(0, ${y}%, 0)`;
//         line.style.opacity = String(eased);
//       });

//       raf = requestAnimationFrame(animate);
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });

//     onScroll();
//     animate();

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       cancelAnimationFrame(raf);
//     };
//   }, []);

//   return (
//     <section className="experience" ref={ref}>
//       <div className="experience-left">

//         <div className="exp-mask">
//           <h2 className="exp-line h2">
//             <span className="exp-inner">Private space</span>
//           </h2>
//         </div>

//         <div className="exp-mask">
//           <h2 className="exp-line another_text">
//             <span className="exp-inner">
//               Everything <br /> slows down here
//             </span>
//           </h2>
//         </div>

//         <div className="exp-mask">
//           <p className="exp-line another_text2">
//             <span className="exp-inner">
//               You are cared for, <br /> quietly
//             </span>
//           </p>
//         </div>

//       </div>

//       <div className="experience-right">
//         <video autoPlay muted loop playsInline className="experience-video">
//           <source src="/video/video.MP4" type="video/mp4" />
//         </video>
//       </div>
//     </section>
//   );
// }





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
  }
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
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="experience panel">

      {/* LEFT */}
      <div className="experience-left">

        <div className={`experience-text ${visible ? "show" : ""}`}>

          <div className="exp-mask">
            <h2 className="exp-line">
              <span className="exp-inner">
                {slides[active].title}
              </span>
            </h2>
          </div>

          <div className="exp-mask">
            <p className="exp-line">
              <span className="exp-inner">
                {slides[active].text}
              </span>
            </p>
          </div>

          <div className="extra-lines">

            <div className="exp-mask">
              <div className="exp-inner">
                Everything <br /> slows down here
              </div>
            </div>

            <div className="exp-mask">
              <div className="exp-inner">
                You are cared for, <br /> quietly
              </div>
            </div>

          </div>

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
          <source src="/video/video.MP4" type="video/mp4" />
        </video>
      </div>

    </section>
  );
}