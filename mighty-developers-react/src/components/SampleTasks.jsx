import React, { useRef } from 'react';
import { TASKS, STATUS_NAMES, STATUS_COLORS, STATUS_DOTS } from '../data/steps';

export default function SampleTasks({ taskStates, onAdvanceTask }) {
  const carouselRef = useRef(null);

  const scrollCarousel = (dir) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: dir * Math.max(260, carouselRef.current.clientWidth * 0.75),
      behavior: "smooth"
    });
  };

  const cards = TASKS.map((t, i) => ({
    i,
    s: taskStates[i],
    id: t.id,
    title: t.title,
    status: STATUS_NAMES[taskStates[i]],
    col: STATUS_COLORS[taskStates[i]],
    dot: STATUS_DOTS[taskStates[i]],
    pat: "pt" + i,
    deco: taskStates[i] === 3 ? "line-through" : "none",
    pct: [12, 45, 78, 100][taskStates[i]],
    label: `${t.id}: ${t.title}. Status: ${STATUS_NAMES[taskStates[i]].toLowerCase()}. Activate to move it to the next status.`
  }));

  return (
    <section id="samples" aria-labelledby="samples-h" style={{ padding: "20px 0 110px", background: "#FFFFFF" }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px", marginBottom: "28px" }}>
        <div style={{ minWidth: 0, maxWidth: "600px" }}>
          <p className="eyebrow" style={{ marginBottom: "12px" }}>SAMPLE TASKS</p>
          <h2 id="samples-h" className="io-w" data-io style={{ margin: "0 0 8px", fontSize: "clamp(28px,3vw,40px)", lineHeight: 1.08, fontWeight: 800, letterSpacing: "-.035em", color: "#2E1065" }}>
            <span className="w" style={{ "--i": 0 }}>Small,</span>{" "}
            <span className="w" style={{ "--i": 1 }}>clear,</span>{" "}
            <span className="w" style={{ "--i": 2 }}>finishable.</span>
          </h2>
          <p style={{ margin: 0, fontSize: "16px", color: "#57534E" }}>
            Each task has a clear scope, expected output and deadline. Swipe through, tap a card to change its status.
          </p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button type="button" className="circ" aria-label="Scroll tasks left" onClick={() => scrollCarousel(-1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button type="button" className="circ" aria-label="Scroll tasks right" onClick={() => scrollCarousel(1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div className="car" ref={carouselRef} data-car data-io role="list">
          {cards.map((t) => (
            <button
              key={t.id}
              type="button"
              className="cv tkt"
              style={{ "--i": t.i }}
              role="listitem"
              aria-label={t.label}
              onClick={() => onAdvanceTask(t.i)}
            >
              <div className={`tkt-top ${t.pat}`}>
                <span className="chip" style={{ background: "#FFFFFF", color: t.col }}>
                  <span aria-hidden="true" style={{ width: "7px", height: "7px", borderRadius: "50%", background: t.dot }}></span>
                  {t.status}
                </span>
                <span className="mono" style={{ background: "#FFFFFF", color: "#2E1065", fontSize: "11px", fontWeight: 700, padding: "5px 8px", borderRadius: "8px" }}>
                  {t.id}
                </span>
              </div>
              <div className="tkt-body">
                <p style={{ margin: "0 0 14px", fontSize: "17px", lineHeight: 1.3, fontWeight: 800, letterSpacing: "-.015em", color: "#2E1065", textDecoration: t.deco }}>
                  {t.title}
                </p>
                <div className="tkt-cut" aria-hidden="true"></div>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginTop: "14px" }}>
                  <span className="tkt-row">
                    <b>SCOPE</b> Form validation
                  </span>
                  <span className="tkt-row">
                    <b>OUTPUT</b> Test file passing
                  </span>
                </div>
                <div className="tkt-prog" aria-hidden="true">
                  <i style={{ width: `${t.pct}%`, background: t.dot }}></i>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

