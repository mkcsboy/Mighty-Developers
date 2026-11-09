import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MarqueeBand from '../components/MarqueeBand';
import HackathonWall from '../components/HackathonWall';
import TasksSection from '../components/TasksSection';
import LoopSection from '../components/LoopSection';
import SampleTasks from '../components/SampleTasks';
import ApplySection from '../components/ApplySection';
import CommunitySection from '../components/CommunitySection';
import Footer from '../components/Footer';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Home() {
  useIntersectionObserver();

  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);
  const [taskStates, setTaskStates] = useState([0, 0, 1, 2, 3, 3]);

  // Autoplay loop timer
  useEffect(() => {
    let reduce = false;
    try {
      reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    } catch (e) {}

    if (reduce) {
      setAuto(false);
      return;
    }

    const timer = setInterval(() => {
      if (auto) {
        setStep((prev) => (prev + 1) % 6);
      }
    }, 3200);

    return () => clearInterval(timer);
  }, [auto]);

  const advanceTask = (index) => {
    setTaskStates((prev) => {
      const next = [...prev];
      next[index] = (next[index] + 1) % 4;
      return next;
    });
  };

  const handleSelectStep = (s) => {
    setAuto(false);
    setStep(s);
  };

  return (
    <div id="top" style={{ overflowX: "clip", width: "100%", background: "#F6F5F3", color: "#44403C", fontFamily: "'Inter',system-ui,-apple-system,'Segoe UI',sans-serif", fontSize: "17px", lineHeight: 1.5 }}>
      <div aria-hidden="true" className="md-prog"></div>
      <Header />
      <main>
        <HeroSection />
        <MarqueeBand />
        <HackathonWall />
        <TasksSection taskStates={taskStates} onAdvanceTask={advanceTask} />
        <LoopSection step={step} onSelectStep={handleSelectStep} />
        <SampleTasks taskStates={taskStates} onAdvanceTask={advanceTask} />
        <ApplySection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}

