import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">Contact</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <a href="mailto:suriyandhanapal@gmail.com" className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/90 hover:border-blue-300/40 transition-colors">
            <div className="flex items-center gap-3"><FiMail className="text-blue-300" /><span>suriyandhanapal@gmail.com</span></div>
          </a>
          <a href="tel:+918110044608" className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/90 hover:border-blue-300/40 transition-colors">
            <div className="flex items-center gap-3"><FiPhone className="text-blue-300" /><span>+91 81100 44608</span></div>
          </a>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/90">
            <div className="flex items-center gap-3"><FiMapPin className="text-blue-300" /><span>Coimbatore, India</span></div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/90 flex items-center justify-center gap-4">
            <a href="https://www.linkedin.com/in/suriyan-d-74514223a" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FiLinkedin size={20} /></a>
            <a href="https://github.com/iamsuriyan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FiGithub size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
