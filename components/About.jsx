export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-white/90">
                I'm a passionate full stack developer with <strong className="text-cyan-300">1+ years of professional experience</strong> in building <strong className="text-purple-300">scalable, high-performance applications</strong> using modern frameworks and cutting-edge AI integrations.
              </p>

              <p className="text-white/90">
                My approach centers on writing <strong className="text-cyan-300">clean, maintainable code</strong> that follows industry standards. I thrive on creating innovative solutions that seamlessly bridge complex technical requirements with intuitive user experiences.
              </p>

              <p className="text-white/90">
                From mobile applications to enterprise-level platforms, I deliver <strong className="text-purple-300">end-to-end solutions</strong> that are both technically robust and user-friendly. My expertise spans across modern frameworks, cloud technologies, and emerging AI integrations.
              </p>

            </div>
          </div>

          {/* Cosmic Stats or Visual Element */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Glowing Stats Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-white">1+</div>
                    <div className="text-sm text-white/80">Years Experience</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-white">15+</div>
                    <div className="text-sm text-white/80">Projects Built</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-white">5+</div>
                    <div className="text-sm text-white/80">Technologies</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-sm text-white/80">Commitment</div>
                  </div>
                </div>
              </div>
              
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
