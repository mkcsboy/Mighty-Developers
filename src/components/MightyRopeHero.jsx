import React, { useState, useEffect, useRef, useId, useMemo } from 'react';

// Geometry calculations
function rounded(p, r) {
  let d = "M" + p[0][0] + " " + p[0][1];
  for (let i = 1; i < p.length - 1; i++) {
    const a = p[i - 1], c = p[i], b = p[i + 1];
    const la = Math.hypot(a[0] - c[0], a[1] - c[1]);
    const lb = Math.hypot(b[0] - c[0], b[1] - c[1]);
    const rr = Math.min(r, la / 2, lb / 2);
    d += " L" + (c[0] + (a[0] - c[0]) / la * rr) + " " + (c[1] + (a[1] - c[1]) / la * rr) +
         " Q" + c[0] + " " + c[1] + " " + (c[0] + (b[0] - c[0]) / lb * rr) + " " + (c[1] + (b[1] - c[1]) / lb * rr);
  }
  const l = p[p.length - 1];
  return d + " L" + l[0] + " " + l[1];
}

const ROWS = [
  {
    w: "MIGHTY",
    step: 200,
    x0: 300,
    hi: 130,
    lo: 240,
    size: 170,
    rot: [-6, 5, -4, 7, -5, 4],
    sc: [1, 0.92, 1.06, 0.95, 1.08, 0.9]
  },
  {
    w: "DEVELOPERS",
    step: 135,
    x0: 192.5,
    hi: 520,
    lo: 610,
    size: 120,
    rot: [5, -6, 4, -5, 7, -4, 5, -7, 4, -5],
    sc: [1, 0.94, 1.06, 0.92, 1.05, 0.96, 1.08, 0.93, 1, 0.95]
  }
];

function lvl(r, i) {
  return i % 2 ? r.hi : r.lo;
}

const TILES = [
  [90, 110, "{ }"],
  [800, 42, "</>"],
  [1545, 260, "( )"],
  [1540, 665, "#"]
];

