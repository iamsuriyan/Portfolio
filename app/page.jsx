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
  'GENERATIVE AI',
  'HYBRID RETRIEVAL',
  'AI AGENTS',
  'LANGGRAPH',
  'RAG / PGVECTOR',
  'WEAVIATE',
  'REAL-TIME VOICE AI',
  'WEBRTC / SIP',
  'PYTHON',
  'FASTAPI',
  'NEXT.JS',
  'REACT',
  'TYPESCRIPT',
  'REDIS / RQ',
  'OAUTH 2.0',
  'DOCKER',
  'GCP / AWS',
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
