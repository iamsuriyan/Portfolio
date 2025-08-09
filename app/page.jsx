'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import InterstellarBackground from '../components/InterstellarBackground';


export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Interstellar Background */}
      <InterstellarBackground />
      
      {/* Content with cosmic-friendly styling */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
