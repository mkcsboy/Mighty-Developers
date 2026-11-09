import React from 'react';
import MightyLogo from './icons/MightyLogo';

export default function Header() {
  return (
    <header style={{ position: "sticky", top: "12px", zIndex: 40, padding: "14px 0 0", pointerEvents: "none", marginBottom: "-68px" }}>
      <div className="top-bar" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
        <a href="#top" className="top-pill top-logo" aria-label="Mighty Developers: back to the start" style={{ display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
          <MightyLogo width={37} height={28} />
        </a>
        <a className="pill pill-o nav-cta top-cta" href="#community">
          <span className="cta-l">Join the community</span>
          <span className="cta-s">Join</span>
        </a>
      </div>
    </header>
  );
}

