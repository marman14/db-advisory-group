import React from 'react';
import { ShieldCheck, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B132B] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                DB ADVISORY GROUP
              </span>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed font-light max-w-sm">
              Healthcare and National Provider Identifier (NPI) advisory directed by{' '}
              <strong className="text-white font-medium">Deion Broadnax</strong>. Delivering clarity, speed, and uncompromising regulatory compliance to medical practices.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>Principal Consultant: <span className="text-white font-medium">Deion Broadnax</span></div>
              <div>Headquarters: <span className="text-white font-medium">Columbus, GA</span></div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Deion Broadnax
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Healthcare & NPI Services
                </a>
              </li>
              <li>
                <a href="#environment" className="hover:text-white transition-colors">
                  Our Environment & Impact
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Consultation & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-slate-400">Direct Telephone</div>
                  <a href="tel:+17068871295" className="text-white font-medium hover:text-teal-300 transition-colors">
                    +1 706-887-1295
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-slate-400">Office Location</div>
                  <span className="text-white font-medium">
                    Columbus, Georgia, USA
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block text-xs font-semibold px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white transition-all shadow-sm"
              >
                Book a Free Discovery Call
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} DB ADVISORY GROUP. All rights reserved. Deion Broadnax, Principal. Columbus, GA.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Confidential Healthcare Advisory</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-300 hover:text-teal-300 transition-colors p-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
