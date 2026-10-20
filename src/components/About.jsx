import React from 'react';
import { UserCheck, MapPin, Building2, Shield, Target, Compass, Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50/60 text-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
            About Our Practice
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-900 leading-tight">
            Rooted in Columbus, Georgia. Dedicated to Provider Excellence.
          </h2>
          <div className="w-16 h-1 bg-teal-500 rounded-full mt-6" />
        </div>

        {/* Grid: Story & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Mission & Background */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            <p className="text-slate-700 font-medium text-xl leading-relaxed">
              Founded and directed by <span className="text-navy-900 font-bold">Deion Broadnax</span>,{' '}
              <span className="text-navy-900 font-bold">DB ADVISORY GROUP</span> is a specialized healthcare 
              consultancy created to eliminate the administrative burden and regulatory complexities facing modern providers.
            </p>

            <p>
              Operating from <span className="text-navy-900 font-semibold">Columbus, GA</span>, our firm bridges the gap between intricate federal requirements and daily clinical operations. We recognize that healthcare professionals belong with their patients—not trapped in endless National Provider Identifier (NPI) verification loops or credentialing delays.
            </p>

            <p>
              Under Deion Broadnax’s guidance, DB ADVISORY GROUP has earned a reputation for precision, absolute confidentiality, and proactive compliance. Whether launching an independent clinic, expanding multi-specialty practices, or onboarding new clinical staff, we ensure your NPI credentials and operational frameworks meet 100% of state and federal benchmarks.
            </p>

            {/* Core Pillars */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200/70 shadow-subtle">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-600 mt-0.5">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 text-base">Uncompromising Compliance</h4>
                  <p className="text-xs text-slate-500 mt-1">Guarding practices against NPPES discrepancies and billing delays.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200/70 shadow-subtle">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-600 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 text-base">NPI Accuracy</h4>
                  <p className="text-xs text-slate-500 mt-1">Tailored Type 1 individual and Type 2 group taxonomies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-premium p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-0 opacity-80" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 text-white flex items-center justify-center font-bold text-2xl shadow-md mb-6 border-2 border-teal-400/40">
                  DB
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-navy-900">Deion Broadnax</h3>
                  <p className="text-sm font-medium text-teal-600 mt-0.5">
                    Managing Principal & Healthcare Compliance Director
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-teal-600" />
                    <span>Columbus, GA • Serving Georgia & Regional Practices</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100 text-sm text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>NPI Type 1 (Individual) & Type 2 (Group) Strategy</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>NPPES Registry & Taxonomy Mapping Specialist</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Clinical Workflow & Practice Management Advisory</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Direct Executive Consultation: +1 706-887-1295</span>
                  </div>
                </div>

                {/* Direct quote */}
                <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200/60 italic text-slate-700 text-sm">
                  "Our mission is simple: provide physicians and clinical groups with rock-solid compliance foundations so they can focus on what matters most—delivering extraordinary patient care."
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
