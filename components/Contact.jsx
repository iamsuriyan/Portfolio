import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <a 
                href="mailto:suriyandhanapal@gmail.com"
                className="group flex items-center space-x-4 p-4 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FiMail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-cyan-300">suriyandhanapal@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+918110044608"
                className="group flex items-center space-x-4 p-4 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-purple-300">+91 81100 44608</p>
                </div>
              </a>

              <div className="group flex items-center space-x-4 p-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg flex items-center justify-center">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-cyan-300">Coimbatore, Tamil Nadu</p>
                </div>
              </div>
            </div>


          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Ready to Start?
            </h3>
            <p className="text-white/90 leading-relaxed">
              Whether you have a project in mind or just want to say hello, I'd love to hear from you. Let's create something extraordinary together.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:suriyandhanapal@gmail.com"
                className="group w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <FiMail className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </a>
              <a
                href="/SURIYAN-SD.pdf"
                download="Suriyan_Resume.pdf"
                className="group w-full border-2 border-white/30 text-white py-4 px-6 rounded-lg font-semibold hover:border-cyan-300 hover:text-cyan-300 hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
