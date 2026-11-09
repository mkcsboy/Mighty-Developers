import { useEffect } from 'react';

export function useDeckScroll() {
  useEffect(() => {
    let deckO = 0;
    let deckAcc = 0;
    let ty = null;

    const setDeck = (o) => {
      o = Math.max(0, Math.min(1, o));
      if (Math.abs(o - deckO) < 0.002) return;
      deckO = o;
      const el = document.querySelector(".deck");
      if (el) el.style.setProperty("--o", o.toFixed(3));
    };

    const scrolls = () => document.documentElement.scrollHeight > window.innerHeight + 80;

    const handleScroll = () => {
      if (scrolls()) setDeck((window.scrollY || document.documentElement.scrollTop || 0) / 300);
    };

    const handleWheel = (e) => {
      if (scrolls()) return;
      deckAcc = Math.max(0, Math.min(360, deckAcc + e.deltaY));
      setDeck(deckAcc / 300);
    };

    const handleTouchStart = (e) => {
      ty = e.touches && e.touches[0] ? e.touches[0].clientY : null;
    };

    const handleTouchMove = (e) => {
      if (scrolls() || ty === null || !e.touches || !e.touches[0]) return;
      const y = e.touches[0].clientY;
      deckAcc = Math.max(0, Math.min(360, deckAcc + (ty - y)));
      ty = y;
      setDeck(deckAcc / 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("wheel", handleWheel, { passive: true });
    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);
}

