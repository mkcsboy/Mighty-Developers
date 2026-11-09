import { useEffect } from 'react';

export function useIntersectionObserver() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-io],.io-w,.io-l,.fwv,.car");
    if (!els.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        const el = en.target;
        if (en.isIntersecting && !el.classList.contains("is-in")) {
          const d = parseInt(el.getAttribute("data-io-delay") || "0", 10);
          if (d) setTimeout(() => el.classList.add("is-in"), d);
          else el.classList.add("is-in");
        } else if (!en.isIntersecting) {
          el.classList.remove("is-in");
        }
      });
    }, { threshold: [0, 0.12, 0.25, 0.5] });

    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);
}