export default function MightyRopeHero() {
  const baseId = useId().replace(/:/g, "_");
  const ropeId = `${baseId}-rope`;
  const containerRef = useRef(null);
  const parRef = useRef(null);
  const [sparkles, setSparkles] = useState([]);

  // Deterministic rope path geometry
  const ropePath = useMemo(() => {
    const pts = [];
    ROWS.forEach((r, ri) => {
      if (ri === 0) {
        pts.push([-20, lvl(r, 0)]);
      } else {
        pts.push([125, 610]);
      }
      for (let i = 0; i < r.w.length - 1; i++) {
        const xb = r.x0 + i * r.step + r.step / 2;
        pts.push([xb, lvl(r, i)], [xb, lvl(r, i + 1)]);
      }
      if (ri === 0) {
        pts.push([1480, lvl(r, r.w.length - 1)], [1480, 360], [125, 360]);
      } else {
        pts.push([1530, lvl(r, r.w.length - 1)]);
      }
    });
    return rounded(pts, 34);
  }, []);

  // Generate sparkles on client to prevent hydration mismatch
  useEffect(() => {
    const generated = Array.from({ length: 16 }, (_, s) => ({
      cx: Math.random() * 1600,
      cy: 200 + Math.random() * 500,
      r: 3 + Math.random() * 4,
      delay: 3 + Math.random() * 5,
      dur: 4 + Math.random() * 3
    }));
    setSparkles(generated);
  }, []);

  // Parallax pointermove listener with cleanup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let reduceMotion = false;
    try {
      reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}

    if (reduceMotion) return;

    const onPointerMove = (e) => {
      if (!parRef.current) return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      parRef.current.setAttribute(
        "transform",
        `translate(${(nx * -28).toFixed(1)} ${(ny * -20).toFixed(1)})`
      );
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  // Letter bounce on pointerenter
  const handleLetterBounce = (e) => {
    const el = e.currentTarget;
    if (el && typeof el.animate === 'function') {
      el.animate(
        [
          { transform: "translateY(0) rotate(0) scale(1)" },
          { transform: "translateY(-42px) rotate(-12deg) scale(1.2)" },
          { transform: "translateY(0) rotate(0) scale(1)" }
        ],
        { duration: 550, easing: "cubic-bezier(.3,1.5,.5,1)" }
      );
    }
  };

  let kCounter = 0;

  return (
    <section ref={containerRef} className="rope-hero-section" aria-label="Mighty Developers Intro">
      <div className="rope-svg-wrap">
        <svg
          viewBox="0 0 1600 720"
          className="rope-svg"
          role="img"
          aria-label="Mighty Developers"
        >
          <defs>
            {/* Clip paths for weaving rope over odd letters */}
            {ROWS.map((r, ri) =>
              Array.from({ length: r.w.length }, (_, i) => {
                if (i % 2 === 0) return null;
                const clipId = `${baseId}-c${ri}_${i}`;
                return (
                  <clipPath key={clipId} id={clipId}>
                    <rect
                      x={r.x0 + i * r.step - r.step * 0.36}
                      y={0}
                      width={r.step * 0.72}
                      height={720}
                    />
                  </clipPath>
                );
              })
            )}
          </defs>

          {/* Sparkles */}
          {sparkles.map((sp, idx) => (
            <circle
              key={idx}
              className="sp"
              cx={sp.cx}
              cy={sp.cy}
              r={sp.r}
              style={{
                animationDelay: `${sp.delay.toFixed(2)}s`,
                animationDuration: `${sp.dur.toFixed(2)}s`
              }}
            />
          ))}

          {/* Shadow path under rope */}
          <path
            d={ropePath}
            className="rl"
            pathLength="1000"
            stroke="rgba(10,22,71,.18)"
            strokeWidth="18"
            transform="translate(0 10)"
          />

          {/* Base rope layers */}
          <g id={ropeId}>
            <path
              d={ropePath}
              className="rl"
              pathLength="1000"
              stroke="#C2410C"
              strokeWidth="20"
            />
            <path
              d={ropePath}
              className="rl"
              pathLength="1000"
              stroke="#F97316"
              strokeWidth="14"
            />
            <path
              d={ropePath}
              className="rl"
              pathLength="1000"
              stroke="#FDBA74"
              strokeWidth="4"
              transform="translate(0 -3)"
              opacity="0.85"
            />
          </g>

          {/* Pulse along the rope */}
          <path d={ropePath} className="pulse" />

          {/* Letters */}
          {ROWS.map((r, ri) => (
            <g key={`row-${ri}`}>
              {Array.from({ length: r.w.length }, (_, i) => {
                const k = kCounter++;
                const x = r.x0 + i * r.step;
                const y = lvl(r, i) + r.size * r.sc[i] * 0.35;
                const fontSize = r.size * r.sc[i];
                const popinDelay = 0.5 + k * 0.12;
                const tingleDelay = (k % 7) * 0.15;

                return (
                  <g
                    key={`letter-${ri}-${i}`}
                    transform={`translate(${x} ${y}) rotate(${r.rot[i]})`}
                  >
                    <g
                      className="hop"
                      style={{ animationDelay: `${popinDelay}s` }}
                      onPointerEnter={handleLetterBounce}
                    >
                      <text
                        className="l"
                        fontSize={fontSize}
                        style={{ animationDelay: `${tingleDelay}s` }}
                      >
                        {r.w[i]}
                      </text>
                    </g>
                  </g>
                );
              })}
            </g>
          ))}

          {/* Weave: redraw rope over odd letters */}
          {ROWS.map((r, ri) =>
            Array.from({ length: r.w.length }, (_, i) => {
              if (i % 2 === 0) return null;
              const clipId = `${baseId}-c${ri}_${i}`;
              return (
                <use
                  key={`weave-${ri}-${i}`}
                  href={`#${ropeId}`}
                  clipPath={`url(#${clipId})`}
                />
              );
            })
          )}

          {/* Plug at the end */}
          <g transform="translate(1530 520) rotate(90)">
            <g className="plugg">
              <rect className="plug" x="-17" y="-40" width="34" height="38" rx="15" />
              <rect className="plug" x="-17" y="4" width="34" height="38" rx="15" />
              <circle className="led" cx="0" cy="-21" r="5" />
              <circle className="led" cx="0" cy="23" r="5" style={{ animationDelay: ".6s" }} />
            </g>
          </g>

          {/* Parallax floating tiles */}
          <g ref={parRef}>
            {TILES.map((t, j) => (
              <g
                key={`tile-${j}`}
                className="item"
                style={{ animationDelay: `${j * 0.7}s` }}
              >
                <rect
                  x={t[0] - 28}
                  y={t[1] - 28}
                  width="56"
                  height="56"
                  rx="14"
                  className="tile"
                />
                <text x={t[0]} y={t[1]} className="glyph">
                  {t[2]}
                </text>
              </g>
            ))}
          </g>
        </svg>
      </div>

      <p className="rope-tag">Build. Ship. Repeat. Together.</p>
    </section>
  );
}
