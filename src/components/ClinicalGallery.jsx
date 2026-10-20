import React from 'react';
import { Stethoscope, Users, Building, ShieldCheck, CheckCircle2 } from 'lucide-react';

const ClinicalGallery = () => {
  const galleryItems = [
    {
      title: 'Physician & Practice Advisory',
      category: '1-on-1 Provider Consulting',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
      description:
        'Personalized guidance for physicians navigating Type 1 NPI enumeration, medical board licensing sync, and clinical scope alignment.',
      icon: Stethoscope,
      badge: 'Individual Practice',
    },
    {
      title: 'Multi-Specialty Clinical Teams',
      category: 'Provider Onboarding & Integration',
      image:
        'https://images.unsplash.com/photo-1576091160550-2173ff9e5e3c?auto=format&fit=crop&w=800&q=80',
      description:
        'Structuring Type 2 group NPI classifications and subparts for multi-provider clinics, nurse practitioners, and allied care teams.',
      icon: Users,
      badge: 'Group Practices',
    },
    {
      title: 'Accredited Facility Infrastructure',
      category: 'Audit & Compliance Readiness',
      image:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      description:
        'Designing friction-free operational workflows and NPPES registry adherence for modern ambulatory clinics and care centers.',
      icon: Building,
      badge: 'Clinical Facilities',
    },
  ];

  return (
    <section id="environment" className="py-24 md:py-32 bg-slate-50/70 text-slate-800 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
            Practice Environment & Impact
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-900 leading-tight">
            Our Environment & Impact
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-light leading-relaxed">
            From solo practitioners to expanding multi-provider facilities, DB ADVISORY GROUP delivers 
            the compliance rigor that empowers high-standard patient care.
          </p>
          <div className="w-16 h-1 bg-teal-500 rounded-full mt-6" />
        </div>

        {/* 3-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-premium hover:shadow-floating transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Zoom effect */}
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-navy-900 backdrop-blur-md shadow-sm border border-white/40">
                        <Icon className="w-3.5 h-3.5 text-teal-600" />
                        <span>{item.badge}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-7">
                    <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider block mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-teal-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer trust check */}
                <div className="px-7 pb-6 pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Fully Compliant with CMS & NPPES Mandates</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quantified Impact Banner */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-subtle grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-extrabold text-navy-900">100%</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              NPI Filing Accuracy
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-extrabold text-teal-600">30-Day</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              Accelerated Workflow
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-extrabold text-navy-900">Type 1 & 2</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              Entity Expertise
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-extrabold text-teal-600">Zero</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              Audit Discrepancies
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClinicalGallery;
