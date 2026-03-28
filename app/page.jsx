import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Approach from '../components/Approach';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import About from '../components/About';
import WhatYouGet from '../components/WhatYouGet';
import Skills from '../components/Skills';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <Hero />
      <div className="border-t border-[#222] py-6 bg-[#0a0a0a]">
        <Marquee
          items={[
            'AI AGENT ORCHESTRATION',
            'MULTI-AGENT SYSTEMS',
            'WORKFLOW AUTOMATION',
            'REACT / NEXT.JS',
            'REACT NATIVE',
            'NODE.JS',
            'PYTHON',
            'FASTAPI',
            'LLM INTEGRATION',
            'PROMPT ENGINEERING',
            'MONGODB',
            'FIREBASE',
            'GOOGLE CLOUD',
          ]}
          speed={40}
          className="text-sm font-medium text-white/15 tracking-widest"
        />
      </div>
      <Approach />
      <Services />
      <CaseStudies />
      <About />
      <WhatYouGet />
      <Skills />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}
