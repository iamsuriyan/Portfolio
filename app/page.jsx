import SmoothScroll from '../components/SmoothScroll';
import ScrollProgress from '../components/ScrollProgress';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const marqueeItems = [
  'LLM INTEGRATION',
  'RAG / RETRIEVAL',
  'REAL-TIME VOICE AI',
  'WEBRTC / SIP',
  'OAUTH 2.0',
  'WEBHOOK DELIVERY',
  'NEXT.JS',
  'REACT NATIVE',
  'NODE.JS',
  'FASTAPI',
  'TYPESCRIPT',
  'PYTHON',
  'POSTGRESQL',
  'PGVECTOR',
  'REDIS',
  'DOCKER',
  'GCP',
];

export default function Home() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <Navigation />
      <main id="main" className="min-h-screen bg-bg">
        <Hero />
        <div className="border-y border-line bg-surface py-5">
          <Marquee items={marqueeItems} speed={90} className="font-mono text-xs tracking-[0.18em] text-fg-faint" />
        </div>
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
