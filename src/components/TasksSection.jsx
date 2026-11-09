import React, { useState } from 'react';
import { TASKS, STATUS_NAMES } from '../data/steps';

export default function TasksSection({ taskStates, onAdvanceTask }) {
  const [activeTab, setActiveTab] = useState(0); // 0 = board, 1 = sample

  const pad = (n) => String(n).padStart(2, "0");

  const cards = TASKS.map((t, i) => ({
    i,
    s: taskStates[i],
    id: t.id,
    title: t.title,
    status: STATUS_NAMES[taskStates[i]],
    deco: taskStates[i] === 3 ? "line-through" : "none",
    label: `${t.id}: ${t.title}. Status: ${STATUS_NAMES[taskStates[i]].toLowerCase()}. Activate to move it to the next status.`,
  }));

  const lane0 = cards.filter(c => c.s === 0);
  const lane1 = cards.filter(c => c.s === 1);
  const lane2 = cards.filter(c => c.s === 2);
  const lane3 = cards.filter(c => c.s === 3);

  return (
    <section id="tasks" aria-labelledby="tasks-h" style={{ padding: "96px 0" }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "48px 56px", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 360px", minWidth: 0 }}>
          <h2 id="tasks-h" className="io-w" data-io style={{ margin: "0 0 16px", fontSize: "clamp(32px,3.6vw,48px)", lineHeight: 1.06, fontWeight: 800, letterSpacing: "-.04em", color: "#2E1065" }}>
            <span className="w" style={{ "--i": 0 }}>Every</span>{" "}
            <span className="w" style={{ "--i": 1 }}>task</span>{" "}
            <span className="w" style={{ "--i": 2 }}>says</span>{" "}
            <span className="w" style={{ "--i": 3 }}>what</span>{" "}
            <span className="w" style={{ "--i": 4 }}>is</span>{" "}
            <span className="w" style={{ "--i": 5 }}>expected.</span>
          </h2>
          <p style={{ margin: "0 0 24px", fontSize: "16px", lineHeight: 1.6, color: "#57534E", maxWidth: "440px" }}>
            Selected students receive training and project ideas, and are placed inside the team. Work is broken into small, clearly specified tasks, so each student understands exactly what to build and how it fits the larger project.
          </p>
          <a className="pill pill-ghost" href="#samples">
            See sample tasks
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <div className="bubs" data-io aria-label="What the program includes" style={{ position: "relative", height: "210px", marginTop: "40px", maxWidth: "380px" }}>
            <div className="bub pop" style={{ "--i": 0, left: "0px", top: "30px" }}>
              <span className="bub-c" style={{ "--i": 0 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                  <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5zM4 19a2 2 0 0 1 2-2h13" />
                </svg>
              </span>
              <span>TRAINING</span>
            </div>
            <div className="bub pop" style={{ "--i": 1, left: "96px", top: "0px" }}>
              <span className="bub-c" style={{ "--i": 1 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                  <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z" />
                </svg>
              </span>
              <span>PROJECT IDEAS</span>
            </div>
            <div className="bub pop" style={{ "--i": 2, left: "190px", top: "38px" }}>
              <span className="bub-c" style={{ "--i": 2 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                  <path d="M10 6h10M10 12h10M10 18h10M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2" />
                </svg>
              </span>
              <span>SMALL TASKS</span>
            </div>
            <div className="bub pop" style={{ "--i": 3, left: "290px", top: "4px" }}>
              <span className="bub-c" style={{ "--i": 3 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                  <circle cx="9" cy="8" r="3.5" />
                  <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.4.6 4 2.8 4 6" />
                </svg>
              </span>
              <span>TEAM</span>
            </div>
            <div className="bub pop" style={{ "--i": 4, left: "120px", top: "120px" }}>
              <span className="bub-c" style={{ "--i": 4 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                  <path d="M4 5h16v11H9l-5 4V5z" />
                </svg>
              </span>
              <span>FEEDBACK</span>
            </div>
          </div>
        </div>

        <div className="rv" data-io style={{ flex: "1.4 1 520px", minWidth: 0 }}>
          <div className="fold-wrap" data-io>
            <div className={`fold ${activeTab === 0 ? "is-front" : "is-back"}`}>
              <button
                type="button"
                className="fold-tab"
                style={{ background: "#FFFFFF", color: "#2E1065" }}
                aria-pressed={activeTab === 0}
                onClick={() => setActiveTab(0)}
              >
                Task board
                <span className="chip" style={{ background: "#FFF1E6", color: "#C2410C" }}>TAP A CARD</span>
              </button>
              <div className="fold-body card" style={{ padding: "20px", minHeight: "360px" }}>
                <div className="lanes" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "12px" }}>
                  <div className="lane">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2px 6px" }}>
                      <span className="mono" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "10.5px", fontWeight: 700, letterSpacing: ".06em", color: "#44403C" }}>
                        <span aria-hidden="true" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#A8A29E" }}></span>
                        TO DO
                      </span>
                      <span className="mono" style={{ fontSize: "10.5px", fontWeight: 700, color: "#78716C" }}>{pad(lane0.length)}</span>
                    </div>
                    {lane0.map(t => (
                      <button key={t.id} type="button" className="tk" aria-label={t.label} onClick={() => onAdvanceTask(t.i)}>
                        <span className="mono" style={{ fontSize: "10px", color: "#78716C" }}>{t.id}</span>
                        <span style={{ fontWeight: 600, textDecoration: t.deco }}>{t.title}</span>
                      </button>
                    ))}
                  </div>

                  <div className="lane">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2px 6px" }}>
                      <span className="mono" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "10.5px", fontWeight: 700, letterSpacing: ".06em", color: "#2E1065" }}>
                        <span aria-hidden="true" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F97316" }}></span>
                        IN PROGRESS
                      </span>
                      <span className="mono" style={{ fontSize: "10.5px", fontWeight: 700, color: "#78716C" }}>{pad(lane1.length)}</span>
                    </div>
                    {lane1.map(t => (
                      <button key={t.id} type="button" className="tk" aria-label={t.label} onClick={() => onAdvanceTask(t.i)}>
                        <span className="mono" style={{ fontSize: "10px", color: "#78716C" }}>{t.id}</span>
                        <span style={{ fontWeight: 600, textDecoration: t.deco }}>{t.title}</span>
                      </button>
                    ))}
                  </div>

                  <div className="lane">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2px 6px" }}>
                      <span className="mono" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "10.5px", fontWeight: 700, letterSpacing: ".06em", color: "#C2410C" }}>
                        <span aria-hidden="true" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FDBA74" }}></span>
                        IN REVIEW
                      </span>
                      <span className="mono" style={{ fontSize: "10.5px", fontWeight: 700, color: "#78716C" }}>{pad(lane2.length)}</span>
                    </div>
                    {lane2.map(t => (
                      <button key={t.id} type="button" className="tk" aria-label={t.label} onClick={() => onAdvanceTask(t.i)}>
                        <span className="mono" style={{ fontSize: "10px", color: "#78716C" }}>{t.id}</span>
                        <span style={{ fontWeight: 600, textDecoration: t.deco }}>{t.title}</span>
                      </button>
                    ))}
                  </div>

                  <div className="lane">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2px 6px" }}>
                      <span className="mono" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "10.5px", fontWeight: 700, letterSpacing: ".06em", color: "#0F766E" }}>
                        <span aria-hidden="true" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0D9488" }}></span>
                        DONE
                      </span>
                      <span className="mono" style={{ fontSize: "10.5px", fontWeight: 700, color: "#78716C" }}>{pad(lane3.length)}</span>
                    </div>
                    {lane3.map(t => (
                      <button key={t.id} type="button" className="tk" aria-label={t.label} onClick={() => onAdvanceTask(t.i)}>
                        <span className="mono" style={{ fontSize: "10px", color: "#78716C" }}>{t.id}</span>
                        <span style={{ fontWeight: 600, textDecoration: t.deco }}>{t.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <p className="mono" aria-hidden="true" style={{ margin: "18px 0 0", fontSize: "10.5px", fontWeight: 700, letterSpacing: ".1em", color: "#78716C" }}>
                  TAP A CARD TO MOVE IT TO THE NEXT STATUS
                </p>
              </div>
            </div>

            <div className={`fold ${activeTab === 1 ? "is-front" : "is-back"}`}>
              <button
                type="button"
                className="fold-tab"
                style={{ background: "#FFE4CC", color: "#2E1065" }}
                aria-pressed={activeTab === 1}
                onClick={() => setActiveTab(1)}
              >
                Sample task
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                  <path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4V7z" />
                  <path d="M14 7v10" strokeDasharray="2 2" />
                </svg>
              </button>
              <div className="fold-body" style={{ background: "#FFE4CC", padding: "10px" }}>
                <div style={{ background: "#FFFFFF", borderRadius: "16px", padding: "22px", minHeight: "400px", boxSizing: "border-box" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
                    <div style={{ flex: "1 1 280px", minWidth: 0 }}>
                      <p style={{ margin: "0 0 6px", display: "flex", alignItems: "center", gap: "8px" }}>
                        <span className="mono" style={{ fontSize: "11px", fontWeight: 700, color: "#78716C" }}>TASK-012</span>
                        <span className="chip" style={{ background: "#FFF1E6", color: "#C2410C" }}>IN PROGRESS</span>
                      </p>
                      <p style={{ margin: "0 0 16px", fontSize: "22px", lineHeight: 1.2, fontWeight: 800, letterSpacing: "-.02em", color: "#2E1065" }}>Write unit tests for the signup form</p>
                      <p className="eyebrow" style={{ fontSize: "10px", marginBottom: "4px" }}>SCOPE</p>
                      <p style={{ margin: "0 0 12px", fontSize: "15px", color: "#44403C" }}>Cover the signup form's validation rules: required fields, email format and password length.</p>
                      <p className="eyebrow" style={{ fontSize: "10px", marginBottom: "4px" }}>EXPECTED OUTPUT</p>
                      <p style={{ margin: "0 0 12px", fontSize: "15px", color: "#44403C" }}>A test file that passes locally, plus a short note on anything you could not cover.</p>
                      <p className="eyebrow" style={{ fontSize: "10px", marginBottom: "4px" }}>DEADLINE</p>
                      <p style={{ margin: 0, fontSize: "15px", color: "#44403C" }}>[DATE]</p>
                    </div>
                    <div style={{ flex: "1 1 220px", minWidth: 0, borderRadius: "18px", background: "#F0FDFA", padding: "22px", boxSizing: "border-box" }}>
                      <p className="eyebrow" style={{ fontSize: "10px", color: "#0F766E", marginBottom: "10px" }}>WHY SMALL TASKS</p>
                      <p style={{ margin: 0, fontSize: "18px", lineHeight: 1.4, fontWeight: 700, color: "#2E1065" }}>When every task is clear, students grasp the whole system step by step, and we get an honest signal of how well each one performs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

