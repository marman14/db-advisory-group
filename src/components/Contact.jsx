import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    practiceName: '',
    email: '',
    phone: '',
    serviceInterest: 'NPI Registration (Type 1 or 2)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (formError) setFormError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError('Please fill in your name, email, and phone number.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    // Simulate reliable advisory submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti for consultation submission
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#0d9488', '#14b8a6', '#0b132b', '#38bdf8'],
        });
      } catch (err) {
        // ignore if canvas confetti is blocked
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white text-[#374151] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-[#0D9488] text-xs font-semibold tracking-wider uppercase mb-4">
            Direct Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B132B] leading-tight">
            Connect with DB ADVISORY GROUP
          </h2>
          <p className="mt-4 text-lg text-[#374151] font-light">
            Schedule a complimentary consultation with Deion Broadnax to evaluate your practice’s NPI credentialing and compliance strategy.
          </p>
          <div className="w-16 h-1 bg-[#0D9488] rounded-full mt-6" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info & Columbus, GA Profile */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200/90 shadow-subtle space-y-6">
              <h3 className="text-xl font-bold text-[#0B132B] mb-2">Office Information</h3>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200/80 text-[#0D9488] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                    Direct Phone Line
                  </div>
                  <a
                    href="tel:+17068871295"
                    className="text-lg sm:text-xl font-bold text-[#0B132B] hover:text-[#0D9488] transition-colors block mt-0.5"
                  >
                    +1 706-887-1295
                  </a>
                  <p className="text-xs text-[#4B5563] mt-0.5">Direct line to Deion Broadnax</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200/80 text-[#0D9488] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                    Headquarters
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#0B132B] mt-0.5">
                    Columbus, Georgia
                  </div>
                  <p className="text-xs text-[#4B5563] mt-0.5">Serving Georgia & Healthcare Providers Nationwide</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200/80 text-[#0D9488] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                    Advisory Hours
                  </div>
                  <div className="text-base font-semibold text-[#0B132B] mt-0.5">
                    Monday – Friday: 8:00 AM – 6:00 PM EST
                  </div>
                  <p className="text-xs text-[#4B5563] mt-0.5">Weekend urgent consultations available by appointment</p>
                </div>
              </div>
            </div>

            {/* Privacy & Trust Assurance Box */}
            <div className="p-6 bg-teal-50/60 rounded-2xl border border-teal-100 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-[#0D9488] shrink-0 mt-0.5" />
              <div className="text-xs text-[#374151] leading-relaxed">
                <strong className="text-[#0B132B] font-semibold block mb-1">HIPAA & Privacy Safeguard</strong>
                All provider details, EIN numbers, and proprietary practice data shared with DB ADVISORY GROUP are protected under rigorous professional confidentiality agreements.
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Breathable Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 shadow-premium p-8 md:p-10">
              
              {isSubmitted ? (
                <div className="text-center py-12 px-4 space-y-4">
                  <div className="w-16 h-16 bg-teal-50 text-[#0D9488] rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B132B]">
                    Consultation Request Received
                  </h3>
                  <p className="text-[#374151] max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <span className="font-semibold text-[#0B132B]">{formData.fullName}</span>. 
                    Deion Broadnax will review your practice information and reach out directly at{' '}
                    <span className="font-semibold text-[#0B132B]">{formData.phone}</span> within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          practiceName: '',
                          email: '',
                          phone: '',
                          serviceInterest: 'NPI Registration (Type 1 or 2)',
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-[#0B132B] hover:bg-white transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B132B] mb-1">
                      Request Your Free Consultation
                    </h3>
                    <p className="text-xs text-[#6B7280]">
                      Fill out the form below and we will contact you promptly.
                    </p>
                  </div>

                  {formError && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#0B132B] uppercase tracking-wider mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Dr. Jane Smith or Deion Broadnax"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#374151] focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all"
                      />
                    </div>

                    {/* Practice / Organization Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#0B132B] uppercase tracking-wider mb-2">
                        Practice or Organization Name
                      </label>
                      <input
                        type="text"
                        name="practiceName"
                        value={formData.practiceName}
                        onChange={handleChange}
                        placeholder="e.g. Columbus Family Clinic"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#374151] focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-[#0B132B] uppercase tracking-wider mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="doctor@practice.com"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#374151] focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-[#0B132B] uppercase tracking-wider mb-2">
                        Direct Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (706) 000-0000"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#374151] focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Consultation Topic */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0B132B] uppercase tracking-wider mb-2">
                      Primary Area of Interest
                    </label>
                    <select
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-[#374151]"
                    >
                      <option value="NPI Registration (Type 1 or 2)">NPI Registration (Type 1 Individual or Type 2 Group)</option>
                      <option value="Healthcare Compliance Consulting">Healthcare Compliance & Regulatory Strategy</option>
                      <option value="Practice Management & Workflow">Practice Management & Operational Optimization</option>
                      <option value="Payer Credentialing & NPPES Updates">Payer Credentialing & NPPES Registry Updates</option>
                      <option value="General Consultation">General Healthcare Consulting Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0B132B] uppercase tracking-wider mb-2">
                      Brief Message or Current Challenge
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share any specific credentialing deadlines, taxonomy questions, or practice management goals..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#374151] focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all resize-y"
                    />
                  </div>

                  {/* Primary CTA Submit Button - Medical Teal (#0D9488), White Text */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
