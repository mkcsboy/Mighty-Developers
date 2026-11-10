import React from 'react';
import MightyLogo from './icons/MightyLogo';

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-h" className="hero-network">
      {/* Animated SVG background with flowing paths */}
      <svg className="hero-svg" viewBox="0 0 1440 680" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {/* Grid dots */}
        {Array.from({ length: 20 }).map((_, row) =>
          Array.from({ length: 30 }).map((_, col) => (
            <circle
              key={`d-${row}-${col}`}
              cx={col * 50 + 20}
              cy={row * 36 + 18}
              r="1.2"
              fill="rgba(249,115,22,0.12)"
            />
          ))
        )}

        {/* Flowing pipe paths */}
        <path className="hero-pipe p1" d="M0 340 Q120 340 180 260 Q240 180 360 180 Q480 180 540 260 Q600 340 720 340 Q840 340 900 260 Q960 180 1080 180 Q1200 180 1260 260 Q1320 340 1440 340" />
        <path className="hero-pipe p2" d="M0 480 Q160 480 240 400 Q320 320 480 320 Q640 320 720 400 Q800 480 960 480 Q1120 480 1200 400 Q1280 320 1440 320" />
        <path className="hero-pipe p3" d="M0 180 Q100 180 180 240 Q260 300 400 300 Q540 300 620 240 Q700 180 840 180 Q980 180 1060 240 Q1140 300 1280 300 Q1360 300 1440 260" />
        <path className="hero-pipe p4" d="M200 0 Q200 80 260 140 Q320 200 320 340 Q320 480 380 540 Q440 600 440 680" />
        <path className="hero-pipe p5" d="M800 0 Q800 100 860 160 Q920 220 920 360 Q920 500 980 560 Q1040 620 1040 680" />
        <path className="hero-pipe p6" d="M1200 0 Q1200 60 1140 120 Q1080 180 1080 280 Q1080 380 1140 440 Q1200 500 1200 680" />

        {/* Animated flowing dots on paths */}
        <circle className="flow-dot fd1" r="4" fill="#F97316">
          <animateMotion dur="6s" repeatCount="indefinite" path="M0 340 Q120 340 180 260 Q240 180 360 180 Q480 180 540 260 Q600 340 720 340 Q840 340 900 260 Q960 180 1080 180 Q1200 180 1260 260 Q1320 340 1440 340" />
        </circle>
        <circle className="flow-dot fd2" r="3.5" fill="#FDBA74">
          <animateMotion dur="8s" repeatCount="indefinite" path="M0 480 Q160 480 240 400 Q320 320 480 320 Q640 320 720 400 Q800 480 960 480 Q1120 480 1200 400 Q1280 320 1440 320" />
        </circle>
        <circle className="flow-dot fd3" r="3" fill="#F97316">
          <animateMotion dur="7s" repeatCount="indefinite" path="M0 180 Q100 180 180 240 Q260 300 400 300 Q540 300 620 240 Q700 180 840 180 Q980 180 1060 240 Q1140 300 1280 300 Q1360 300 1440 260" />
        </circle>
        <circle className="flow-dot fd4" r="3.5" fill="#FDBA74">
          <animateMotion dur="5s" repeatCount="indefinite" path="M200 0 Q200 80 260 140 Q320 200 320 340 Q320 480 380 540 Q440 600 440 680" />
        </circle>
        <circle className="flow-dot fd5" r="4" fill="#F97316">
          <animateMotion dur="6.5s" repeatCount="indefinite" path="M800 0 Q800 100 860 160 Q920 220 920 360 Q920 500 980 560 Q1040 620 1040 680" />
        </circle>

        {/* Glowing intersection nodes */}
        <circle className="hero-node hn1" cx="360" cy="180" r="8" />
        <circle className="hero-node hn2" cx="720" cy="340" r="8" />
        <circle className="hero-node hn3" cx="1080" cy="180" r="8" />
        <circle className="hero-node hn4" cx="480" cy="320" r="8" />
        <circle className="hero-node hn5" cx="960" cy="480" r="8" />
        <circle className="hero-node hn6" cx="320" cy="340" r="6" />
        <circle className="hero-node hn7" cx="920" cy="360" r="6" />
      </svg>

      {/* Floating developer icons */}
      <div className="hero-icons" aria-hidden="true">
        <div className="hi hi-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4"/></svg>
        </div>
        <div className="hi hi-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FDBA74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        </div>
        <div className="hi hi-3">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </div>
        <div className="hi hi-4">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FDBA74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
        </div>
        <div className="hi hi-5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4"/></svg>
        </div>
        <div className="hi hi-6">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FDBA74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M14 4c3-1 6-1 6-1s0 3-1 6l-6 6-5-5 6-6z"/></svg>
        </div>
        <div className="hi hi-7">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V11M10 20V5M16 20v-6M2 20h20"/></svg>
        </div>
        <div className="hi hi-8">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FDBA74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
      </div>

      {/* Center brand card */}
      <div className="hero-center">
        <div className="hero-brand-card">
          <MightyLogo width={72} height={54} />
          <h1 id="hero-h" className="hero-brand-name">MIGHTY<br/>DEVELOPERS</h1>
          <p className="hero-brand-tag">A Developer Community Under Shadowsphere</p>
        </div>
        <div className="hero-cta-row">
          <a className="pill pill-o" href="#community">
            Join the community
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a className="pill pill-w" href="mailto:hello@mightydevelopers.dev?subject=Host%20a%20hackathon" style={{ background: "rgba(255,255,255,0.15)", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", backdropFilter: "blur(8px)" }}>
            Host a hackathon
          </a>
        </div>
      </div>
    </section>
  );
}
