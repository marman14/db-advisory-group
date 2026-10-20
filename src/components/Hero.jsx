import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, FileCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Navy Overlay (82% opacity for 100% text legibility) */}
      <div 
        className="absolute inset-0 bg-[#0B132B]/82 pointer-events-none" 
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B132B] to-transparent pointer-events-none" 
      />

      {/* Content Container - Breathable, generous whitespace and high contrast */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        
        {/* Healthcare Trust Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-teal-950/70 border border-teal-500/30 text-teal-300 text-xs md:text-sm font-medium tracking-wide mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-teal-400 inline-block shadow-sm" />
          <span>Premier Healthcare & NPI Consulting • Columbus, GA</span>
        </div>

        {/* Strong Headline - Ultra-crisp, 100% readable over clean static navy gradient */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.14] mb-6">
          Navigating Healthcare <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-sky-300">
            Compliance with Confidence
          </span>
        </h1>

        {/* Clean Subtitle - High legibility, large font, relaxed leading */}
        <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-slate-200 font-light leading-relaxed mb-10">
          Empowering medical practitioners and clinical healthcare groups with seamless 
          NPI registration, regulatory credentialing, and high-efficiency practice management advisory.
        </p>

        {/* Clear Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-xl mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base md:text-lg font-semibold text-navy-950 bg-teal-400 hover:bg-teal-300 transition-all duration-200 shadow-floating hover:shadow-teal-400/40 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base md:text-lg font-medium text-white/95 bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Explore Services
          </a>
        </div>

        {/* Trust Verification Row */}
        <div className="w-full border-t border-slate-800 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-teal-500/15 text-teal-400 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">NPI Specialists</div>
              <div className="text-xs text-slate-300 mt-0.5">Type 1 & Type 2 Support</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-teal-500/15 text-teal-400 mt-0.5">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">CMS & NPPES Ready</div>
              <div className="text-xs text-slate-300 mt-0.5">Strict Audit Compliance</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-teal-500/15 text-teal-400 mt-0.5">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Executive Advisory</div>
              <div className="text-xs text-slate-300 mt-0.5">Deion Broadnax, Principal</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-teal-500/15 text-teal-400 mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Columbus, GA</div>
              <div className="text-xs text-slate-300 mt-0.5">Local Care, National Scope</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
