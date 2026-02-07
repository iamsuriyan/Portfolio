export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-white/90">
                I'm a passionate full stack developer with <strong className="text-blue-300">1+ years of professional experience</strong> in building <strong className="text-indigo-300">scalable, high-performance applications</strong> using modern frameworks and cutting-edge AI Integrations.
              </p>

              <p className="text-white/90">
                My approach centers on writing <strong className="text-blue-300">clean, maintainable code</strong> that follows industry standards. I thrive on creating innovative solutions that seamlessly bridge complex technical requirements with intuitive user experiences.
              </p>

              <p className="text-white/90">
                From mobile applications to enterprise-level platforms, I deliver <strong className="text-indigo-300">end-to-end solutions</strong> that are both technically robust and user-friendly. My expertise spans across modern frameworks, cloud technologies, and emerging AI integrations.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
