import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Approach from '../components/Approach';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import About from '../components/About';
import Experience from '../components/Experience';
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
            'AI AGENTS',
            'WORKFLOW AUTOMATION',
            'OAUTH 2.0',
            'RAG / RETRIEVAL',
            'REACT / NEXT.JS',
            'REACT NATIVE',
            'NODE.JS',
            'TYPESCRIPT',
            'PYTHON',
            'FASTAPI',
            'MONGODB',
            'POSTGRESQL',
            'DOCKER',
            'GITHUB ACTIONS',
            'GCP',
          ]}
          speed={80}
          className="text-sm font-medium text-white/15 tracking-widest"
        />
      </div>
      <Approach />
      <Services />
      <CaseStudies />
      <About />
      <Experience />
      <WhatYouGet />
      <Skills />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}
