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

  return (
    <nav className={`fixed top-0 w-full bg-white/10 backdrop-blur-lg z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div></div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/90 hover:text-blue-300 transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#skills" className="text-white/90 hover:text-indigo-300 transition-colors duration-300 font-medium">
              Skills
            </a>
            <a href="#projects" className="text-white/90 hover:text-blue-300 transition-colors duration-300 font-medium">
              Projects
            </a>
            <a href="#contact" className="text-white/90 hover:text-indigo-300 transition-colors duration-300 font-medium">
              Contact
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-lg text-white/90 hover:text-blue-300 hover:bg-white/10 transition-colors duration-300"
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 bg-white/10 backdrop-blur-lg">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-lg font-medium text-white/90 hover:text-blue-300 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-lg font-medium text-white/90 hover:text-indigo-300 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="text-lg font-medium text-white/90 hover:text-blue-300 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-lg font-medium text-white/90 hover:text-indigo-300 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
