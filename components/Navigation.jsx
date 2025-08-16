'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setMobileMenuOpen(false); // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`fixed top-0 w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50 transition-all duration-500 ease-in-out ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div></div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/90 hover:text-blue-300 transition-all duration-300 font-medium hover:scale-105">
              About
            </a>
            <a href="#skills" className="text-white/90 hover:text-indigo-300 transition-all duration-300 font-medium hover:scale-105">
              Skills
            </a>
            <a href="#projects" className="text-white/90 hover:text-blue-300 transition-all duration-300 font-medium hover:scale-105">
              Projects
            </a>
            <a href="#contact" className="text-white/90 hover:text-indigo-300 transition-all duration-300 font-medium hover:scale-105">
              Contact
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden relative z-60">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-xl text-white/90 hover:text-blue-300 hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-110 active:scale-95"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <div className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-500 ease-in-out ${
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 ${
              mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className={`absolute top-0 left-0 right-0 bg-black/40 backdrop-blur-xl border-b border-white/10 transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col space-y-6">
                {[
                  { href: '#about', label: 'About', color: 'blue' },
                  { href: '#skills', label: 'Skills', color: 'indigo' },
                  { href: '#projects', label: 'Projects', color: 'blue' },
                  { href: '#contact', label: 'Contact', color: 'indigo' }
                ].map((item, index) => (
                  <a 
                    key={item.href}
                    href={item.href} 
                    className={`text-xl font-semibold text-white/95 hover:text-${item.color}-300 transition-all duration-300 py-4 px-6 rounded-xl hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-${item.color}-300/50 focus:ring-offset-2 focus:ring-offset-transparent transform hover:translate-x-2 ${
                      mobileMenuOpen ? 'animate-fade-in-up' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'both'
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
