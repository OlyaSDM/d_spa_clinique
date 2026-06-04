// import { useEffect, useState } from "react";
// import Lenis from "lenis";

// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import QuoteReveal from "./components/Emotional/Emotional";
// import Loader from "./components/Loader/Loader";
// import ClinicVideo from "./components/ClinicVideo/ClinicVideo";
// import About from "./components/About/About";
// import Services from "./components/Services/Services";
// import Reviews from "./components/Reviews/Reviews";
// import Gallery from "./components/Gallery/Gallery";

// import "./App.css";

// export default function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.3,
//       lerp: 0.06,
//       smoothWheel: true,
//       wheelMultiplier: 0.8,
//       touchMultiplier: 1,
//     });

//     const bg = document.querySelector(".global-bg img") as HTMLElement | null;

//     let rafId = 0;

//     const raf = (time: number) => {
//       lenis.raf(time);

//       const scroll = lenis.scroll;

//       if (bg) {
//         const driftX = Math.sin(time * 0.0002) * 10;
//         const driftY = Math.cos(time * 0.00025) * 6;

//         const breathingScale = 1.15 + Math.sin(time * 0.0003) * 0.01;

//         const blur = Math.min(scroll * 0.01, 4);

//         bg.style.transform = `
//           translate3d(${driftX}px, ${scroll * 0.12 + driftY}px, 0)
//           scale(${breathingScale})
//         `;

//         bg.style.filter = `blur(${blur}px) saturate(1.05) contrast(1.05)`;
//       }

//       rafId = requestAnimationFrame(raf);
//     };

//     rafId = requestAnimationFrame(raf);

//     return () => {
//       cancelAnimationFrame(rafId);
//       lenis.destroy();
//     };
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = loading ? "hidden" : "auto";
//   }, [loading]);

//   return (
//     <>
//       <div className="global-bg">
//         <img src="/images/bg.jpg" alt="" />
//       </div>

//       {loading ? (
//         <Loader onFinish={() => setLoading(false)} />
//       ) : (
//         <>
//           <Header />
//           <main>
//             <Hero />
//             <QuoteReveal />
//             <ClinicVideo />
//             <About />
//             <Services />
//             <Reviews />
//             <Gallery />
//           </main>
//         </>
//       )}
//     </>
//   );
// }



import { useEffect, useState } from "react";
import Lenis from "lenis";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import QuoteReveal from "./components/Emotional/Emotional";
import Loader from "./components/Loader/Loader";
import ClinicVideo from "./components/ClinicVideo/ClinicVideo";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Reviews from "./components/Reviews/Reviews";
import Gallery from "./components/Gallery/Gallery";
import GiftCertificatePage from "./components/Gift/GiftCertificatePage";
import Location from "./components/Location/Location";
import Footer from "./components/Footer/Footer";
import ScrollTop from './components/Scroll/Scroll'




import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const lenis = new Lenis({
    duration: 1.4,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.1,
  });

  const bgImg = document.querySelector(".global-bg img") as HTMLElement | null;

  let currentY = 0;

  function raf(time: number) {
    lenis.raf(time);

    const scroll = lenis.scroll;

    // 🎯 очень мягкое движение
    const targetY = scroll * 0.03;

    // 🎯 инерция (главный “живой” эффект)
    currentY += (targetY - currentY) * 0.06;

    if (bgImg) {
      const breathe = 1.25 + Math.sin(time * 0.0003) * 0.006;
      const driftX = Math.sin(time * 0.00015) * 4;

      bgImg.style.transform = `
        translate3d(${driftX}px, ${currentY}px, 0)
        scale(${breathe})
      `;
    }

    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
}, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <>
      {/* 🌄 GLOBAL BACKGROUND LAYER */}
      <div className="global-bg">
        <img src="/images/bg.jpg" alt="background" />
      </div>

      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <QuoteReveal />
            <ClinicVideo />
            <About />
            <Services />
            <Reviews />
            <Gallery />
            <GiftCertificatePage />
<Location />    
<Footer />
<ScrollTop />
      </main>
        </>
      )}
    </>
  );
}