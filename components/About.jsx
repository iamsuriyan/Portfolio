export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">Summary</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-white/90">
            <p>
              Software Engineer with <strong className="text-blue-300">1+ years of hands-on experience</strong> building
              <strong className="text-indigo-300"> production-grade web and mobile applications</strong> across early-stage and product-focused environments.
            </p>
            <p>
              Strong expertise in <strong className="text-blue-300">full-stack development, backend system design, and agent-driven automation platforms</strong>.
              Proven ability to independently own features end-to-end, contribute across system layers, and adapt to product pivots while maintaining clean, scalable codebases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
