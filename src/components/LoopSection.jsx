import React, { useState, useRef } from 'react';
import { STEPS } from '../data/steps';
import MightyLogo from './icons/MightyLogo';

const STEP_ICONS = [
  (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
    </svg>
  ),
  (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </svg>
  ),
  (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4 20V11M10 20V5M16 20v-6M2 20h20" />
    </svg>
  ),
  (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
    </svg>
  ),
  (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M14 4c3-1 6-1 6-1s0 3-1 6l-6 6-5-5 6-6zM9 10H5l2-3h4M14 15v4l3-2v-4" />
    </svg>
  )
];

export default function LoopSection({ step, onSelectStep }) {
  const [isDetailView, setIsDetailView] = useState(false);
  const cur = STEPS[step];
  const pulls = [
    { x: 0, y: -24, r: 0 },
    { x: 22, y: -10, r: 4 },
    { x: 22, y: 10, r: 6 },
    { x: 0, y: 24, r: 0 },
    { x: -22, y: 10, r: -6 },
    { x: -22, y: -10, r: -4 }
  ];
  const pull = pulls[step];

  const nodeCls = (i) => (i === step ? "is-active" : i < step ? "is-passed" : "");
  const spokeCls = (i) => (i === step ? "is-on" : "");

  // Mobile rotary 3-node view (previous, current/center, next)
  const prevStep = (step - 1 + 6) % 6;
  const currentStep = step;
  const nextStep = (step + 1) % 6;

  const prevData = STEPS[prevStep];
  const currData = STEPS[currentStep];
  const nextData = STEPS[nextStep];

  // Telephone rotary dial gesture (touch/drag swipe)
  const touchStartY = useRef(null);
  const dragStartY = useRef(null);
  const lastWheelTime = useRef(0);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartY.current === null) return;
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (diff > 35) {
      // Swiped up -> next step
      onSelectStep((step + 1) % 6);
    } else if (diff < -35) {
      // Swiped down -> prev step
      onSelectStep((step - 1 + 6) % 6);
    }
    touchStartY.current = null;
  };

  const handleMouseDown = (e) => {
    dragStartY.current = e.clientY;
  };

  const handleMouseUp = (e) => {
    if (dragStartY.current === null) return;
    const diff = dragStartY.current - e.clientY;
    if (diff > 35) {
      onSelectStep((step + 1) % 6);
    } else if (diff < -35) {
      onSelectStep((step - 1 + 6) % 6);
    }
    dragStartY.current = null;
  };

  const handleWheel = (e) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 400) return;
    if (Math.abs(e.deltaY) > 25) {
      lastWheelTime.current = now;
      if (e.deltaY > 0) {
        onSelectStep((step + 1) % 6);
      } else {
        onSelectStep((step - 1 + 6) % 6);
      }
    }
  };

  return (
    <section id="loop" aria-labelledby="loop-h" style={{ padding: "90px 0 70px", background: "linear-gradient(135deg,#FFF6EE 0%,#FFE9D6 55%,#FFDDBF 100%)", borderRadius: "40px 40px 0 0" }}>
      <div className="wrap">
        <h2 id="loop-h" className="io-w" data-io style={{ margin: "0 auto 18px", maxWidth: "900px", textAlign: "center", fontSize: "clamp(34px,4.4vw,60px)", lineHeight: 1.04, fontWeight: 800, letterSpacing: "-.045em", color: "#2E1065" }}>
          <span className="w" style={{ "--i": 0 }}>One</span>{" "}
          <span className="w" style={{ "--i": 1 }}>loop,</span>{" "}
          <span className="w" style={{ "--i": 2 }}>from</span>{" "}
          <span className="w" style={{ "--i": 3 }}>hackathon</span>{" "}
          <span className="w" style={{ "--i": 4 }}>to</span>{" "}
          <span className="w" style={{ "--i": 5 }}>founder.</span>
        </h2>
        <p style={{ margin: "0 auto 24px", maxWidth: "620px", textAlign: "center", fontSize: "17px", color: "#57534E" }}>
          We do not start by hiring. We start by sponsoring hackathons, which gives us direct access to students and a way to see how they actually build.
        </p>

        {/* ========================================================= */}
        {/* DESKTOP VIEW (Visible on screens > 900px)                 */}
        {/* ========================================================= */}
        <div className="lp lp-desktop" data-io>
          <div className="lp-ring" aria-hidden="true">
            <svg viewBox="0 0 520 520" width="100%" height="100%">
              <circle cx="260" cy="260" r="258" fill="none" stroke="#F1E4D8" strokeWidth="2" />
              <circle className="lp-flow" cx="260" cy="260" r="258" fill="none" stroke="#F97316" strokeWidth="2" strokeDasharray="6 12" />
            </svg>
            <div className="lp-orbit"><i></i></div>
            <div className="lp-orbit lp-orbit2"><i></i></div>
          </div>

          {/* Spokes */}
          {[
            { a: "-90deg", len: "160px" },
            { a: "-23.75deg", len: "182px" },
            { a: "23.75deg", len: "182px" },
            { a: "90deg", len: "160px" },
            { a: "156.25deg", len: "182px" },
            { a: "203.75deg", len: "182px" }
          ].map((sp, i) => (
            <span
              key={i}
              className={`lp-str ${spokeCls(i)}`}
              aria-hidden="true"
              style={{ "--k": i, "--a": sp.a, "--len": sp.len }}
            >
              <i></i>
              <b className="lp-hand">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                  <path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8a8 8 0 0 0 16 0v-2a2 2 0 0 0-4 0" />
                </svg>
              </b>
            </span>
          ))}

          {/* Core */}
          <div className="lp-core" style={{ translate: `${pull.x}px ${pull.y}px`, rotate: `${pull.r}deg` }}>
            <span className="lp-core-in">
              <MightyLogo width={61} height={46} />
              <span className="mono" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", color: "#C2410C" }}>ONE LOOP</span>
              <span style={{ fontSize: "15px", fontWeight: 800, color: "#2E1065", letterSpacing: "-.01em" }}>Hackathon → Founder</span>
              <span className="chip" style={{ marginTop: "4px", background: "#F97316", color: "#2E1065" }}>NOW · {cur.short}</span>
            </span>
          </div>

          {/* Step buttons */}
          <button type="button" className={`lc lc0 ${nodeCls(0)}`} style={{ "--k": 0 }} onClick={() => onSelectStep(0)} aria-label="Step 1: Sponsor. We sponsor hackathons as our entry point to students.">
            <span className="lc-top">
              <span className="lc-ic">
                {STEP_ICONS[0]()}
              </span>
              <span className="lc-n">01</span>
            </span>
            <span className="lc-nm">Sponsor</span>
            <span className="lc-wt">We sponsor hackathons as our entry point to students.</span>
          </button>

          <button type="button" className={`lc lc1 ${nodeCls(1)}`} style={{ "--k": 1 }} onClick={() => onSelectStep(1)} aria-label="Step 2: Select. We pick students who show promise during and after the event.">
            <span className="lc-top">
              <span className="lc-ic">
                {STEP_ICONS[1]()}
              </span>
              <span className="lc-n">02</span>
            </span>
            <span className="lc-nm">Select</span>
            <span className="lc-wt">We pick students who show promise during and after the event.</span>
          </button>

          <button type="button" className={`lc lc2 ${nodeCls(2)}`} style={{ "--k": 2 }} onClick={() => onSelectStep(2)} aria-label="Step 3: Train. Training, project ideas and small, clearly defined tasks.">
            <span className="lc-top">
              <span className="lc-ic">
                {STEP_ICONS[2]()}
              </span>
              <span className="lc-n">03</span>
            </span>
            <span className="lc-nm">Train</span>
            <span className="lc-wt">Training, project ideas and small, clearly defined tasks.</span>
          </button>

          <button type="button" className={`lc lc3 ${nodeCls(3)}`} style={{ "--k": 3 }} onClick={() => onSelectStep(3)} aria-label="Step 4: Grow. Students learn by doing, and the community expands.">
            <span className="lc-top">
              <span className="lc-ic">
                {STEP_ICONS[3]()}
              </span>
              <span className="lc-n">04</span>
            </span>
            <span className="lc-nm">Grow</span>
            <span className="lc-wt">Students learn by doing, and the community expands.</span>
          </button>

          <button type="button" className={`lc lc4 ${nodeCls(4)}`} style={{ "--k": 4 }} onClick={() => onSelectStep(4)} aria-label="Step 5: Hire. Top performers join our team through a hiring notice.">
            <span className="lc-top">
              <span className="lc-ic">
                {STEP_ICONS[4]()}
              </span>
              <span className="lc-n">05</span>
              <span className="chip" style={{ background: "#F97316", color: "#2E1065", height: "22px", fontSize: "10px" }}>PHASE 1</span>
            </span>
            <span className="lc-nm">Hire</span>
            <span className="lc-wt">Top performers join our team through a hiring notice.</span>
          </button>

          <button type="button" className={`lc lc5 ${nodeCls(5)}`} style={{ "--k": 5 }} onClick={() => onSelectStep(5)} aria-label="Step 6: Incubate. Strong performers with startup ideas are incubated with us.">
            <span className="lc-top">
              <span className="lc-ic">
                {STEP_ICONS[5]()}
              </span>
              <span className="lc-n">06</span>
              <span className="chip" style={{ background: "#F97316", color: "#2E1065", height: "22px", fontSize: "10px" }}>PHASE 2</span>
            </span>
            <span className="lc-nm">Incubate</span>
            <span className="lc-wt">Strong performers with startup ideas are incubated with us.</span>
          </button>
        </div>

        {/* ========================================================= */}
        {/* MOBILE VIEW (Telephone Rotary Dial + Morphing Details)    */}
        {/* ========================================================= */}
        <div className="lp-m-wrap" data-io>
          {/* Top subtle hint */}
          <div className="lp-m-hint">
            <span
              className="lp-m-hint-pill"
              onClick={() => setIsDetailView(!isDetailView)}
            >
              <span className="lp-m-hint-dot"></span>
              {isDetailView ? "Viewing Details" : "Scroll / Swipe dial to turn • Tap center to open"}
            </span>
          </div>

          {/* Semicircle Stage Container */}
          <div
            className={`lp-m-stage ${isDetailView ? "is-detail-open" : ""}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onWheel={handleWheel}
          >
            {/* 1. ROTARY DIAL VIEW (Fades out when detail view opens) */}
            <div className={`lp-m-dial-layer ${isDetailView ? "is-hidden" : ""}`}>
              {/* SVG Semicircle Arc & Spoke */}
              <svg viewBox="0 0 340 380" className="lp-m-svg" aria-hidden="true">
                <path
                  d="M 138 45 A 160 160 0 0 1 138 335"
                  fill="none"
                  stroke="#F1E4D8"
                  strokeWidth="2.5"
                />
                <path
                  d="M 138 45 A 160 160 0 0 1 138 335"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="2.5"
                  strokeDasharray="6 12"
                  className="lp-flow"
                />
                <line
                  x1="70"
                  y1="190"
                  x2="230"
                  y2="190"
                  stroke="#F97316"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  className="lp-m-spoke-line"
                />
              </svg>

              {/* Hand pointer on spoke touching active center circle */}
              <div className="lp-m-hand" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8a8 8 0 0 0 16 0v-2a2 2 0 0 0-4 0" />
                </svg>
              </div>

              {/* Center Origin Hub on left */}
              <div className="lp-m-hub">
                <div className="lp-m-hub-content">
                  <MightyLogo width={34} height={25} />
                  <span className="mono lp-m-hub-sub">ONE LOOP</span>
                  <span className="lp-m-hub-title">Hackathon → Founder</span>
                </div>
              </div>

              {/* Top rotary circle (Previous step) */}
              <button
                type="button"
                className="lp-m-rotary-node lp-m-rotary-prev"
                onClick={() => onSelectStep(prevStep)}
                aria-label={`Previous: ${prevData.name}`}
              >
                <span className="lp-m-node-ic">
                  {STEP_ICONS[prevStep]({ width: 16, height: 16 })}
                </span>
                <span className="lp-m-node-n">0{prevStep + 1}</span>
              </button>

              {/* Center BIG circle (Current step - tap to expand detail block) */}
              <button
                type="button"
                className="lp-m-rotary-node lp-m-rotary-curr is-active"
                onClick={() => setIsDetailView(true)}
                aria-label={`Step ${currentStep + 1}: ${currData.name}. Tap to view full details.`}
              >
                <div className="lp-m-curr-header">
                  <span className="lp-m-curr-ic">
                    {STEP_ICONS[currentStep]({ width: 18, height: 18, stroke: "#FFFFFF" })}
                  </span>
                  <span className="lp-m-curr-num">0{currentStep + 1}</span>
                </div>
                <div className="lp-m-curr-name">{currData.name}</div>
                {currData.phase ? (
                  <span className="lp-m-curr-phase">{currData.phase}</span>
                ) : (
                  <span className="lp-m-curr-hint">TAP TO OPEN</span>
                )}
              </button>

              {/* Bottom rotary circle (Next step) */}
              <button
                type="button"
                className="lp-m-rotary-node lp-m-rotary-next"
                onClick={() => onSelectStep(nextStep)}
                aria-label={`Next: ${nextData.name}`}
              >
                <span className="lp-m-node-ic">
                  {STEP_ICONS[nextStep]({ width: 16, height: 16 })}
                </span>
                <span className="lp-m-node-n">0{nextStep + 1}</span>
              </button>
            </div>

            {/* 2. DETAIL BLOCK (Appears with smooth animation, replaces dial) */}
            <div className={`lp-m-detail-layer ${isDetailView ? "is-visible" : ""}`}>
              <div className="lp-m-detail-card">
                {/* Back button and step index */}
                <div className="lp-m-detail-header">
                  <button
                    type="button"
                    className="lp-m-back-btn"
                    onClick={() => setIsDetailView(false)}
                    aria-label="Back to loop view"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    <span>Back to loop</span>
                  </button>

                  <div className="lp-m-detail-badges">
                    <span className="lp-m-curr-num" style={{ fontSize: "12.5px" }}>0{currentStep + 1}</span>
                    {currData.phase && (
                      <span className="chip" style={{ background: "#F97316", color: "#2E1065", height: "20px", fontSize: "9px" }}>
                        {currData.phase}
                      </span>
                    )}
                  </div>
                </div>

                {/* Center Morphed Hub Icon & Title */}
                <div className="lp-m-detail-hero">
                  <div className="lp-m-detail-morphed-hub">
                    {STEP_ICONS[currentStep]({ width: 32, height: 32, stroke: "#FFFFFF" })}
                  </div>
                  <div className="lp-m-detail-meta">
                    <span className="mono lp-m-detail-loop-tag">ONE LOOP · STEP 0{currentStep + 1}</span>
                    <h3 className="lp-m-detail-title">{currData.name}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="lp-m-detail-desc">
                  {currData.what}
                </p>

                {/* Bullets */}
                {currData.bullets && currData.bullets.length > 0 && (
                  <ul className="lp-m-bullets" style={{ marginTop: "12px", gap: "8px" }}>
                    {currData.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ fontSize: "13px", lineHeight: "1.45" }}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {/* Bottom Step Switcher inside details view */}
                <div className="lp-m-detail-footer">
                  <button
                    type="button"
                    className="lp-m-arrow-btn"
                    onClick={() => onSelectStep(prevStep)}
                    aria-label="Previous step"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>

                  <div className="lp-m-dots">
                    {[0, 1, 2, 3, 4, 5].map((idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`lp-m-dot ${idx === step ? "is-active" : ""}`}
                        onClick={() => onSelectStep(idx)}
                        aria-label={`Go to step ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    className="lp-m-arrow-btn"
                    onClick={() => onSelectStep(nextStep)}
                    aria-label="Next step"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
