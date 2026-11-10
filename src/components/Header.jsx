import React from 'react';
import MightyLogo from './icons/MightyLogo';

export default function Header() {
  return (
    <header
      style={{
        position: 'fixed',
        top: '14px',
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
        pointerEvents: 'none',
        margin: 0,
        padding: 0
      }}
    >
      <div
        className="top-bar"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          boxSizing: 'border-box'
        }}
      >
        <a
          href="#top"
          className="top-pill top-logo"
          aria-label="Mighty Developers: back to the start"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none'
          }}
        >
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

