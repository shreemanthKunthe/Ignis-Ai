import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import EditorialCapabilities from './components/EditorialCapabilities';
import SystemTransformation from './components/SystemTransformation';
import FourStepProcess from './components/FourStepProcess';
import OperationalAudience from './components/OperationalAudience';
import PhilosophyTrust from './components/PhilosophyTrust';
import FAQ from './components/FAQ';
import Founder from './components/Founder';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="ignis-app" style={{ position: 'relative' }}>
      {/* Cinematic Brand Introduction Preloader */}
      <Preloader onComplete={() => setIsPreloaderDone(true)} />

      {/* Floating Navigation */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* 01 LOCKED HERO SECTION (Sticky scroll stacking: next section rolls directly over it) */}
      <Hero isReady={isPreloaderDone} />

      {/* Main Content Sections (Elevated to zIndex: 2 so it smoothly glides on top of Hero) */}
      <main
        style={{
          position: 'relative',
          zIndex: 2,
          backgroundColor: 'var(--ignis-paper)',
          boxShadow: '0 -20px 48px rgba(0, 0, 0, 0.06)'
        }}
      >
        {/* 02 LOCKED WHO WE ARE STATEMENT (VIBRANT EDITORIAL) */}
        <ProblemSolution />

        {/* 03 LOCKED WHAT WE BUILD (EDITORIAL THREE-ROW ARCHITECTURE) */}
        <EditorialCapabilities />

        {/* 04 WHAT IGNIS SYSTEMS ACTUALLY DO */}
        <SystemTransformation />

        {/* 05 HOW WE BUILD THEM (FROM FRICTION TO FLOW) */}
        <FourStepProcess />

        {/* 06 WHO THEY ARE FOR (REAL BUSINESS PROBLEMS) */}
        <OperationalAudience />

        {/* 07 ENGINEERING PRINCIPLES (ENGINEERING WITH JUDGEMENT) */}
        <PhilosophyTrust />

        {/* 08 FAQ (BEFORE YOU BOOK) */}
        <FAQ />

        {/* 09 CONTACT / FINAL CTA (TALK DIRECTLY WITH THE BUILDER) */}
        <Founder />
      </main>

      {/* 10 FOOTER (Reverted to original Screenshot 1 card layout) */}
      <Footer />
    </div>
  );
}
