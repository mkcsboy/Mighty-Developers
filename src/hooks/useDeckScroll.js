import { useEffect } from 'react';

export function useDeckScroll() {
  useEffect(() => {
    let currentO = 0;
    let targetO = 0;
    let rafId = null;

    const calculateTarget = () => {
      const el = document.querySelector(".deck");
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;

      // Smoothly fan open as the deck enters view
      // Starts opening when top of deck enters lower viewport (88% from top)
      // Fully opened when deck is comfortably in view (~32% from top)
      const start = vh * 0.88;
      const end = vh * 0.32;
      const progress = (start - rect.top) / (start - end);
      return Math.max(0, Math.min(1, progress));
    };

    const updateLoop = () => {
      const diff = targetO - currentO;
      if (Math.abs(diff) > 0.001) {
        currentO += diff * 0.3;
        const el = document.querySelector(".deck");
        if (el) {
          el.style.setProperty("--o", currentO.toFixed(3));
        }
        rafId = requestAnimationFrame(updateLoop);
      } else {
        currentO = targetO;
        const el = document.querySelector(".deck");
        if (el) {
          el.style.setProperty("--o", currentO.toFixed(3));
        }
        rafId = null;
      }
    };

    const onScrollOrResize = () => {
      targetO = calculateTarget();
      if (!rafId) {
        rafId = requestAnimationFrame(updateLoop);
      }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    // Initial calculation on mount
    targetO = calculateTarget();
    currentO = targetO;
    const el = document.querySelector(".deck");
    if (el) {
      el.style.setProperty("--o", currentO.toFixed(3));
    }

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}
