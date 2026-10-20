import React, { useState } from 'react';
import { 
  FileBadge2, 
  Stethoscope, 
  BriefcaseBusiness, 
  CheckCircle, 
  ArrowRight,
  ShieldAlert,
  ClipboardList,
  Sparkles,
  HelpCircle
} from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'npi-registration',
      title: 'NPI Registration & Enumeration',
      subtitle: 'Type 1 & Type 2 Provider Verification',
      badge: 'Core Specialty',
      icon: FileBadge2,
      description:
        'Complete end-to-end guidance through the National Plan and Provider Enumeration System (NPPES). We guarantee accurate taxonomy assignments, proper entity structure classification, and expedited approval for providers.',
      points: [
        'Type 1 NPI registration for individual physicians, nurse practitioners, and therapists',
        'Type 2 NPI registration for group practices, incorporated clinics, and acute facilities',
        'Healthcare Provider Taxonomy Code selection and proper sub-specialty mapping',
        'NPPES registry updates, address change filings, and deactivations/reactivations',
        'NPI discrepancy resolution preventing insurance claim rejections and audits',
      ],
      idealFor: 'Physicians, mid-levels, startups, and group practices entering network contracts.',
    },
    {
      id: 'healthcare-consulting',
      title: 'Healthcare Compliance Consulting',
      subtitle: 'Audit Readiness & Regulatory Strategy',
      badge: 'Strategic Advisory',
      icon: Stethoscope,
      description:
        'Navigating ever-evolving state and federal healthcare mandates can be overwhelming. DB ADVISORY GROUP conducts thorough compliance evaluations to safeguard your organization against audits and credentialing delays.',
      points: [
        'CMS and Georgia state healthcare regulatory compliance reviews',
        'Provider credentialing and re-credentialing roadmap development',
        'Payer enrollment advisory for commercial insurers, Medicare, and Medicaid',
        'Risk assessment protocols for documentation and provider identity security',
        'Audit preparedness for billing, taxonomy alignment, and clinical scope',
      ],
      idealFor: 'Independent medical groups, urgent cares, and healthcare leaders seeking risk mitigation.',
    },
    {
      id: 'practice-management',
      title: 'Practice Management & Operations',
      subtitle: 'Streamlining Clinical & Administrative Workflows',
      badge: 'Operational Excellence',
      icon: BriefcaseBusiness,
      description:
        'A flourishing medical practice requires frictionless operational workflows. We optimize internal processes, staffing structures, and administrative systems so your clinic runs smoothly and sustainably.',
      points: [
        'Clinical onboarding and provider credentialing pipeline management',
        'Administrative efficiency audits and revenue cycle compliance sync',
        'Front-office workflow restructuring to minimize registration and scheduling errors',
        'Policy and standard operating procedure (SOP) formulation for medical practices',
        'Executive advisory on practice expansion and multi-location standardization',
      ],
      idealFor: 'Practices looking to reduce overhead, eliminate bottlenecks, and scale operations.',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
            Specialized Practice Areas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-900 leading-tight">
            Comprehensive Healthcare Advisory Built on Precision
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed font-light">
            Targeted solutions tailored for independent physicians, medical groups, and healthcare facilities.
          </p>
        </div>

        {/* 3 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 p-8 hover:border-teal-400 transition-all duration-300 hover:shadow-floating"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-teal-50 group-hover:bg-navy-900 text-teal-600 group-hover:text-teal-300 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-teal-600 mb-4">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3 pt-4 border-t border-slate-100 mb-8">
                    {service.points.slice(0, 4).map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA link */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 group-hover:text-teal-600 transition-colors"
                  >
                    <span>Request Service Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Value Callout: The NPI Difference */}
        <div className="bg-navy-900 text-white rounded-3xl p-8 md:p-12 shadow-premium relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-widest text-teal-300 uppercase block mb-2">
                Why Specialized NPI Guidance Matters
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                An incorrect taxonomy code can hold thousands in payer reimbursements.
              </h3>
              <p className="text-slate-300 text-base leading-relaxed font-light">
                National Provider Identifiers are not merely 10-digit numbers—they govern how insurance networks, Medicare, and Medicaid categorize your scope of practice. Deion Broadnax and DB ADVISORY GROUP ensure your NPI records are flawless from day one.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-start lg:items-end">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-navy-950 font-semibold text-sm transition-all duration-200 shadow-md whitespace-nowrap"
              >
                Schedule NPI Review
              </a>
              <span className="text-xs text-slate-400">
                Direct Line: <strong className="text-white">+1 706-887-1295</strong>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
