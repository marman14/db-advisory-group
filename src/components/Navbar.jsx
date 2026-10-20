import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B132B] border-b border-slate-800/90 py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Business Name / Brand */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-teal-500/15 text-teal-300 border border-teal-400/30">
            <ShieldCheck className="w-5 h-5 group-hover:scale-105 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white">
              DB ADVISORY GROUP
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-teal-400">
              Healthcare & NPI Consulting
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links - Completely Solid & Permanent at all times */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-[15px] font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-teal-300 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-teal-400" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu - Solid Dark Navy */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B132B] border-b border-slate-800 px-6 py-6 shadow-2xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2.5 px-4 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-teal-950/70 text-teal-300 font-semibold border border-teal-500/30'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
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
