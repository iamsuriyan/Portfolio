import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-lg font-medium text-white/80 tracking-wide">
              Hello, I'm
            </p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none">
              SURIYAN
            </h1>
            <div className="space-y-2">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-300">
                Full Stack Developer
              </p>
              <p className="text-xl sm:text-2xl text-indigo-300">
                Scalable Applications
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-white/90 leading-relaxed">
              I create modern, scalable applications with clean code and innovative AI integrations. 
              Passionate about building solutions that make a difference.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="mailto:suriyandhanapal@gmail.com"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Get In Touch</span>
              <FiMail size={18} />
            </a>
            <a
              href="/Suriyan-SD.pdf"
              download="Suriyan-SD.pdf"
              className="px-6 py-3 border-2 border-white/30 text-white font-medium rounded-lg hover:border-blue-300 hover:text-blue-300 hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
            >
              <FiDownload size={18} />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/iamsuriyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue-300 transition-colors duration-300"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/suriyan-d-74514223a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-indigo-300 transition-colors duration-300"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:suriyandhanapal@gmail.com"
              className="text-white/70 hover:text-blue-300 transition-colors duration-300"
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/60 hover:text-indigo-300 transition-colors">
          <FiArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
