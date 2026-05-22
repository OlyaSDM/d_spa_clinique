import { useEffect, useRef } from "react";
import "./Emotional.css";

export default function QuoteReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const lines = Array.from(
      el.querySelectorAll<HTMLElement>(".q-line-inner")
    );

    let current = 0;
    let target = 0;

    const clamp = (v: number) => Math.max(0, Math.min(1, v));

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // ⚡ КОРОТКОЕ SCROLL-ОКНО (быстрое появление)
      const start = vh * 0.85;
      const end = vh * 0.25;

      const progress = (start - rect.top) / (start - end);

      target = clamp(progress);
    };

const animate = () => {
  current += (target - current) * 0.18;

  const vh = window.innerHeight;

  lines.forEach((line, i) => {
    const rect = line.parentElement!.getBoundingClientRect();

    // 🔥 локальный progress КАЖДОЙ строки
    const raw = 1 - rect.top / vh;

    const p = Math.max(0, Math.min(1, raw - i * 0.12));

    const ease = p * p * (3 - 2 * p);

    const y = (1 - ease) * 120;

    line.style.transform = `translateY(${y}%)`;
    line.style.opacity = `${ease}`;
  });

  requestAnimationFrame(animate);
};

    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();
    animate();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="quote-wrap" ref={ref}>
      <h3 className="q-line">
        <span className="q-line-inner upp">
          DSpaClinique is a space
        </span>
      </h3>

      <h3 className="q-line italic left">
        <span className="q-line-inner">
          where beauty becomes a ritual of calm,
        </span>
      </h3>

      <h3 className="q-line lleft">
        <span className="q-line-inner upp">
          care and softness
        </span>
      </h3>
    </div>
  );
}