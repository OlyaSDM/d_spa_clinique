export function initParallax() {
  const onScroll = () => {
    const y = window.scrollY;

    document.documentElement.style.setProperty(
      "--scrollY",
      `${y}px`
    );
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}