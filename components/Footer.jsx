import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="px-6 sm:px-8 lg:px-12 py-10 border-t border-[#151515]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span className="text-sm text-white/20 font-medium">
              &copy; {new Date().getFullYear()} Suriyan
            </span>
            <span className="hidden sm:block text-white/10">|</span>
            <span className="text-sm text-white/15">
              AI & Full-Stack Development Services
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/iamsuriyan" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-accent transition-colors duration-300">
              <FiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/suriyan-d-74514223a/" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-accent transition-colors duration-300">
              <FiLinkedin size={18} />
            </a>
            <a href="mailto:suriyandhanapal@gmail.com" className="text-white/20 hover:text-accent transition-colors duration-300">
              <FiMail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
