import React, { useState } from 'react';
import { User, Building, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

const InteractiveNpiGuide = () => {
  const [selectedType, setSelectedType] = useState('type1');

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Interactive Advisory Tool
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-navy-900">
            Which NPI Structure Does Your Practice Require?
          </h3>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-light">
            Compare Type 1 (Individual) and Type 2 (Organization) requirements at a glance.
          </p>
        </div>

        {/* Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl">
            <button
              onClick={() => setSelectedType('type1')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                selectedType === 'type1'
                  ? 'bg-white text-navy-900 shadow-sm'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              <User className="w-4 h-4 text-teal-600" />
              <span>Type 1: Individual Providers</span>
            </button>
            <button
              onClick={() => setSelectedType('type2')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                selectedType === 'type2'
                  ? 'bg-white text-navy-900 shadow-sm'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              <Building className="w-4 h-4 text-teal-600" />
              <span>Type 2: Organizations & Groups</span>
            </button>
          </div>
        </div>

        {/* Tab Content Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-subtle p-8 md:p-10 transition-all duration-300">
          {selectedType === 'type1' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                  Individual Practitioner
                </span>
                <h4 className="text-2xl font-bold text-navy-900 mt-1 mb-4">
                  Type 1 NPI Enumeration
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  Assigned to individual healthcare providers including physicians, dentists, chiropractors, nurse practitioners, physician assistants, and licensed clinical social workers.
                </p>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Permanent 10-digit number that stays with you across your entire career</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Required for rendering provider billing on CMS-1500 claim forms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Tied directly to your primary state medical license and DEA registry</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/60">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  DB Advisory Group Checklist
                </h5>
                <ul className="space-y-3 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Primary & secondary taxonomy code alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Practice location vs. public mailing address privacy setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Identity verification & NPPES login credentials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Fast-track submission with Deion Broadnax</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                  Group / Facility Entity
                </span>
                <h4 className="text-2xl font-bold text-navy-900 mt-1 mb-4">
                  Type 2 NPI Enumeration
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  Assigned to incorporated healthcare entities including group practices, hospitals, clinics, nursing homes, laboratories, and durable medical equipment (DME) suppliers.
                </p>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Assigned to organizations with an Employer Identification Number (EIN)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Allows billing provider claims for multiple mid-levels and physicians</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Essential for commercial group contracts, Medicare group PTANs</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/60">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  DB Advisory Group Checklist
                </h5>
                <ul className="space-y-3 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Corporate entity structure & authorized official assignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Subpart determination (multi-location or department NPIs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>NPPES organizational taxonomy validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Direct coordination with Columbus, GA principal</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveNpiGuide;
