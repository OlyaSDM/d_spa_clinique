import { useEffect, useRef } from "react";
import "./Emotional.css";

export default function QuoteReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

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

      const start = vh * 0.85;
      const end = vh * 0.25;

      const progress = (start - rect.top) / (start - end);

      target = clamp(progress);
    };

    const animate = () => {
      // smooth follow
      current += (target - current) * 0.15;

      lines.forEach((line, i) => {
        const step = 0.25;

        const start = i * step;
        const end = start + 0.6;

        // ✔ FIX: используем current, а не clamped
        const p = (current - start) / (end - start);

        const ease = Math.max(0, Math.min(1, Math.pow(p, 4.85)));

        const y = (1 - ease) * 60;

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
        <span className="q-line-inner upp p">
          care and softness
        </span>
      </h3>
    </div>
  );
}