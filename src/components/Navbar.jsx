import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = ['home', 'about', 'services', 'environment', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Impact', href: '#environment', id: 'environment' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-slate-200/80 py-4'
          : 'bg-[#06101E]/85 backdrop-blur-md border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Business Name / Brand */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isScrolled
                ? 'bg-navy-900 text-teal-400 shadow-sm'
                : 'bg-teal-500/10 text-teal-300 border border-teal-400/40'
            }`}
          >
            <ShieldCheck className="w-5 h-5 group-hover:scale-105 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span
              className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-navy-900' : 'text-white'
              }`}
            >
              DB ADVISORY GROUP
            </span>
            <span
              className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-teal-600' : 'text-teal-400'
              }`}
            >
              Healthcare & NPI Consulting
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links - Neat & Simple (No cluttered buttons) */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-[15px] font-medium tracking-wide transition-all duration-200 relative py-1 ${
                  isScrolled
                    ? isActive
                      ? 'text-teal-600 font-semibold'
                      : 'text-slate-600 hover:text-navy-900'
                    : isActive
                    ? 'text-teal-300 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-all duration-300 ${
                      isScrolled ? 'bg-teal-600' : 'bg-teal-400'
                    }`}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-navy-900 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-6 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-3 rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'bg-teal-50 text-teal-700 font-semibold'
                    : 'text-slate-700 hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
