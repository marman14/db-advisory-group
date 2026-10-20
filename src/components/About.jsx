import React from 'react';
import { MapPin, Shield, Target, Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white text-[#374151]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-[#0D9488] text-xs font-semibold tracking-wider uppercase mb-4">
            About Our Practice
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B132B] leading-tight">
            Rooted in Columbus, Georgia. Dedicated to Provider Excellence.
          </h2>
          <div className="w-16 h-1 bg-[#0D9488] rounded-full mt-6" />
        </div>

        {/* Grid: Story & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Mission & Background with Enhanced Breathing Room & Line-Height */}
          <div className="lg:col-span-7 space-y-7 text-base sm:text-lg text-[#374151] font-normal">
            <p className="text-[#1E293B] font-medium text-xl leading-[1.8]">
              Founded and directed by <span className="text-[#0B132B] font-bold">Deion Broadnax</span>,{' '}
              <span className="text-[#0B132B] font-bold">DB ADVISORY GROUP</span> is a specialized healthcare 
              consultancy created to eliminate the administrative burden and regulatory complexities facing modern providers.
            </p>

            <p className="leading-[1.8]">
              Operating from <span className="text-[#0B132B] font-semibold">Columbus, GA</span>, our firm bridges the gap between intricate federal requirements and daily clinical operations. We recognize that healthcare professionals belong with their patients—not trapped in endless National Provider Identifier (NPI) verification loops or credentialing delays.
            </p>

            <p className="leading-[1.8]">
              Under Deion Broadnax’s guidance, DB ADVISORY GROUP has earned a reputation for precision, absolute confidentiality, and proactive compliance. Whether launching an independent clinic, expanding multi-specialty practices, or onboarding new clinical staff, we ensure your NPI credentials and operational frameworks meet 100% of state and federal benchmarks.
            </p>

            {/* Core Pillars */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-start gap-3 p-5 bg-[#F8FAFC] rounded-xl border border-slate-200/80 shadow-subtle">
                <div className="p-2.5 bg-teal-50 rounded-lg text-[#0D9488] mt-0.5">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B132B] text-base">Uncompromising Compliance</h4>
                  <p className="text-xs text-[#4B5563] mt-1 leading-relaxed">Guarding practices against NPPES discrepancies and billing delays.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-[#F8FAFC] rounded-xl border border-slate-200/80 shadow-subtle">
                <div className="p-2.5 bg-teal-50 rounded-lg text-[#0D9488] mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B132B] text-base">NPI Accuracy</h4>
                  <p className="text-xs text-[#4B5563] mt-1 leading-relaxed">Tailored Type 1 individual and Type 2 group taxonomies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 shadow-premium p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-0 opacity-80" />
              
              <div className="relative z-10">
                {/* Professional Portrait of Consultant (Replacing placeholder "DB" box) */}
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md mb-6 border-2 border-teal-500/30 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                    alt="Deion Broadnax"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#0B132B]">Deion Broadnax</h3>
                  <p className="text-sm font-semibold text-[#0D9488] mt-0.5">
                    Managing Principal & Healthcare Compliance Director
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-[#4B5563] mt-2">
                    <MapPin className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>Columbus, GA • Serving Georgia & Regional Practices</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200 text-sm text-[#374151]">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span>NPI Type 1 (Individual) & Type 2 (Group) Strategy</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span>NPPES Registry & Taxonomy Mapping Specialist</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span>Clinical Workflow & Practice Management Advisory</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span>Direct Executive Consultation: +1 706-887-1295</span>
                  </div>
                </div>

                {/* Direct quote */}
                <div className="mt-8 p-4 bg-white rounded-xl border border-slate-200/80 italic text-[#374151] text-sm leading-relaxed">
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
