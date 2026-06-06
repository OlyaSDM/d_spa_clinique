import { useEffect, useRef } from "react";
import "./Emotional.css";

export default function QuoteReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const lines = Array.from(
      el.querySelectorAll<HTMLElement>(".q-line")
    );

    let current = 0;
    let target = 0;

    const clamp = (v: number) => Math.max(0, Math.min(1, v));

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      const start = vh * 0.9;
      const end = vh * 0.25;

      const progress = (start - rect.top) / (start - end);
      target = clamp(progress);
    };

    const animate = () => {
      current += (target - current) * 0.12;

      lines.forEach((line, i) => {
        const step = 0.24;

        const start = i * step;

        const end = start + 0.95;

        let p = (current - start) / (end - start);

        p = Math.max(0, Math.min(1, p));

        const eased = 1 - Math.pow(1 - p, 3);

        const final = i === lines.length - 1 ? Math.min(1, eased * 1.05) : eased;

        const inner = line.querySelector<HTMLElement>(".q-line-inner");
        if (!inner) return;

inner.style.transform = `
  translateY(${(1 - final) * 140}%)
  translateZ(0)
`;
inner.style.filter = `blur(${(1 - final) * 6}px)`;
        inner.style.opacity = `${final}`;
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
          <span className="D">DSpaClinique</span> is a space
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